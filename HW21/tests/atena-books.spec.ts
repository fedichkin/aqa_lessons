import { expect } from '@playwright/test';
import { CatalogPage } from '../src/pages/catalog.page';
import { BookData } from '../src/models/book-data.pm';
import { BookPage } from '../src/pages/book.page';
import { CartPage } from '../src/pages/cart.page';
import { test } from '../src/fixtures/pages.fixtures';

test.describe('Atena books', () => {
    let catalogPage: CatalogPage;
    let bookPage: BookPage;
    let cartPage: CartPage;

    test.beforeEach(async ({ mainPage }) => {
        await test.step('Open main page', async () => {
            await mainPage.goTo();
        });
    });

    test('should open main page and check key element are visible', async ({ mainPage }) => {
        await test.step('Check logo of page is visible', async () => {
            await expect(mainPage.logo).toBeVisible();
        });

        await test.step('Check left menu is visible', async () => {
            await expect(mainPage.leftMenu.items).toHaveText(['Книги', 'Автори', 'Блог', 'Про нас']);
        });

        await test.step('Check right menu is visible', async () => {
            await expect(mainPage.rightMenu.items).toHaveCount(5);
        });
    });

    test('should open catalog, select first book, remember data and check it on book page', async ({ page, mainPage }) => {
        let bookData: BookData;

        await test.step('Open catalog', async () => {
            await mainPage.leftMenu.openCatalog();
        });

        await test.step('Check cards of books are visible', async () => {
            catalogPage = new CatalogPage(page);
            await expect(catalogPage.books).toHaveCount(9);
        });

        await test.step('Get data of first book', async () => {
            bookData = await catalogPage.getDataOfBook(1);
        });

        await test.step('Open first book page', async () => {
            await catalogPage.openBook(1);
        });

        await test.step('Check book data on book page', async () => {
            bookPage = new BookPage(page);

            const bookPageTitle = await bookPage.title.textContent();
            const bookPageAuthor = await bookPage.author.textContent();
            const bookPagePrice = await bookPage.getPriceAsNumber();

            expect(bookPageTitle).toBe(bookData.title);
            expect(bookPageAuthor).toBe(bookData.author);
            expect(bookPagePrice).toBe(bookData.price);
        });
    });

    test('should check functional of pagination on catalog page', async ({ page, mainPage }) => {
        await test.step('Open catalog', async () => {
            await mainPage.leftMenu.openCatalog();
        });

        await test.step('Check pagination is visible', async () => {
            catalogPage = new CatalogPage(page);
            await expect(catalogPage.pagination.activePage).toBeVisible();
        });

        await test.step('Check first page is active by default', async () => {
            expect(await catalogPage.pagination.getActivePageNumber()).toBe(1);
        });

        await test.step('Go to page 3 by number click', async () => {
            const firstBookOnPage1 = await catalogPage.getDataOfBook(1);

            await catalogPage.pagination.goToPage(3);

            expect(await catalogPage.pagination.getActivePageNumber()).toBe(3);
            expect(page.url()).toContain('page=3');

            const firstBookOnPage3 = await catalogPage.getDataOfBook(1);
            expect(firstBookOnPage3.title).not.toBe(firstBookOnPage1.title);
        });

        await test.step('Go to next page', async () => {
            await catalogPage.pagination.goToNextPage();
            expect(await catalogPage.pagination.getActivePageNumber()).toBe(4);
        });

        await test.step('Go to previous page', async () => {
            await catalogPage.pagination.goToPrevPage();
            expect(await catalogPage.pagination.getActivePageNumber()).toBe(3);
        });
    });

    test('should add book to cart, check its count and remove it from cart', async ({ page, mainPage }) => {
        let bookData: BookData;

        await test.step('Open catalog', async () => {
            await mainPage.leftMenu.openCatalog();
            catalogPage = new CatalogPage(page);
        });

        await test.step('Add first book to cart', async () => {
            bookData = await catalogPage.getDataOfBook(1);
            await catalogPage.getBookCard(1).buy();

            const modal = catalogPage.addToCartModal;
            await expect(modal.productTitle).toHaveText(bookData.title as string);
            await expect(modal.quantityInput).toHaveValue('1');

            await modal.close();
        });

        await test.step('Check cart items count in header', async () => {
            await page.reload();
            await expect(mainPage.rightMenu.cartItemsCount).toHaveText('1');
        });

        await test.step('Remove book from cart', async () => {
            await mainPage.rightMenu.openCart();
            cartPage = new CartPage(page);

            await expect(cartPage.getItem(1).title).toHaveText(bookData.title as string);
            await cartPage.getItem(1).remove();

            await expect(cartPage.emptyMessage).toBeVisible();
        });
    });
});

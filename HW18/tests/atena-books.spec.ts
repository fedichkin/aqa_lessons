import { test, expect } from '@playwright/test';
import { MainPage } from '../src/pages/main.page';
import { CatalogPage } from '../src/pages/catalog.page';
import { BookData } from '../src/models/book-data.pm';
import { BookPage } from '../src/pages/book.page';

test.describe('Atena books', () => {
    let mainPage: MainPage;
    let catalogPage: CatalogPage;
    let bookPage: BookPage;

    test('should open main page and check key element are visible', async ({ page }) => {
        mainPage = new MainPage(page);

        await test.step('Open main page', async () => {
            await mainPage.goTo();
        });

        await test.step('Check logo of page is visible', async () => {
            await expect(mainPage.logo).toBeVisible();
        });

        await test.step('Check left menu is visible', async () => {
            await expect(mainPage.leftMenu).toBeVisible();
            await expect(mainPage.leftMenuItems).toHaveText(['Книги', 'Автори', 'Блог', 'Про нас']);
        });

        await test.step('Check right menu is visible', async () => {
            await expect(mainPage.rightMenu).toBeVisible();
            await expect(mainPage.rightMenuItems).toHaveCount(5);
        });
    });

    test('should open catalog, select first book, remember data and check it on book page', async ({ page }) => {
        let bookData: BookData;

        mainPage = new MainPage(page);

        await test.step('Open main page', async () => {
            await mainPage.goTo();
        });

        await test.step('Open catalog', async () => {
            await mainPage.openCatalog();
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

    test('should check functional of pagination on catalog page', async ({ page }) => {
        mainPage = new MainPage(page);

        await test.step('Open main page', async () => {
            await mainPage.goTo();
        });

        await test.step('Open catalog', async () => {
            await mainPage.openCatalog();
        });

        await test.step('Check pagination is visible', async () => {
            catalogPage = new CatalogPage(page);
            await expect(catalogPage.pagination).toBeVisible();
        });

        await test.step('Check first page is active by default', async () => {
            expect(await catalogPage.getActivePageNumber()).toBe(1);
        });

        await test.step('Go to page 3 by number click', async () => {
            const firstBookOnPage1 = await catalogPage.getDataOfBook(1);

            await catalogPage.goToPage(3);

            expect(await catalogPage.getActivePageNumber()).toBe(3);
            expect(page.url()).toContain('page=3');

            const firstBookOnPage3 = await catalogPage.getDataOfBook(1);
            expect(firstBookOnPage3.title).not.toBe(firstBookOnPage1.title);
        });

        await test.step('Go to next page', async () => {
            await catalogPage.goToNextPage();
            expect(await catalogPage.getActivePageNumber()).toBe(4);
        });

        await test.step('Go to previous page', async () => {
            await catalogPage.goToPrevPage();
            expect(await catalogPage.getActivePageNumber()).toBe(3);
        });
    });
});

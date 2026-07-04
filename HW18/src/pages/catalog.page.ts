import {Locator, Page} from '@playwright/test';
import {BookData} from '../models/book-data.pm';
import {parsePrice} from '../utils/price.util';

export class CatalogPage {
    public get books(): Locator {
        return this.page.locator('.o-catalog');
    }

    public get pagination(): Locator {
        return this.page.locator('.-bottomPager');
    }

    public get activePage(): Locator {
        return this.pagination.locator('.-act');
    }

    public get pageLinks(): Locator {
        return this.pagination.locator('a:not(.-prev):not(.-next)');
    }

    public get prevPageButton(): Locator {
        return this.pagination.locator('.-prev');
    }

    public get nextPageButton(): Locator {
        return this.pagination.locator('.-next');
    }

    public constructor(private page: Page) {}

    public async getDataOfBook(num: number): Promise<BookData> {
        const book = this.books.nth(num - 1);
        const title = await book.locator('h4').textContent();
        const author = await book.locator('.o-catalog__author').textContent();
        const price = parsePrice(await book.locator('.-price').textContent() ?? '');

        return { title, author, price };
    }

    public async openBook(num: number): Promise<void> {
        await this.books.nth(num - 1).locator('header a').click();
    }

    public async getActivePageNumber(): Promise<number> {
        return Number(await this.activePage.textContent());
    }

    public async goToPage(num: number): Promise<void> {
        await this.pageLinks.filter({ hasText: new RegExp(`^${num}$`) }).click();
    }

    public async goToNextPage(): Promise<void> {
        await this.nextPageButton.click();
    }

    public async goToPrevPage(): Promise<void> {
        await this.prevPageButton.click();
    }
}

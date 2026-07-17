import { Locator } from 'playwright';
import { BookData } from '../models/book-data.pm';
import { AddToCartModalComponent, BookCardComponent, PaginationComponent } from './components';
import {BasePage} from './base.page';

export class CatalogPage extends BasePage {
    public get books(): Locator {
        return this.page.locator('.o-catalog');
    }

    public get pagination(): PaginationComponent {
        const locator = this.page.locator('.-bottomPager');

        return new PaginationComponent(locator);
    }

    public get addToCartModal(): AddToCartModalComponent {
        const locator = this.page.locator('.modal');

        return new AddToCartModalComponent(locator);
    }

    public getBookCard(num: number): BookCardComponent {
        return new BookCardComponent(this.books.nth(num - 1));
    }

    public async getDataOfBook(num: number): Promise<BookData> {
        return await this.getBookCard(num).getData();
    }

    public async openBook(num: number): Promise<void> {
        await this.getBookCard(num).open();
    }
}

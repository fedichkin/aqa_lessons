import { Locator } from 'playwright';
import { BookData } from '../../models/book-data.pm';
import { parsePrice } from '../../utils/price.util';

export class BookCardComponent {
    public get badge(): Locator {
        return this.baseLocator.locator('.o-catalog__badges .badge');
    }

    public get coverLink(): Locator {
        return this.baseLocator.locator('header a');
    }

    public get title(): Locator {
        return this.baseLocator.locator('h4');
    }

    public get author(): Locator {
        return this.baseLocator.locator('.o-catalog__author');
    }

    public get price(): Locator {
        return this.baseLocator.locator('.-price');
    }

    public get buyButton(): Locator {
        return this.baseLocator.locator('.js-buy');
    }

    public constructor(private readonly baseLocator: Locator) {}

    public async getData(): Promise<BookData> {
        const title = await this.title.textContent();
        const author = await this.author.textContent();
        const price = parsePrice(await this.price.textContent() ?? '');

        return { title, author, price };
    }

    public async open(): Promise<void> {
        await this.coverLink.click();
    }

    public async buy(): Promise<void> {
        await this.buyButton.click();
    }
}

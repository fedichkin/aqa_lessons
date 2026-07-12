import { Locator } from 'playwright';
import { parsePrice } from '../utils/price.util';
import {BasePage} from './base.page';

export class BookPage extends BasePage {
    public get title(): Locator {
        return this.page.locator('h1');
    }

    public get author(): Locator {
        return this.page.locator('.-info h3');
    }

    public get price(): Locator {
        return this.page.locator('.-price');
    }

    public async getPrice(): Promise<string> {
        const fullText = (await this.price.textContent()) ?? '';

        const children = await this.price.locator('> *').all();
        const childTexts = await Promise.all(children.map(child => child.textContent()));

        let ownText = fullText;
        for (const childText of childTexts) {
            if (childText) {
                ownText = ownText.replace(childText, '');
            }
        }

        return ownText.trim().split(/\s+/).join(' ');
    }

    public async getPriceAsNumber(): Promise<number> {
        return parsePrice(await this.getPrice());
    }
}

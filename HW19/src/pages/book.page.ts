import { Locator } from '@playwright/test';
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
        return this.price.evaluate(el =>
            Array.from(el.childNodes)
                .filter(node => node.nodeType === Node.TEXT_NODE)
                .map(node => node.textContent?.trim())
                .filter(Boolean)
                .join(' ')
        );
    }

    public async getPriceAsNumber(): Promise<number> {
        return parsePrice(await this.getPrice());
    }
}

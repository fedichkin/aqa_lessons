import { Locator } from 'playwright';

export class RightMenuComponent {
    public get items(): Locator {
        return this.baseLocator.locator('a');
    }

    public get cartLink(): Locator {
        return this.baseLocator.locator('.el-cart');
    }

    public get cartItemsCount(): Locator {
        return this.cartLink.locator('b');
    }

    public constructor(private readonly baseLocator: Locator) {}

    public async openCart(): Promise<void> {
        await this.cartLink.click();
    }
}

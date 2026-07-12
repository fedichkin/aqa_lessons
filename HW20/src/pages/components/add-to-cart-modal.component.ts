import { Locator } from 'playwright';

export class AddToCartModalComponent {
    public get productTitle(): Locator {
        return this.baseLocator.locator('.product .-info > strong');
    }

    public get quantityInput(): Locator {
        return this.baseLocator.locator('.-count input');
    }

    public get closeButton(): Locator {
        return this.baseLocator.locator('.js-close');
    }

    public constructor(private readonly baseLocator: Locator) {}

    public async close(): Promise<void> {
        await this.closeButton.click();
    }
}

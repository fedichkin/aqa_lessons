import { Locator } from '@playwright/test';

export class CartItemComponent {
    public get title(): Locator {
        return this.baseLocator.locator('.-info > strong');
    }

    public get author(): Locator {
        return this.baseLocator.locator('.-info > i');
    }

    public get price(): Locator {
        return this.baseLocator.locator('.-price');
    }

    public get removeButton(): Locator {
        return this.baseLocator.locator('.-remove');
    }

    public constructor(private readonly baseLocator: Locator) {}

    public async remove(): Promise<void> {
        await this.removeButton.click();
    }
}

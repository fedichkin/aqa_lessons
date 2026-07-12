import { Locator } from 'playwright';

export class LeftMenuComponent {
    public get items(): Locator {
        return this.baseLocator.locator('a[href*="https://atenabooks.com/"]');
    }

    public get catalogLink(): Locator {
        return this.items.filter({ hasText: 'Книги' });
    }

    public constructor(private readonly baseLocator: Locator) {}

    public async openCatalog(): Promise<void> {
        await this.catalogLink.click();
    }
}

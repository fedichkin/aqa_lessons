import { Locator } from 'playwright';

export class PaginationComponent {
    public get activePage(): Locator {
        return this.baseLocator.locator('.-act');
    }

    public get pageLinks(): Locator {
        return this.baseLocator.locator('a:not(.-prev):not(.-next)');
    }

    public get prevPageButton(): Locator {
        return this.baseLocator.locator('.-prev');
    }

    public get nextPageButton(): Locator {
        return this.baseLocator.locator('.-next');
    }

    public constructor(private readonly baseLocator: Locator) {}

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

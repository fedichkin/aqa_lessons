import {Locator, Page} from '@playwright/test';

export class MainPage {
    public get logo(): Locator {
        return this.page.locator('header .el-logo');
    }

    public get leftMenu(): Locator {
        return this.page.locator('nav');
    }

    public get leftMenuItems(): Locator {
        return this.leftMenu.locator('a[href*="https://atenabooks.com/"]');
    }

    public get rightMenu(): Locator {
        return this.page.locator('header .bl-icons');
    }

    public get rightMenuItems(): Locator {
        return this.rightMenu.locator('a');
    }

    public constructor(private page: Page) {}

    public async goTo(): Promise<void> {
        await this.page.goto('https://atenabooks.com/', { waitUntil: 'domcontentloaded' });
    }

    public async openCatalog(): Promise<void> {
        await this.leftMenuItems.filter({ hasText: 'Книги' }).click();
    }
}

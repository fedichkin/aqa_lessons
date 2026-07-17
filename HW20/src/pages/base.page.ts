import { Locator, Page } from 'playwright';
import { LeftMenuComponent, RightMenuComponent } from './components';

export class BasePage {
    public get logo(): Locator {
        return this.page.locator('header .el-logo');
    }

    public get leftMenu(): LeftMenuComponent {
        const locator = this.page.locator('nav');

        return new LeftMenuComponent(locator);
    }

    public get rightMenu(): RightMenuComponent {
        const locator = this.page.locator('header .bl-icons');

        return new RightMenuComponent(locator);
    }

    public constructor(protected page: Page) {}

    public async goTo(): Promise<void> {
        await this.page.goto('https://atenabooks.com/', { waitUntil: 'domcontentloaded' });
        await this.logo.isVisible();
    }
}

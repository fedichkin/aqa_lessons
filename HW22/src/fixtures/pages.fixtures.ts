import { test as base } from '@playwright/test';
import {MainPage} from '../pages/main.page';

export interface PagesFixture {
    mainPage: MainPage;
}

export const test = base.extend<PagesFixture>({
    mainPage: async ({ page }, use) => {
        const mainPage = new MainPage(page);
        await use(mainPage);
    }
});

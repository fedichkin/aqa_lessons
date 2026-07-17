import { After, AfterAll, Before, BeforeAll } from '@cucumber/cucumber';
import { Browser, chromium } from 'playwright';
import { AtenaBooksWorld } from './worlds/atena-books.world';

let browser: Browser;

BeforeAll(async () => {
    browser = await chromium.launch({headless: false});
});

AfterAll(async () => {
    await browser.close();
});

Before(async function (this: AtenaBooksWorld) {
    this.browser = browser;
    this.context = await browser.newContext();
    this.page = await this.context.newPage();
    this.initPages();
});

After(async function (this: AtenaBooksWorld) {
    await this.page.close();
    await this.context.close();
});

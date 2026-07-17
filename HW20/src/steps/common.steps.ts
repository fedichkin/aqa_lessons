import { Given, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { AtenaBooksWorld } from '../worlds/atena-books.world';

Given('the user opened the home page', async function (this: AtenaBooksWorld) {
    await this.mainPage.goTo();
});

Given('the user opened the catalog', async function (this: AtenaBooksWorld) {
    await this.mainPage.leftMenu.openCatalog();
});

Then('the URL contains {string}', function (this: AtenaBooksWorld, part: string) {
    expect(this.page.url()).toContain(part);
});

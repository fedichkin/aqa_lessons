import { Given, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { AtenaBooksWorld } from '../worlds/atena-books.world';

Given('користувач відкрив головну сторінку', async function (this: AtenaBooksWorld) {
    await this.mainPage.goTo();
});

Given('користувач відкрив каталог', async function (this: AtenaBooksWorld) {
    await this.mainPage.leftMenu.openCatalog();
});

Then('URL містить {string}', function (this: AtenaBooksWorld, part: string) {
    expect(this.page.url()).toContain(part);
});

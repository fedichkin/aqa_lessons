import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { AtenaBooksWorld } from '../worlds/atena-books.world';

Then('логотип сайту видимий', async function (this: AtenaBooksWorld) {
    await expect(this.mainPage.logo).toBeVisible();
});

Then('ліве меню містить пункти {string}', async function (this: AtenaBooksWorld, items: string) {
    await expect(this.mainPage.leftMenu.items).toHaveText(items.split(', '));
});

Then('праве меню містить {int} елементів', async function (this: AtenaBooksWorld, count: number) {
    await expect(this.mainPage.rightMenu.items).toHaveCount(count);
});

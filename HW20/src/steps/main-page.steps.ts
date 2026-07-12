import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { AtenaBooksWorld } from '../worlds/atena-books.world';

Then('the site logo is visible', async function (this: AtenaBooksWorld) {
    await expect(this.mainPage.logo).toBeVisible();
});

Then('the left menu contains items {string}', async function (this: AtenaBooksWorld, items: string) {
    await expect(this.mainPage.leftMenu.items).toHaveText(items.split(', '));
});

Then('the right menu contains {int} items', async function (this: AtenaBooksWorld, count: number) {
    await expect(this.mainPage.rightMenu.items).toHaveCount(count);
});

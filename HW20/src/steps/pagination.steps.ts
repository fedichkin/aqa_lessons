import { Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { AtenaBooksWorld } from '../worlds/atena-books.world';

Then('the first page is active by default', async function (this: AtenaBooksWorld) {
    await expect(this.catalogPage.pagination.activePage).toBeVisible();
    expect(await this.catalogPage.pagination.getActivePageNumber()).toBe(1);
});

When('the user goes to page {int}', async function (this: AtenaBooksWorld, num: number) {
    this.rememberedBook = await this.catalogPage.getDataOfBook(1);
    await this.catalogPage.pagination.goToPage(num);
});

Then('page {int} is active', async function (this: AtenaBooksWorld, num: number) {
    expect(await this.catalogPage.pagination.getActivePageNumber()).toBe(num);
});

Then('the first book on page 3 differs from the first book on page 1', async function (this: AtenaBooksWorld) {
    const currentFirstBook = await this.catalogPage.getDataOfBook(1);
    expect(currentFirstBook.title).not.toBe(this.rememberedBook.title);
});

When('the user goes to the next page', async function (this: AtenaBooksWorld) {
    await this.catalogPage.pagination.goToNextPage();
});

When('the user goes to the previous page', async function (this: AtenaBooksWorld) {
    await this.catalogPage.pagination.goToPrevPage();
});

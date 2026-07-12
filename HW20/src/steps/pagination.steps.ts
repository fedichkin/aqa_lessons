import { Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { AtenaBooksWorld } from '../worlds/atena-books.world';

Then('перша сторінка активна за замовчуванням', async function (this: AtenaBooksWorld) {
    await expect(this.catalogPage.pagination.activePage).toBeVisible();
    expect(await this.catalogPage.pagination.getActivePageNumber()).toBe(1);
});

When('користувач переходить на сторінку {int}', async function (this: AtenaBooksWorld, num: number) {
    this.rememberedBook = await this.catalogPage.getDataOfBook(1);
    await this.catalogPage.pagination.goToPage(num);
});

Then('активною є сторінка {int}', async function (this: AtenaBooksWorld, num: number) {
    expect(await this.catalogPage.pagination.getActivePageNumber()).toBe(num);
});

Then('перша книга на сторінці 3 відрізняється від першої книги на сторінці 1', async function (this: AtenaBooksWorld) {
    const currentFirstBook = await this.catalogPage.getDataOfBook(1);
    expect(currentFirstBook.title).not.toBe(this.rememberedBook.title);
});

When('користувач переходить на наступну сторінку', async function (this: AtenaBooksWorld) {
    await this.catalogPage.pagination.goToNextPage();
});

When('користувач переходить на попередню сторінку', async function (this: AtenaBooksWorld) {
    await this.catalogPage.pagination.goToPrevPage();
});

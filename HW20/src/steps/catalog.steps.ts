import { Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { AtenaBooksWorld } from '../worlds/atena-books.world';

Then('на сторінці каталогу відображається {int} книг', async function (this: AtenaBooksWorld, count: number) {
    await expect(this.catalogPage.books).toHaveCount(count);
});

When('користувач запам\'ятовує дані першої книги', async function (this: AtenaBooksWorld) {
    this.rememberedBook = await this.catalogPage.getDataOfBook(1);
});

When('користувач відкриває першу книгу', async function (this: AtenaBooksWorld) {
    await this.catalogPage.openBook(1);
});

Then('заголовок, автор і ціна на сторінці книги співпадають із запам\'ятованими', async function (this: AtenaBooksWorld) {
    expect(await this.bookPage.title.textContent()).toBe(this.rememberedBook.title);
    expect(await this.bookPage.author.textContent()).toBe(this.rememberedBook.author);
    expect(await this.bookPage.getPriceAsNumber()).toBe(this.rememberedBook.price);
});

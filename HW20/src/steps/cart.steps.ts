import { Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { AtenaBooksWorld } from '../worlds/atena-books.world';

When('користувач додає першу книгу в кошик', async function (this: AtenaBooksWorld) {
    this.rememberedBook = await this.catalogPage.getDataOfBook(1);
    await this.catalogPage.getBookCard(1).buy();
});

Then('у модальному вікні відображається назва доданої книги і кількість 1', async function (this: AtenaBooksWorld) {
    const modal = this.catalogPage.addToCartModal;

    await expect(modal.productTitle).toHaveText(this.rememberedBook.title as string);
    await expect(modal.quantityInput).toHaveValue('1');
});

When('користувач закриває модальне вікно', async function (this: AtenaBooksWorld) {
    await this.catalogPage.addToCartModal.close();
});

When('користувач оновлює сторінку', async function (this: AtenaBooksWorld) {
    await this.page.reload();
});

Then('лічильник товарів у кошику в шапці дорівнює {int}', async function (this: AtenaBooksWorld, count: number) {
    await expect(this.mainPage.rightMenu.cartItemsCount).toHaveText(String(count));
});

When('користувач відкриває кошик', async function (this: AtenaBooksWorld) {
    await this.mainPage.rightMenu.openCart();
});

Then('перший товар у кошику має назву доданої книги', async function (this: AtenaBooksWorld) {
    await expect(this.cartPage.getItem(1).title).toHaveText(this.rememberedBook.title as string);
});

When('користувач видаляє перший товар з кошика', async function (this: AtenaBooksWorld) {
    await this.cartPage.getItem(1).remove();
});

Then('відображається повідомлення про порожній кошик', async function (this: AtenaBooksWorld) {
    await expect(this.cartPage.emptyMessage).toBeVisible();
});

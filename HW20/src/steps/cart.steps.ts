import { Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { AtenaBooksWorld } from '../worlds/atena-books.world';

When('the user adds the first book to the cart', async function (this: AtenaBooksWorld) {
    this.rememberedBook = await this.catalogPage.getDataOfBook(1);
    await this.catalogPage.getBookCard(1).buy();
});

Then('the modal shows the added book\'s title and quantity 1', async function (this: AtenaBooksWorld) {
    const modal = this.catalogPage.addToCartModal;

    await expect(modal.productTitle).toHaveText(this.rememberedBook.title as string);
    await expect(modal.quantityInput).toHaveValue('1');
});

When('the user closes the modal', async function (this: AtenaBooksWorld) {
    await this.catalogPage.addToCartModal.close();
});

When('the user reloads the page', async function (this: AtenaBooksWorld) {
    await this.page.reload();
});

Then('the cart items counter in the header equals {int}', async function (this: AtenaBooksWorld, count: number) {
    await expect(this.mainPage.rightMenu.cartItemsCount).toHaveText(String(count));
});

When('the user opens the cart', async function (this: AtenaBooksWorld) {
    await this.mainPage.rightMenu.openCart();
});

Then('the first item in the cart has the added book\'s title', async function (this: AtenaBooksWorld) {
    await expect(this.cartPage.getItem(1).title).toHaveText(this.rememberedBook.title as string);
});

When('the user removes the first item from the cart', async function (this: AtenaBooksWorld) {
    await this.cartPage.getItem(1).remove();
});

Then('the empty cart message is displayed', async function (this: AtenaBooksWorld) {
    await expect(this.cartPage.emptyMessage).toBeVisible();
});

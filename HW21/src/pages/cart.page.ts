import { Locator } from '@playwright/test';
import { CartItemComponent } from './components';
import {BasePage} from './base.page';

export class CartPage extends BasePage {
    public get items(): Locator {
        return this.page.locator('.products .product');
    }

    public get emptyMessage(): Locator {
        return this.page.locator('h3', { hasText: 'порожній' });
    }

    public getItem(num: number): CartItemComponent {
        return new CartItemComponent(this.items.nth(num - 1));
    }
}

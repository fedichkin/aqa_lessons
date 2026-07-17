import { IWorldOptions, World } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page } from 'playwright';
import { MainPage } from '../pages/main.page';
import { CatalogPage } from '../pages/catalog.page';
import { BookPage } from '../pages/book.page';
import { CartPage } from '../pages/cart.page';
import { BookData } from '../models/book-data.pm';

export class AtenaBooksWorld extends World {
    public browser!: Browser;
    public context!: BrowserContext;
    public page!: Page;

    public mainPage!: MainPage;
    public catalogPage!: CatalogPage;
    public bookPage!: BookPage;
    public cartPage!: CartPage;

    public rememberedBook!: BookData;

    public constructor(options: IWorldOptions) {
        super(options);
    }

    public initPages(): void {
        this.mainPage = new MainPage(this.page);
        this.catalogPage = new CatalogPage(this.page);
        this.bookPage = new BookPage(this.page);
        this.cartPage = new CartPage(this.page);
    }
}

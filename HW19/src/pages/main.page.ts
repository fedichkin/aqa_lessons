import {BasePage} from './base.page';

export class MainPage extends BasePage {
    public async goTo(): Promise<void> {
        await this.page.goto('https://atenabooks.com/', { waitUntil: 'domcontentloaded' });
    }
}

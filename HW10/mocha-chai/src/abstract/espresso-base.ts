import { CoffeeDrink } from './coffee-drink';

export abstract class EspressoBase extends CoffeeDrink {
    protected constructor(
        name: string,
        price: number,
        calories: number,
        ingredients: string[],
        private readonly shots: number
    ) {
        super(name, price, calories, ingredients);
    }

    public getShots(): number {
        return this.shots;
    }
}

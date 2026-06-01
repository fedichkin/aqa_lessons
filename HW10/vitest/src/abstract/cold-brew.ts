import { CoffeeDrink } from './coffee-drink';

export abstract class ColdBrew extends CoffeeDrink {
    protected constructor(
        name: string,
        price: number,
        calories: number,
        ingredients: string[],
        private readonly brewHours: number
    ) {
        super(name, price, calories, ingredients);
    }

    public getBrewHours(): number {
        return this.brewHours;
    }
}

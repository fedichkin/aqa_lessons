import { ICoffeeDrink } from '../interfaces/i-coffee-drink';

export abstract class CoffeeDrink implements ICoffeeDrink {
    protected constructor(
        private readonly name: string,
        private readonly price: number,
        private readonly calories: number,
        private readonly ingredients: string[]
    ) {}

    public getName(): string {
        return this.name;
    }

    public getPrice(): number {
        return this.price;
    }

    public getCalories(): number {
        return this.calories;
    }

    public getIngredients(): string[] {
        return [...this.ingredients];
    }

    public abstract brew(): string;
}

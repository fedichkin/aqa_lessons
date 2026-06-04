import { IBeverage } from './i-beverage';

export interface ICoffeeDrink extends IBeverage {
    brew(): string;
    getCalories(): number;
    getIngredients(): string[];
}

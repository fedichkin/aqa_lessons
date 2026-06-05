import { CoffeeDrink } from './coffee-drink';

export enum MilkType {
    Whole = 'whole',
    Skim = 'skim',
    Oat = 'oat',
    Soy = 'soy',
    Almond = 'almond'
}

export abstract class MilkBased extends CoffeeDrink {
    protected constructor(
        name: string,
        price: number,
        calories: number,
        ingredients: string[],
        private readonly milkType: MilkType,
        private readonly milkVolumeMl: number
    ) {
        super(name, price, calories, ingredients);
    }

    public getMilkType(): MilkType {
        return this.milkType;
    }

    public getMilkVolume(): number {
        return this.milkVolumeMl;
    }
}

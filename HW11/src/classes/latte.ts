import { MilkBased, MilkType } from '../abstract/milk-based';

export class Latte extends MilkBased {
    public constructor(
        milkType: MilkType = MilkType.Whole,
        private readonly hasVanillaSyrup = false
    ) {
        super(
            hasVanillaSyrup ? `Vanilla Latte (${milkType})` : `Latte (${milkType})`,
            hasVanillaSyrup ? 90 : 80,
            milkType === MilkType.Skim ? 80 : 170,
            hasVanillaSyrup
                ? ['water', 'arabica beans', `${milkType} milk`, 'vanilla syrup']
                : ['water', 'arabica beans', `${milkType} milk`],
            milkType,
            200
        );
    }

    public brew(): string {
        const syrup = this.hasVanillaSyrup ? ', adding vanilla syrup' : '';

        return `Pouring double espresso, steaming 200ml milk to 60°C${syrup}, pouring with latte art`;
    }
}

import { MilkBased, MilkType } from '../abstract/milk-based';

const CAPPUCCINO_CALORIES: Record<MilkType, number> = {
    [MilkType.Whole]: 120,
    [MilkType.Skim]: 60,
    [MilkType.Oat]: 90,
    [MilkType.Soy]: 85,
    [MilkType.Almond]: 70
};

export class Cappuccino extends MilkBased {
    public constructor(milkType: MilkType = MilkType.Whole) {
        super(
            `Cappuccino (${milkType})`,
            75,
            CAPPUCCINO_CALORIES[milkType],
            ['water', 'arabica beans', `${milkType} milk`],
            milkType,
            100
        );
    }

    public brew(): string {
        return 'Pouring double espresso, steaming milk to 65°C, pouring equal thirds: espresso, steamed milk, foam';
    }
}

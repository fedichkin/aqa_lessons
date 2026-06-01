import { EspressoBase } from '../abstract/espresso-base';

export class Americano extends EspressoBase {
    public constructor(private readonly hotWaterMl = 150) {
        super('Americano', 50, 10, ['water', 'arabica beans'], 1);
    }

    public brew(): string {
        return `Pouring espresso shot, mixing with ${this.hotWaterMl}ml hot water at 92°C`;
    }
}

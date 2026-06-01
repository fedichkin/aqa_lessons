import { EspressoBase } from '../abstract/espresso-base';

export class Espresso extends EspressoBase {
    public constructor(private readonly doubleShot = false) {
        super(
            doubleShot ? 'Double Espresso' : 'Espresso',
            doubleShot ? 55 : 40,
            doubleShot ? 10 : 5,
            ['water', 'arabica beans'],
            doubleShot ? 2 : 1
        );
    }

    public brew(): string {
        const shots = this.doubleShot ? 'two shots' : 'one shot';
        return `Grinding beans fine, pouring ${shots} at 9 bar for 25s`;
    }
}

import { Espresso } from './classes/espresso';
import { Americano } from './classes/americano';
import { Cappuccino } from './classes/cappuccino';
import { Latte } from './classes/latte';
import { ColdBrewCoffee } from './classes/cold-brew-coffee';
import { brewOrder, printCafeReceipt } from './utils/brew-order';
import { MilkType } from './abstract/milk-based';

const cafeOrder = [
    new Espresso(),
    new Espresso(true),
    new Americano(200),
    new Cappuccino(MilkType.Oat),
    new Latte(MilkType.Whole, true),
    new ColdBrewCoffee(),
    new ColdBrewCoffee(false)
];

console.log('Brewing cafe orders:');

for (const drink of cafeOrder) {
    brewOrder(drink);
}

printCafeReceipt(cafeOrder);

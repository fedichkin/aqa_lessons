import { ICoffeeDrink } from '../interfaces/i-coffee-drink';
import { IBeverage } from '../interfaces/i-beverage';

export function brewOrder(drink: ICoffeeDrink): void {
    console.log(`\n--- Brewing: ${drink.getName()} ---`);
    console.log(`Process:     ${drink.brew()}`);
    console.log(`Price:       ${drink.getPrice()} UAH`);
    console.log(`Calories:    ${drink.getCalories()} kcal`);
    console.log(`Ingredients: ${drink.getIngredients().join(', ')}`);
}

export function printCafeReceipt(items: IBeverage[]): void {
    console.log('\n======== CAFE RECEIPT =========');

    let total = 0;

    for (const item of items) {
        console.log(`${item.getName().padEnd(30)} ${item.getPrice()} UAH`);
        total += item.getPrice();
    }

    console.log('-------------------------------');
    console.log(`${'TOTAL:'.padEnd(30)} ${total} UAH`);
    console.log('===============================');
}

export function calculateTotal(items: IBeverage[]): number {
    return items.reduce((sum, item) => sum + item.getPrice(), 0);
}

export function filterByMaxCalories(drinks: ICoffeeDrink[], maxCalories: number): ICoffeeDrink[] {
    return drinks.filter((drink) => drink.getCalories() <= maxCalories);
}

export function sortByPrice(items: IBeverage[]): IBeverage[] {
    return [...items].sort((a, b) => a.getPrice() - b.getPrice());
}

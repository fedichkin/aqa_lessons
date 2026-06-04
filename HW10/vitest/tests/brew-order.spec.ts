import { describe, it, expect } from 'vitest';
import { calculateTotal, filterByMaxCalories, sortByPrice } from '../src/utils/brew-order';
import { Espresso } from '../src/classes/espresso';
import { Americano } from '../src/classes/americano';
import { Latte } from '../src/classes/latte';
import { Cappuccino } from '../src/classes/cappuccino';
import { ColdBrewCoffee } from '../src/classes/cold-brew-coffee';

describe('calculateTotal', () => {
    it('should return 0 for empty array', () => {
        expect(calculateTotal([])).toBe(0);
    });

    it('should return price of a single item', () => {
        expect(calculateTotal([new Espresso()])).toBe(40);
    });

    it('should sum prices of multiple items', () => {
        const items = [new Espresso(), new Americano(), new Latte()];
        expect(calculateTotal(items)).toBe(40 + 50 + 80);
    });

    it('should correctly sum identical items', () => {
        const items = [new Espresso(), new Espresso(), new Espresso()];
        expect(calculateTotal(items)).toBe(120);
    });
});

describe('filterByMaxCalories', () => {
    const drinks = [
        new Espresso(),                 // 5 kcal
        new Espresso(true),   // 10 kcal
        new Americano(),                // 10 kcal
        new ColdBrewCoffee(),           // 20 kcal
        new Cappuccino(),               // 120 kcal
        new Latte()                     // 170 kcal
    ];

    it('should return all drinks when limit is higher than all calories', () => {
        expect(filterByMaxCalories(drinks, 999)).toHaveLength(drinks.length);
    });

    it('should return empty array when limit is below all calories', () => {
        expect(filterByMaxCalories(drinks, 4)).toHaveLength(0);
    });

    it('should include drinks with calories equal to the limit', () => {
        const result = filterByMaxCalories(drinks, 10);
        expect(result).toHaveLength(3);
    });

    it('should return only low-calorie drinks', () => {
        const result = filterByMaxCalories(drinks, 20);
        expect(result.map((d) => d.getName()))
            .toEqual(['Espresso', 'Double Espresso', 'Americano', 'Cold Brew on Ice']);
    });

    it('should return empty array for empty input', () => {
        expect(filterByMaxCalories([], 100)).toHaveLength(0);
    });
});

describe('sortByPrice', () => {
    it('should return empty array for empty input', () => {
        expect(sortByPrice([])).toEqual([]);
    });

    it('should return same single-item array', () => {
        const items = [new Espresso()];
        expect(sortByPrice(items)).toHaveLength(1);
        expect(sortByPrice(items)[0].getPrice()).toBe(40);
    });

    it('should sort items from cheapest to most expensive', () => {
        const items = [new Latte(), new Espresso(), new Americano()];
        const sorted = sortByPrice(items);
        expect(sorted.map((i) => i.getPrice())).toEqual([40, 50, 80]);
    });

    it('should not mutate the original array', () => {
        const items = [new Latte(), new Espresso()];
        const originalOrder = items.map((i) => i.getName());
        sortByPrice(items);
        expect(items.map((i) => i.getName())).toEqual(originalOrder);
    });

    it('should preserve all items after sorting', () => {
        const items = [new ColdBrewCoffee(), new Espresso(), new Cappuccino(), new Latte(), new Americano()];
        const sorted = sortByPrice(items);
        expect(sorted).toHaveLength(items.length);
    });
});

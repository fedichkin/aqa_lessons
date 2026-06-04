import { expect } from 'chai';
import { Cappuccino } from '../src/classes/cappuccino';
import { MilkType } from '../src/abstract/milk-based';

describe('Cappuccino Unit tests', () => {
    const expectedBrewProcess =
        'Pouring double espresso, steaming milk to 65°C, pouring equal thirds: espresso, steamed milk, foam';

    describe('Default Cappuccino (whole milk)', () => {
        const expectedIngredients = ['water', 'arabica beans', 'whole milk'];

        let cappuccino: Cappuccino;

        beforeEach(() => {
            cappuccino = new Cappuccino();
        });

        it('Should have name "Cappuccino (whole)"', () => {
            expect(cappuccino.getName()).to.equal('Cappuccino (whole)');
        });

        it('Should have 75 price', () => {
            expect(cappuccino.getPrice()).to.equal(75);
        });

        it('Should have 120 calories', () => {
            expect(cappuccino.getCalories()).to.equal(120);
        });

        it('Should have 3 ingredients', () => {
            expect(cappuccino.getIngredients()).to.deep.equal(expectedIngredients);
        });

        it('Should have whole milk type', () => {
            expect(cappuccino.getMilkType()).to.equal(MilkType.Whole);
        });

        it('Should have 100ml milk volume', () => {
            expect(cappuccino.getMilkVolume()).to.equal(100);
        });

        it('Should be brewed correctly', () => {
            expect(cappuccino.brew()).to.equal(expectedBrewProcess);
        });
    });

    describe('Cappuccino with skim milk', () => {
        const expectedIngredients = ['water', 'arabica beans', 'skim milk'];

        let cappuccino: Cappuccino;

        beforeEach(() => {
            cappuccino = new Cappuccino(MilkType.Skim);
        });

        it('Should have name "Cappuccino (skim)"', () => {
            expect(cappuccino.getName()).to.equal('Cappuccino (skim)');
        });

        it('Should have 60 calories', () => {
            expect(cappuccino.getCalories()).to.equal(60);
        });

        it('Should have skim milk in ingredients', () => {
            expect(cappuccino.getIngredients()).to.deep.equal(expectedIngredients);
        });

        it('Should have skim milk type', () => {
            expect(cappuccino.getMilkType()).to.equal(MilkType.Skim);
        });
    });

    describe('Cappuccino with oat milk', () => {
        let cappuccino: Cappuccino;

        beforeEach(() => {
            cappuccino = new Cappuccino(MilkType.Oat);
        });

        it('Should have 90 calories', () => {
            expect(cappuccino.getCalories()).to.equal(90);
        });

        it('Should have oat milk type', () => {
            expect(cappuccino.getMilkType()).to.equal(MilkType.Oat);
        });
    });

    describe('Cappuccino with soy milk', () => {
        let cappuccino: Cappuccino;

        beforeEach(() => {
            cappuccino = new Cappuccino(MilkType.Soy);
        });

        it('Should have 85 calories', () => {
            expect(cappuccino.getCalories()).to.equal(85);
        });

        it('Should have soy milk type', () => {
            expect(cappuccino.getMilkType()).to.equal(MilkType.Soy);
        });
    });

    describe('Cappuccino with almond milk', () => {
        let cappuccino: Cappuccino;

        beforeEach(() => {
            cappuccino = new Cappuccino(MilkType.Almond);
        });

        it('Should have 70 calories', () => {
            expect(cappuccino.getCalories()).to.equal(70);
        });

        it('Should have almond milk type', () => {
            expect(cappuccino.getMilkType()).to.equal(MilkType.Almond);
        });
    });
});

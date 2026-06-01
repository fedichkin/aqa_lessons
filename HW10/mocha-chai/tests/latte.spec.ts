import { expect } from 'chai';
import { Latte } from '../src/classes/latte';
import { MilkType } from '../src/abstract/milk-based';

describe('Latte Unit tests', () => {
    describe('Default Latte (whole milk, no syrup)', () => {
        const expectedIngredients = ['water', 'arabica beans', 'whole milk'];
        const expectedBrewProcess = 'Pouring double espresso, steaming 200ml milk to 60°C, pouring with latte art';

        let latte: Latte;

        beforeEach(() => {
            latte = new Latte();
        });

        it('Should have name "Latte (whole)"', () => {
            expect(latte.getName()).to.equal('Latte (whole)');
        });

        it('Should have 80 price', () => {
            expect(latte.getPrice()).to.equal(80);
        });

        it('Should have 170 calories', () => {
            expect(latte.getCalories()).to.equal(170);
        });

        it('Should have 3 ingredients', () => {
            expect(latte.getIngredients()).to.deep.equal(expectedIngredients);
        });

        it('Should have whole milk type', () => {
            expect(latte.getMilkType()).to.equal(MilkType.Whole);
        });

        it('Should have 200ml milk volume', () => {
            expect(latte.getMilkVolume()).to.equal(200);
        });

        it('Should be brewed without vanilla syrup', () => {
            expect(latte.brew()).to.equal(expectedBrewProcess);
        });
    });

    describe('Latte with skim milk', () => {
        let latte: Latte;

        beforeEach(() => {
            latte = new Latte(MilkType.Skim);
        });

        it('Should have name "Latte (skim)"', () => {
            expect(latte.getName()).to.equal('Latte (skim)');
        });

        it('Should have 80 calories for skim milk', () => {
            expect(latte.getCalories()).to.equal(80);
        });

        it('Should have skim milk in ingredients', () => {
            expect(latte.getIngredients()).to.deep.equal(['water', 'arabica beans', 'skim milk']);
        });

        it('Should have skim milk type', () => {
            expect(latte.getMilkType()).to.equal(MilkType.Skim);
        });
    });

    describe('Vanilla Latte (whole milk, with syrup)', () => {
        let vanillaLatte: Latte;

        beforeEach(() => {
            vanillaLatte = new Latte(MilkType.Whole, true);
        });

        it('Should have name "Vanilla Latte (whole)"', () => {
            expect(vanillaLatte.getName()).to.equal('Vanilla Latte (whole)');
        });

        it('Should have 90 price', () => {
            expect(vanillaLatte.getPrice()).to.equal(90);
        });

        it('Should have 170 calories', () => {
            expect(vanillaLatte.getCalories()).to.equal(170);
        });

        it('Should have 4 ingredients including vanilla syrup', () => {
            expect(vanillaLatte.getIngredients()).to.deep.equal([
                'water',
                'arabica beans',
                'whole milk',
                'vanilla syrup'
            ]);
        });

        it('Should be brewed with vanilla syrup', () => {
            expect(vanillaLatte.brew()).to.equal(
                'Pouring double espresso, steaming 200ml milk to 60°C, adding vanilla syrup, pouring with latte art'
            );
        });
    });

    describe('Vanilla Latte with skim milk', () => {
        let vanillaLatteSkimMilk: Latte;

        beforeEach(() => {
            vanillaLatteSkimMilk = new Latte(MilkType.Skim, true);
        });

        it('Should have name "Vanilla Latte (skim)"', () => {
            expect(vanillaLatteSkimMilk.getName()).to.equal('Vanilla Latte (skim)');
        });

        it('Should have 80 calories for skim milk', () => {
            expect(vanillaLatteSkimMilk.getCalories()).to.equal(80);
        });

        it('Should have vanilla syrup in ingredients', () => {
            expect(vanillaLatteSkimMilk.getIngredients()).to.include('vanilla syrup');
        });
    });
});

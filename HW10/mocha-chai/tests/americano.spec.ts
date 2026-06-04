import { expect } from 'chai';
import { Americano } from '../src/classes/americano';

describe('Americano Unit tests', () => {
    const expectedIngredients = ['water', 'arabica beans'];

    describe('Default Americano (150ml hot water)', () => {
        const expectedBrewProcess = 'Pouring espresso shot, mixing with 150ml hot water at 92°C';

        let americano: Americano;

        beforeEach(() => {
            americano = new Americano();
        });

        it('Should have name "Americano"', () => {
            expect(americano.getName()).to.equal('Americano');
        });

        it('Should have 50 price', () => {
            expect(americano.getPrice()).to.equal(50);
        });

        it('Should have 10 calories', () => {
            expect(americano.getCalories()).to.equal(10);
        });

        it('Should have 2 ingredients', () => {
            expect(americano.getIngredients()).to.deep.equal(expectedIngredients);
        });

        it('Should have 1 shot', () => {
            expect(americano.getShots()).to.equal(1);
        });

        it('Should be brewed with 150ml hot water', () => {
            expect(americano.brew()).to.equal(expectedBrewProcess);
        });
    });

    describe('Custom Americano (200ml hot water)', () => {
        const expectedBrewProcess = 'Pouring espresso shot, mixing with 200ml hot water at 92°C';

        let americano: Americano;

        beforeEach(() => {
            americano = new Americano(200);
        });

        it('Should be brewed with 200ml hot water', () => {
            expect(americano.brew()).to.equal(expectedBrewProcess);
        });

        it('Should have same price regardless of water amount', () => {
            expect(americano.getPrice()).to.equal(50);
        });

        it('Should have same calories regardless of water amount', () => {
            expect(americano.getCalories()).to.equal(10);
        });
    });
});

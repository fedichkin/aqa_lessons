import { expect } from 'chai';
import {Espresso} from '../src/classes/espresso';

describe('Espresso Unit tests', () => {
    const expectedIngredients = ['water', 'arabica beans'];

    describe('Single espresso', () => {
        const expectedBrewProcess = 'Grinding beans fine, pouring one shot at 9 bar for 25s';

        let espresso: Espresso;

        beforeEach(() => {
            espresso = new Espresso();
        });

        it('Should have name "Espresso"', () => {
            expect(espresso.getName()).to.equal('Espresso');
        });

        it('Should have one shot', () => {
            expect(espresso.getShots()).to.equal(1);
        });

        it('Should have 40 price', () => {
            expect(espresso.getPrice()).to.equal(40);
        });

        it('Should have 5 calories', () => {
            expect(espresso.getCalories()).to.equal(5);
        });

        it('Should have 2 ingredients', () => {
            expect(espresso.getIngredients()).to.deep.equal(expectedIngredients);
        });

        it('Should be brewed', () => {
            expect(espresso.brew()).to.equal(expectedBrewProcess);
        });
    });

    describe('Double espresso', () => {
        const expectedBrewProcess = 'Grinding beans fine, pouring two shots at 9 bar for 25s';

        let doubleEspresso: Espresso;

        beforeEach(() => {
            doubleEspresso = new Espresso(true);
        });

        it('Should have name "Double Espresso"', () => {
            expect(doubleEspresso.getName()).to.equal('Double Espresso');
        });

        it('Should have two shots', () => {
            expect(doubleEspresso.getShots()).to.equal(2);
        });

        it('Should have 55 price', () => {
            expect(doubleEspresso.getPrice()).to.equal(55);
        });

        it('Should have 10 calories', () => {
            expect(doubleEspresso.getCalories()).to.equal(10);
        });

        it('Should have 2 ingredients', () => {
            expect(doubleEspresso.getIngredients()).to.deep.equal(expectedIngredients);
        });

        it('Should be brewed', () => {
            expect(doubleEspresso.brew()).to.equal(expectedBrewProcess);
        });
    });
});

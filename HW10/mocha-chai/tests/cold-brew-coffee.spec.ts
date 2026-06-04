import { expect } from 'chai';
import { ColdBrewCoffee } from '../src/classes/cold-brew-coffee';

describe('ColdBrewCoffee Unit tests', () => {
    const expectedIngredients = ['coarse ground coffee', 'cold filtered water'];

    describe('Cold Brew on Ice (default)', () => {
        const expectedBrewProcess = 'Steeping coarse grounds in cold water for 18h, filtering twice, straining over ice';

        let coldBrew: ColdBrewCoffee;

        beforeEach(() => {
            coldBrew = new ColdBrewCoffee();
        });

        it('Should have name "Cold Brew on Ice"', () => {
            expect(coldBrew.getName()).to.equal('Cold Brew on Ice');
        });

        it('Should have 95 price', () => {
            expect(coldBrew.getPrice()).to.equal(95);
        });

        it('Should have 20 calories', () => {
            expect(coldBrew.getCalories()).to.equal(20);
        });

        it('Should have 2 ingredients', () => {
            expect(coldBrew.getIngredients()).to.deep.equal(expectedIngredients);
        });

        it('Should brew for 18 hours', () => {
            expect(coldBrew.getBrewHours()).to.equal(18);
        });

        it('Should be brewed straining over ice', () => {
            expect(coldBrew.brew()).to.equal(expectedBrewProcess);
        });
    });

    describe('Cold Brew Concentrate (serveOnIce = false)', () => {
        const expectedBrewProcess = 'Steeping coarse grounds in cold water for 18h, filtering twice, straining into concentrate';

        let coldBrewConcentrate: ColdBrewCoffee;

        beforeEach(() => {
            coldBrewConcentrate = new ColdBrewCoffee(false);
        });

        it('Should have name "Cold Brew Concentrate"', () => {
            expect(coldBrewConcentrate.getName()).to.equal('Cold Brew Concentrate');
        });

        it('Should have 110 price', () => {
            expect(coldBrewConcentrate.getPrice()).to.equal(110);
        });

        it('Should have 35 calories', () => {
            expect(coldBrewConcentrate.getCalories()).to.equal(35);
        });

        it('Should have 2 ingredients', () => {
            expect(coldBrewConcentrate.getIngredients()).to.deep.equal(expectedIngredients);
        });

        it('Should brew for 18 hours', () => {
            expect(coldBrewConcentrate.getBrewHours()).to.equal(18);
        });

        it('Should be brewed straining into concentrate', () => {
            expect(coldBrewConcentrate.brew()).to.equal(expectedBrewProcess);
        });
    });
});

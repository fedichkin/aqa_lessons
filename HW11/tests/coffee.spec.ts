import { expect } from 'chai';
import sinon, { stubInterface } from 'ts-sinon';
import { Latte } from '../src/classes/latte.js';
import { brewOrder, printCafeReceipt } from '../src/utils/brew-order.js';
import type { IBeverage } from '../src/interfaces/i-beverage.js';
import type { ICoffeeDrink } from '../src/interfaces/i-coffee-drink.js';

describe('brewOrder', () => {
    let consoleLogSpy: ReturnType<typeof sinon.spy>;

    beforeEach(() => {
        consoleLogSpy = sinon.spy(console, 'log');
    });

    afterEach(() => {
        consoleLogSpy.restore();
    });

    it('should call brew() on the mock drink and log its name', () => {
        const mockDrink = stubInterface<ICoffeeDrink>();
        mockDrink.getName.returns('Test Latte');
        mockDrink.brew.returns('brewing...');
        mockDrink.getPrice.returns(80);
        mockDrink.getCalories.returns(150);
        mockDrink.getIngredients.returns(['water', 'milk']);

        brewOrder(mockDrink);

        expect(mockDrink.brew.calledOnce).to.be.true;
        expect(consoleLogSpy.calledWithMatch(sinon.match('Test Latte'))).to.be.true;
    });

    it('should log exactly 5 lines per order', () => {
        const mockDrink = stubInterface<ICoffeeDrink>();
        mockDrink.getName.returns('Espresso');
        mockDrink.brew.returns('brewing...');
        mockDrink.getPrice.returns(40);
        mockDrink.getCalories.returns(5);
        mockDrink.getIngredients.returns(['water', 'beans']);

        brewOrder(mockDrink);

        expect(consoleLogSpy.callCount).to.equal(5);
    });

    it('should call each ICoffeeDrink method exactly once', () => {
        const mockDrink = stubInterface<ICoffeeDrink>();
        mockDrink.getName.returns('Cappuccino');
        mockDrink.brew.returns('brewing...');
        mockDrink.getPrice.returns(75);
        mockDrink.getCalories.returns(120);
        mockDrink.getIngredients.returns(['water', 'arabica', 'milk']);

        brewOrder(mockDrink);

        expect(mockDrink.getName.calledOnce).to.be.true;
        expect(mockDrink.brew.calledOnce).to.be.true;
        expect(mockDrink.getPrice.calledOnce).to.be.true;
        expect(mockDrink.getCalories.calledOnce).to.be.true;
        expect(mockDrink.getIngredients.calledOnce).to.be.true;
    });
});

describe('printCafeReceipt', () => {
    let consoleLogSpy: ReturnType<typeof sinon.spy>;

    beforeEach(() => {
        consoleLogSpy = sinon.spy(console, 'log');
    });

    afterEach(() => {
        consoleLogSpy.restore();
    });

    it('should log the correct total for multiple mock beverages', () => {
        const bev1 = stubInterface<IBeverage>();
        bev1.getName.returns('Espresso');
        bev1.getPrice.returns(40);

        const bev2 = stubInterface<IBeverage>();
        bev2.getName.returns('Latte');
        bev2.getPrice.returns(80);

        printCafeReceipt([bev1, bev2]);

        const totalLine = consoleLogSpy.args.find((args) => String(args[0]).includes('TOTAL:'));
        expect(totalLine).to.exist;
        expect(String(totalLine[0])).to.include('120 UAH');
    });

    it('should call getName() and getPrice() on each of three beverages', () => {
        const beverages = [
            stubInterface<IBeverage>(),
            stubInterface<IBeverage>(),
            stubInterface<IBeverage>()
        ];
        beverages.forEach((b, i) => {
            b.getName.returns(`Drink ${i + 1}`);
            b.getPrice.returns(50);
        });

        printCafeReceipt(beverages);

        beverages.forEach((b) => {
            expect(b.getName.calledOnce).to.be.true;
            expect(b.getPrice.calledTwice).to.be.true;
        });
    });

    it('should use stubbed getPrice() instead of real value in printCafeReceipt', () => {
        const latte = new Latte();
        const priceStub = sinon.stub(latte, 'getPrice').returns(1);

        printCafeReceipt([latte]);

        const totalLine = consoleLogSpy.args.find((args) => String(args[0]).includes('TOTAL:'));
        expect(totalLine).to.exist;
        expect(String(totalLine[0])).to.include('1 UAH');
        expect(priceStub.called).to.be.true;

        priceStub.restore();
    });
});

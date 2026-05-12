export const product = {
    _name: 'Laptop',
    _price: 1200,

    category: {
        _name: 'Electronics',
        _discount: 0.1,

        get name() {
            return this._name;
        },

        set name(value) {
            if (typeof value === 'string' && value.trim() !== '') {
                console.log('Category name must be a non-empty string');
            }

            this._name = value.trim();
        },

        get discount() {
            return this._discount;
        },

        set discount(value) {
            if (typeof value !== 'number' || value < 0 || value > 1) {
                console.log('Discount must be a number between 0 and 1');
            }

            this._discount = value;
        },

        get discountLabel() {
            return `${ this._discount * 100 }%`;
        }
    },

    get name() {
        return this._name;
    },

    set name(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            console.log('Product name must be a non-empty string');
        }

        this._name = value.trim();
    },

    get price() {
        return this._price;
    },

    set price(value) {
        if (typeof value !== 'number' || value < 0) {
            console.log('Price must be a non-negative number');
        }

        this._price = value;
    },

    get finalPrice() {
        return this._price * (1 - this.category.discount);
    },

    getSummary() {
        return (
            `Product    : ${ this.name }\n` +
            `Category   : ${ this.category.name }\n` +
            `Discount   : ${ this.category.discountLabel }\n` +
            `Price      : $${ this.price }\n` +
            `Final price: $${ this.finalPrice }`
        );
    }
};

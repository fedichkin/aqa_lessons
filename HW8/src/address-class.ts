class Address {
    private readonly _street: string;
    private readonly _suite: string;
    private readonly _city: string;
    private readonly _zipcode: string;

    public constructor(
        street: string,
        suite: string,
        city: string,
        zipcode: string
    ) {
        this._street = street;
        this._suite = suite;
        this._city = city;
        this._zipcode = zipcode;
    }

    public get addressInfo(): string {
        return `${this._street}, ${this._suite}, ${this._city}, ${this._zipcode}`;
    }
}

export { Address };

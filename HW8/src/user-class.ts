import { AddressDto } from './user.dto';
import { Address } from './address-class';

class User {
    private readonly _name: string;
    private readonly _email: string;
    private readonly _phone: string;
    private readonly _companyName: string;
    private readonly _address: Address;

    public constructor(
        name: string,
        email: string,
        phone: string,
        companyName: string,
        address: AddressDto
    ) {
        this._name = name;
        this._email = email;
        this._phone = phone;
        this._companyName = companyName;
        this._address = new Address(
            address.street,
            address.suite,
            address.city,
            address.zipcode
        );
    }

    public get userInfo(): string {
        return [
            `Name: ${this._name}`,
            `Email: ${this._email}`,
            `Phone: ${this._phone}`,
            `Company: ${this._companyName}`,
            `Address: ${this._address.addressInfo}`
        ].join('\n');
    }
}

export { User };

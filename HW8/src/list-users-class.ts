import {User} from './user-class';
import {UserDto} from './user.dto';

class ListUsers {
    private readonly _users: User[];

    public constructor() {
        this._users = [];
    }

    public addUser(user: UserDto): void {
        this._users.push(new User(
            user.name,
            user.email,
            user.phone,
            user.company.name,
            user.address
        ));
    }

    public get usersInfo(): string {
        const usersInfo = this._users.map((user, index) => {
            return [
                `--------------User #${ index + 1 }---------------`,
                user.userInfo
            ].join('\n');
        });

        return [
            `Count users: ${this._users.length}`,
            '',
            ...usersInfo
        ].join('\n');
    }
}

export { ListUsers };

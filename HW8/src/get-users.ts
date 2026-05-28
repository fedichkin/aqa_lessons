import { UserDto } from './user.dto';
import {ListUsers} from './list-users-class';

async function fetchUsers(): Promise<UserDto[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    return response.json();
}

async function getListUsers(): Promise<ListUsers> {
    const users = await fetchUsers();
    const listUsers = new ListUsers();

    users.forEach((user) => listUsers.addUser(user));

    return listUsers;
}

export { getListUsers };

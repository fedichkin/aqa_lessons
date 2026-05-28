import { getListUsers } from './get-users';
import { Author, Book, Magazine } from './abstraction';

/*----------------------library abstraction example-----------------------*/

console.log('');
console.log('----------------------LIBRARY ABSTRACTION EXAMPLE-----------------------');
console.log('');

const orwell = new Author('George Orwell', 'United Kingdom');
const asimov = new Author('Isaac Asimov', 'United States');

const book = new Book('1984', orwell, 328, '978-0-452-28423-4');
book.rate(5);
book.rate(4);
book.rate(5);
book.borrow();
console.log(book.itemInfo);
book.returnItem();
book.rate(3);
console.log(book.itemInfo);

const magazine = new Magazine('Science Today', asimov, 42, 2023);
magazine.borrow();
console.log(magazine.itemInfo);
magazine.returnItem();
magazine.publishNextIssue();
console.log(magazine.itemInfo);

/*----------------------get users and show information about them-----------------------*/

console.log('');
console.log('----------------------GET USERS AND SHOW INFORMATION ABOUT THEM-----------------------');
console.log('');

async function displayUserInfo(): Promise<void> {
    try {
        const users = await getListUsers();
        console.log(users.usersInfo);
    } catch (error) {
        console.error('Error fetching user information:', error);
    }
}

displayUserInfo();

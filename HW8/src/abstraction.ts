class Author {
    private readonly _name: string;
    private readonly _country: string;

    public constructor(name: string, country: string) {
        this._name = name;
        this._country = country;
    }

    public get fullInfo(): string {
        return `${this._name} (${this._country})`;
    }
}

abstract class LibraryItem {
    private readonly _title: string;
    private readonly _author: Author;
    private _isBorrowed = false;
    private _borrowCount = 0;

    protected constructor(title: string, author: Author) {
        this._title = title;
        this._author = author;
    }

    public abstract getRenewPeriodDays(): number;

    public abstract get itemInfo(): string;

    public borrow(): void {
        if (!this._isBorrowed) {
            this._isBorrowed = true;
            this._borrowCount++;
        }
    }

    public returnItem(): void {
        this._isBorrowed = false;
    }

    public get title(): string {
        return this._title;
    }

    public get author(): Author {
        return this._author;
    }

    public get isBorrowed(): boolean {
        return this._isBorrowed;
    }

    public get borrowCount(): number {
        return this._borrowCount;
    }
}

class Book extends LibraryItem {
    private readonly _pageCount: number;
    private readonly _isbn: string;
    private _totalRating = 0;
    private _ratingCount = 0;

    public constructor(title: string, author: Author, pageCount: number, isbn: string) {
        super(title, author);
        this._pageCount = pageCount;
        this._isbn = isbn;
    }

    public getRenewPeriodDays(): number {
        return 14;
    }

    public rate(score: number): void {
        if (score < 1 || score > 5) return;
        this._totalRating += score;
        this._ratingCount++;
    }

    public get averageRating(): string {
        if (this._ratingCount === 0) return 'no ratings';
        return (this._totalRating / this._ratingCount).toFixed(1);
    }

    public get itemInfo(): string {
        return [
            `Book: "${this.title}"`,
            `Author: ${this.author.fullInfo}`,
            `Pages: ${this._pageCount}`,
            `ISBN: ${this._isbn}`,
            `Rating: ${this.averageRating}`,
            `Status: ${this.isBorrowed ? 'borrowed' : 'available'}`,
            `Total borrows: ${this.borrowCount}`
        ].join(' || ');
    }
}

class Magazine extends LibraryItem {
    private _issueNumber: number;
    private _releaseYear: number;

    public constructor(title: string, author: Author, issueNumber: number, releaseYear: number) {
        super(title, author);
        this._issueNumber = issueNumber;
        this._releaseYear = releaseYear;
    }

    public getRenewPeriodDays(): number {
        return 7;
    }

    public publishNextIssue(): void {
        this._issueNumber++;
        this._releaseYear = new Date().getFullYear();
    }

    public get itemInfo(): string {
        return [
            `Magazine: "${this.title}"`,
            `Author: ${this.author.fullInfo}`,
            `Issue: #${this._issueNumber} (${this._releaseYear})`,
            `Status: ${this.isBorrowed ? 'borrowed' : 'available'}`,
            `Total borrows: ${this.borrowCount}`
        ].join(' || ');
    }
}

export { Author, Book, Magazine };

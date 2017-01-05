import { Injectable } from '@angular/core';


@Injectable()
export class BookmarkService {
    private storekey: string = "my-bookmarks";


    constructor() {
    }

    mark(idElement: string): void {

        let bookmarks: Array<string> = this.bookmarks();

        if (!bookmarks) {
            bookmarks = [];
        }

        let index: number = bookmarks.indexOf(idElement);
        let contains: boolean = index > -1;
        if (contains) {
            bookmarks.splice(index, 1);
        } else {
            bookmarks.push(idElement);
        }
        localStorage.setItem(this.storekey, JSON.stringify(bookmarks));

    }

    marked(idElement: string): boolean {
        let index: number = this.bookmarks().indexOf(idElement);
        let contains: boolean = index > -1;
        return contains;
    }

    private bookmarks():Array<string>{
         let bookmarks: Array<string> = JSON.parse(localStorage.getItem(this.storekey));

        if (!bookmarks) {
            bookmarks = [];
        }
        return bookmarks;

    }

}
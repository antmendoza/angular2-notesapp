import { Injectable } from '@angular/core';

//TODO keep variable here to make it global
var markedElement: Array<string> = [];

@Injectable()
export class BookmarkService {

    constructor() {
    }

    mark(idElement: string): void {
        let index: number = markedElement.indexOf(idElement);
        let contains: boolean = index > -1;
        if (contains) {
            markedElement.splice(index, 1);
        } else {
            markedElement.push(idElement);
        }
    }

    marked(idElement: string): boolean {
        let index: number = markedElement.indexOf(idElement);
        let contains: boolean = index > -1;
        return contains;
    }

}
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BookmarkService {
    private storekey: string = "my-bookmarks";



    constructor(private _http: Http) {
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

    private bookmarks(): Array<string> {
        let bookmarks: Array<string> = JSON.parse(localStorage.getItem(this.storekey));

        if (!bookmarks) {
            bookmarks = [];
        }
        return bookmarks;

    }



    private heroesUrl = 'http://localhost:8081/ws-angular/rest/hello';

    getHeroes(): Observable<string> {
        return this._http.get(this.heroesUrl)
            .map((res: Response) => {
                let noteJSON = res;
                return noteJSON;
            })
            .catch((error) => {
                console.error(error);
                return Observable.throw('' + error);
            });
    }

}
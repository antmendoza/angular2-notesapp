import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Info, BookMark } from './bookmark.model';



@Injectable()
export class BookmarkService {
    private storekey: string = "my-bookmarks";

    private url_base: string = "http://localhost:8081/bookmark-rest-app/api";

    constructor(private _http: Http) {
    }

    enable(): Observable<Info> {
        return this._http.get(this.url_base)
            .map((res: Response) => {
                let info: Info = res.json()["info"];
                return info;
            })
            .catch((error) => {
                console.error(error);
                return Observable.throw('' + error);
            });
    }

    byElementId(elementId: string): Observable<BookMark> {
        return this._http.get(this.url_base + "/bookmarks/elementId/" + elementId)
            .map((res: Response) => {
                let bookmark: BookMark = res.json()["bookMark"];
                return bookmark;
            })
            .catch((error) => {
                console.error(error);
                return Observable.throw('' + error);
            });
    }

    put(bookMark: BookMark): Observable<BookMark> {
        
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let stBookMark = '{\"bookMark\":'+JSON.stringify(bookMark)+'}';
        return this._http.put(this.url_base + "/bookmarks", stBookMark, { headers: headers })
            .map((res: Response) => {
                let bookmark: BookMark = res.json()["bookMark"];
                return bookmark;
            })
            .catch((error) => {
                console.error(error);
                return Observable.throw('' + error);
            });
    }





    private bookmarks(): Array<string> {
        let bookmarks: Array<string> = JSON.parse(localStorage.getItem(this.storekey));

        if (!bookmarks) {
            bookmarks = [];
        }
        return bookmarks;

    }


}
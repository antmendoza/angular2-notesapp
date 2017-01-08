import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SearchService {

    private subject:Subject<string> = new Subject<string>();
    constructor() { 
        console.log("SearchService.constructor");
    }

    searchTerm(): Observable<string> {
        return this.subject;
    }

    changeSearchTerm(term: string) {
        this.subject.next(term);
    }

}
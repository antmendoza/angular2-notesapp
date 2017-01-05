import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchService } from './search.service';
@Component({
    selector: 'search',
    template: `<input name="search" [(ngModel)]="_search" placeholder="search..." (keyup)="changeSearchTerm()">
    <span>{{suggestion()}}</span>`
})

export class SearchComponent {
    private _valueFilter: ValueFilter;
    private _search: string;
    @Output() private searchEvent = new EventEmitter<any>();

    private minNumLetters: number = 3;

    constructor(private _searchService: SearchService) {
        this._search = "";
        this._valueFilter = new ValueFilter(this._search, this.minNumLetters);
    }

    private suggestion() {
        if (!this._valueFilter.minNumLettersInserted() && !this._valueFilter.isEmpty()) {
            return "Insert more than " + this.minNumLetters + " letter to filter";
        }
        return "";
    }

    private changeSearchTerm() {
        this._valueFilter = new ValueFilter(this._search, this.minNumLetters);
        //TODO implement hasChanged
        if(this._valueFilter.hasChanged()){
            let value = this._valueFilter.valueFilter();

            this.searchEvent.emit({
                value: value
            });
            console.log(this.searchEvent);
            this._searchService.changeSearchTerm(value);
        }
    }
}

class ValueFilter {
    private value: string;
    private numLettersToSearch: number;
    constructor(value: string, numLettersToSearch: number) {
        this.value = value;
        this.numLettersToSearch = numLettersToSearch;
    }

    minNumLettersInserted() {
        return this.valueTrimed().length > this.numLettersToSearch;
    }

    valueFilter() {
        if (this.minNumLettersInserted()) {
            return this.valueTrimed();
        }
        return "";
    }

    isEmpty() {
        return this.valueTrimed() === "";
    }

    //TODO return true if the value is different from the last value. 
    hasChanged():boolean{
        return true;
    }

    private valueTrimed() {
        let value = this.value.trim();
        return value;
    }

}
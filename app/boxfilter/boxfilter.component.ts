import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BoxFilterService } from './boxfilter.service';
@Component({
    selector: 'boxfilter',
    template: `<input name="search" [(ngModel)]="_search" placeholder="search..." (keyup)="filterNotes()">
    <span>{{suggestion()}}</span>`
})

export class BoxFilterComponent {
    private _valueFilter: ValueFilter;
    private _search: string;
    @Output() private boxFilterEvent = new EventEmitter<any>();
    
    private minNumLetters: number = 3;

    constructor() {
        this._search = "";
        this._valueFilter = new ValueFilter(this._search, this.minNumLetters);
    }

    private suggestion() {
        if (!this._valueFilter.minNumLettersEntered() && !this._valueFilter.isEmpty()) {
            return "Enter more than " + this.minNumLetters + " letter to filter";
        }
        return "";
    }

    private filterNotes() {
        this._valueFilter = new ValueFilter(this._search, this.minNumLetters);
        let value = this._valueFilter.valueFilter();
        this.boxFilterEvent.emit({
            value: value
        });
        console.log(this.boxFilterEvent);
    }
}

class ValueFilter {
    private value: string;
    private numLettersToSearch: number;
    constructor(value: string, numLettersToSearch: number){
        this.value = value;
        this.numLettersToSearch = numLettersToSearch;
    }

    minNumLettersEntered(){
        return this.valueTrimed().length > this.numLettersToSearch;
    }

    valueFilter(){
        if(this.minNumLettersEntered()){
            return this.valueTrimed();
        }
        return "";
     }

    isEmpty(){
        return this.valueTrimed() === "";
    }


    private valueTrimed() {
        let value = this.value.trim();
        return value;
    }
}
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BoxFilterService } from './boxfilter.service';
@Component({
    selector: 'boxfilter',
    template: `<input name="search" [(ngModel)]="search" placeholder="search..." (keyup)="filterNotes()">
    <span>{{suggestion()}}</span>`
})

export class BoxFilterComponent {
    private search: string;
    @Output() private boxFilterEvent = new EventEmitter<any>();
    
    private minNumLetters: number = 3;

    constructor() {
        this.search = "";
    }

    private suggestion() {
        let value = this.value();
        if (this.minNumLettersEntered() && value !== "") {
            return "Enter more than " + this.minNumLetters + " letter to filter";
        }
        return "";
    }

    private filterNotes() {
        let value = this.value();
        if (this.minNumLettersEntered()) {
            value = "";
        }

        this.boxFilterEvent.emit({
            value: value
        });
    }

    private minNumLettersEntered() {
        return this.value().length < this.minNumLetters;
    }

    private value() {
        let value = this.search.trim();
        return value;
    }

}
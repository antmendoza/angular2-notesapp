import { Component, Input, OnDestroy, OnChanges, OnInit } from '@angular/core';
import { BookmarkService } from './bookmark.service';

@Component({
    selector: 'bookmark',
    template: `
            {{testHello}}
            <i class="glyphicon glyphicon-bookmark icon-bookmark" 
               (click)="click()"
               [class.icon-marked]="marked()" >
            </i>`,
    styles: [
        '.icon-bookmark {cursor: pointer}',
        '.icon-marked {color: red}'
    ],
    providers: [BookmarkService]
})



export class BookMarkComponent implements OnDestroy, OnInit, OnChanges {
    @Input() private idElement: string;
    private testHello: string;
    private _subscription;

    constructor(private service: BookmarkService) {
    }

    private click() {
        this.test();
        this.service.mark(this.idElement);
    }

    private marked(): boolean {
        return this.service.marked(this.idElement);

    }

    ngOnDestroy() {
        this._subscription.unsubscribe();
    }

    ngOnChanges() {
        console.log("---> " + this.idElement);
    }

    ngOnInit() {

    }

    private test(): void {
        this._subscription = this.service.getHeroes().subscribe(
            notes => {
                console.log("notes");
                this.testHello = notes;
            },
            error => console.error(error)
        );
    }



}



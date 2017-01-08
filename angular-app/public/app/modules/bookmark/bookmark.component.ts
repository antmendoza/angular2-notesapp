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



export class BookMarkComponent  {
    @Input() private idElement: string;
    private testHello: string;

    constructor(private service: BookmarkService) {
    }

    private click() {
        this.service.mark(this.idElement);
    }

    private marked(): boolean {
        return this.service.marked(this.idElement);

    }

  


}



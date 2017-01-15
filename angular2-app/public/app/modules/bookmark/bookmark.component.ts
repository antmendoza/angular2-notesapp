import { Component, Input, OnDestroy, OnChanges, OnInit } from '@angular/core';
import { BookmarkService } from './bookmark.service';
import { BookMark } from './bookmark.model';

@Component({
    selector: 'bookmark',
    template: `<div *ngIf="serviceEnable">
                    <i class="glyphicon glyphicon-bookmark icon-bookmark" 
                    (click)="click()"
                    [class.icon-marked]="bookMark?.marked" >
                    </i>
            </div>`,
    styles: [
        '.icon-bookmark {cursor: pointer}',
        '.icon-marked {color: red}'
    ],
    providers: [BookmarkService]
})



export class BookMarkComponent implements OnDestroy, OnInit, OnChanges {
    @Input() private idElement: string;

    private serviceEnable: boolean = false;
    private bookMark: BookMark;
    private _subscription;

    constructor(private service: BookmarkService) {
    }

    private click() {
        let cloneBookMark: BookMark = JSON.parse(JSON.stringify(this.bookMark));

        this.bookMark.marked = !this.bookMark.marked;
        let subscription = this.service.put(this.bookMark).subscribe(
            bookMark => {
                console.log(bookMark);
                this.bookMark = bookMark;
                subscription.unsubscribe();
            },
            error => {
                console.error(error);
                this.bookMark = cloneBookMark;

            }
        );
    }

    ngOnInit() {
        let subscriptionEnable = this.service.enable().subscribe(
            serviceEnable => {
                this.serviceEnable = true;
                subscriptionEnable.unsubscribe();
            },
            error => console.error(error)
        );

        let subscription = this.service.byElementId(this.idElement).subscribe(
            bookMark => {
                this.bookMark = bookMark;
                subscription.unsubscribe();
            },
            error => {
                //Server returns a 404 code, let's create the bookmark
                this.bookMark = {
                    "bookMarkId": null,
                    "elementId": this.idElement,
                    "marked": false
                };
            }
        );
    }


    ngOnDestroy() {
        //this._subscription.unsubscribe();
    }

    ngOnChanges() {


    }




}
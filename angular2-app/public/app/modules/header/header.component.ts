import { Component, OnInit, OnDestroy } from '@angular/core';
import {Router, Event } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'header-app',
    templateUrl: 'header.component.html'
})


export class HeaderComponent implements OnInit, OnDestroy {
    private subscription: any;
    private showBoxSearch: boolean;
    
    constructor(private router: Router) {
    }

    urlStartsWith(value: string) : boolean{
        return new ActualUrl(this.router).startsWith(value); 
    }
    ngOnInit() { 
       	this.subscription =  this.router.events.subscribe((data: Event) => {
            this.showBoxSearch =  new BoxSearch(this.router).show();
        });
    }

    ngOnDestroy(){
		this.subscription.unsubscribe();
	}
}


class BoxSearch{
    private urlShowBoxSearch: Array<string> = ['/articulos', '/notes']; 
    
    constructor(private router: Router){}

    show() : boolean{
        let actualUrl = new ActualUrl(this.router).url();
        return this.urlShowBoxSearch.indexOf(actualUrl)> - 1;
    }
} 

class ActualUrl{

    constructor(private router: Router){}

    startsWith(value : string): boolean {
        return this.url().startsWith(value);
    }

    url() : string{
        let actualUrl = this.router.url;
        return actualUrl;
    }
} 
import { Component, OnInit, OnDestroy, Input} from '@angular/core';
import { Note, BasicNote, ContainsFilter, Paragraph, DETAIL_TYPE} from './note.model';
import { NotesService } from './notes.service';
import { SearchService } from '../shared/services/search/search.service';




@Component({
    moduleId: module.id,
	selector: 'notes-list',
	templateUrl: 'notes-list.component.html',
	providers: [ NotesService ]
})

export class NotesListComponent   implements OnInit, OnDestroy {
	
	private filter: string = "";
	private notes : Array<Note> = [];
	private _subscription;
	private _subscriptionSearch;

	constructor(private service : NotesService, 
				private _searchService: SearchService){
	}


	ngOnInit(){
		this._subscription = this.service.notes().subscribe(
			notes => {
				this.notes = notes.concat([]);
			},
			error => console.error(error)
		);

		this._subscriptionSearch = this._searchService.searchTerm().subscribe(
			term => {
				this.filter = term;
			},
			error => console.error(error)
		);

	}

	ngOnDestroy(){
		this._subscription.unsubscribe();
		this._subscriptionSearch.unsubscribe();
	}

	private filterNotes(): Array<Note> {
		return this.notes.concat([]).filter((note: Note)=>  {
			return note.matchFilter(new ContainsFilter(this.filter));
		});
	}

	private detailTypeResume(): DETAIL_TYPE{
		return DETAIL_TYPE.RESUME;
	}
	
}
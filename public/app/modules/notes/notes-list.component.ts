import { Component, OnInit, OnDestroy, Input} from '@angular/core';
import { Note, BasicNote, ContainsFilter, Paragraph, DETAIL_TYPE} from './note.model';
import { NotesService } from './notes.service';


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

	constructor(private service : NotesService){
	}


	ngOnInit(){
		this._subscription = this.service.notes().subscribe(
			notes => {
				this.notes = notes.concat([]);
			},
			error => console.error(error)
		);
	}

	ngOnDestroy(){
		this._subscription.unsubscribe();
	}




	private filterNotes(): Array<Note> {
		return this.notes.concat([]).filter((note: Note)=>  {
			return note.matchFilter(new ContainsFilter(this.valueSearch()));
		});
	}

	private detailTypeResume(): DETAIL_TYPE{
		return DETAIL_TYPE.RESUME;
	}

	private valueSearch(): string{
		return this.filter.trim();
	}

 	private handleBoxFilterEvent($event){
        this.filter = $event.value;
    }

	
}
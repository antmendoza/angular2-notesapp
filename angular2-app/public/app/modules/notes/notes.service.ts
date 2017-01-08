import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {
	Note, Paragraph, ItemContent,
	BasicNote
} from './note.model';



@Injectable()
export class NotesService {

	private url_list_notes = '/notes/'
	private url_get_note = '/notes/';
	private url_new_note = '/note';
	private url_update_note = "/note";

	constructor(private _http: Http) {

	}

	public basicNoteFromJSON(note): Note {
		return new BasicNote(note.id,
			note.title,
			new Paragraph(note.content.value),
			new Date(note.dateCreation),
			note.author);
	}


	public notes(): Observable<Note[]> {
		return this._http.get(this.url_list_notes)
			.map((res: Response) => {
				let notesJSON = res.json();
				let result: Array<Note> = [];
				for (let i in notesJSON) {
					let note = notesJSON[i];
					result.push(this.basicNoteFromJSON(note));
				}
				return result;
			})
			.catch((error) => {
				console.error(error);
				return Observable.throw('' + error);
			});
	}

	public note(id: number): Observable<Note> {

		return this._http.get(this.url_get_note + id)
			.map((res: Response) => {
				let noteJSON = res.json();
				return this.basicNoteFromJSON(noteJSON);
			})
			.catch((error) => {
				console.error(error);
				return Observable.throw('' + error);
			});
	}


	public update(note: Note) {
		let headers = new Headers({ 'Content-Type': 'application/json' });
		return this._http.post(this.url_update_note, note, { headers: headers });
	}

	public new(note: Note) {
		let headers = new Headers({ 'Content-Type': 'application/json' });
		return this._http.put(this.url_new_note, note, { headers: headers });
	}


}








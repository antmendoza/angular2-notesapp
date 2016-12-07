import { Injectable } from '@angular/core';
import {
	Note, NoteContent, ImageSport, Paragraph, ItemContent,
	Link, BasicNote, Content
} from './note.model';

//TODO keep variable here to make it global
var fakeGlobalNotes: Array<Note> = generateNotes();


@Injectable()
export class NotesService {

	private fakeNotes: Array<Note>;

	public constructor() {
		this.fakeNotes = fakeGlobalNotes;
	}

	public notes(): Array<Note> {
		return this.fakeNotes;
	}

	public note(_id: number): Note {
		return this.fakeNotes[0];
	}
}

//TODO fix this mess
function generateNotes(): Array<Note> {

	let notes: Array<Note> = new Array<Note>();
	for (let _i = 0; _i < 10; _i++) {
		let content: Content;
		let randomLorem = randomLoremIpsum();
		let title = randomLorem;
		let link = "link " + (_i + 1) + randomLorem;
		if (_i % 2 == 0) {
			let itemsContent: Array<ItemContent> = new Array<ItemContent>();

			itemsContent.push(randomParagraph());
			itemsContent.push(new Link("#", link));
			content = new NoteContent(itemsContent);
		} else {
			content = new NoteContent(
				[
				randomParagraph(),
				randomParagraph(),
				]);
		}
		notes[_i] = new BasicNote(title,
			content,
			new Date(), randomAuthor());
	}
	return notes;
}


function randomAuthor(): string {
	let randomAuthor: Array<string> = ["Dianne Goyette ", "Desiree Mendosa  ",
		"Alva Messier  ", "Elsa Bryer  ",
		"Nicolette Lubinsky", "Ma Verrill  ",
		"Janeth Elvin ", "Chantelle Tapscott",
		"Vicenta Scarboro", "Anneliese Stupka"];
	return randomAuthor[random()];
}

function randomLoremIpsum(): string {
	var str = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
		Fusce convallis velit vitae elementum laoreet. 
		Curabitur eget ultricies magna. 
		Praesent at dui eu ante lacinia ultricies. 
		Sed non nunc ante. 
		Praesent neque mauris, facilisis vitae mi sit amet, venenatis consequat nibh. 
		Ut vehicula nunc metus, ac mattis elit pellentesque ut. 
		Proin mollis enim vel ornare rhoncus. 
		Sed fringilla ipsum sapien, ut lacinia magna pretium in. 
		Suspendisse vestibulum fermentum erat id volutpat. 
		Proin dignissim neque tortor, nec sodales lorem condimentum non. 
		Integer tortor ipsum, bibendum nec faucibus non, aliquam aliquam tortor. 
		Nulla non mattis felis, vitae varius libero. Vivamus nec enim vulputate, facilisis nisi a, faucibus nibh. 
		Sed dapibus sapien mauris, non vestibulum felis luctus eget.`;
	var res = str.split(".");
	return res[random()] + ". ";
}


function randomParagraph(): Paragraph {
	return new Paragraph(randomLoremIpsum());
}

function random(): number {
	var random = Math.floor(Math.random() * 10);
	return random;
}









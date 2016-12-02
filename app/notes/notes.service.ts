import { Injectable } from '@angular/core';
import { Note,  NoteContent, ImageSport, Paragraph, ItemContent, 
	Link, BasicNote, Content} from './note.model';

	@Injectable()
	export class NotesListService { 

		private fakeNotes : Array<Note>;

		constructor () {
			this.fakeNotes = this.generateNotes();
		}

		public notes(): Array<Note>{
			return this.fakeNotes;
		}

		private generateNotes(): Array<Note>{

			let notes : Array<Note> = new Array<Note>();
			for (let _i = 0; _i < 10; _i++) {
				let content: Content; 
				let randomLoremIpsum = this.randomLoremIpsum();
				let title = _i+1+". " +randomLoremIpsum;
				let link = "link "+(_i+1)+randomLoremIpsum;
				if(_i%2 ==0){
					let itemsContent : Array<ItemContent> = new Array<ItemContent>();
					for (var i = 0; i <= _i; i++) {
						itemsContent[i] = new ImageSport(_i+i);
					}
					itemsContent.push(this.randomParagraph());
					itemsContent.push(new Link("#",link));
					content =  new NoteContent(itemsContent);
				}else{
					content =  new NoteContent(
						[new ImageSport(_i), 
						this.randomParagraph(), 
						this.randomParagraph(),
						new ImageSport(_i)]);
				}
				notes[_i] =  new BasicNote(title,
					content, 
					new Date(), this.randomAuthor() );
			}
			return notes;
		}	


		private randomAuthor(): string {
			let randomAuthor : Array<string> = ["Dianne Goyette ",  "Desiree Mendosa  ", 
			"Alva Messier  ",  "Elsa Bryer  ", 
			"Nicolette Lubinsky", "Ma Verrill  ", 
			"Janeth Elvin ",   "Chantelle Tapscott",   
			"Vicenta Scarboro", "Anneliese Stupka"  ];
			return randomAuthor[this.random()];

		}

		private randomLoremIpsum(): string{
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
			return res[this.random()]+". ";
		}


		private randomParagraph(): Paragraph{
			return new Paragraph(this.randomLoremIpsum());
		}

		private random() : number
		{
			var random = Math.floor(Math.random() * 10);
			return random;
		}

	}


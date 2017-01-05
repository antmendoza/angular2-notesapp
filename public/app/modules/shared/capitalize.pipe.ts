import { Pipe, PipeTransform } from '@angular/core';


@Pipe ( {name:'capitalize'} ) 
export class CapitalizePipe  implements PipeTransform {
	public transform(value : string, doit : boolean = true) : string {
		if (!doit) return value;
		else return value.replace(/(\b\w)/gi, m => m.toUpperCase() );
	}
}
import { Component } from '@angular/core';

// RxJS
import 'rxjs/Rx'; // ampliamente criticado por la comunidad más purista que prefiere la importación elemento a elemento. para usar MAP



@Component({ 
  selector: 'my-app',
  template: `<header-app></header-app>
			<router-outlet></router-outlet>`
})
export class AppComponent { 

}
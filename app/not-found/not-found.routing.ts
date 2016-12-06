import { Router, RouterModule } from '@angular/router';

import { NotFoundComponent } from './not-found.component';

export const notFoundRouting = RouterModule.forRoot([
    {path: '**', component: NotFoundComponent}
]);
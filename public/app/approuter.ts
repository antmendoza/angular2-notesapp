import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ArticuloDetailComponent } from "./modules/articles/articulo-detail.component";
import { ArticulosListComponent } from "./modules/articles/articulos-list.component";
import { ArticuloNewComponent } from "./modules/articles/articulo-new.component";
import { NotesListComponent } from "./modules/notes/notes-list.component";


const rutas: Routes = [
  { path: 'articulo/:id', component: ArticuloDetailComponent },
  { path: 'articulos', component : ArticulosListComponent},
  { path: 'newArticulo', component : ArticuloNewComponent}
];

@NgModule({
  imports  : [ RouterModule.forRoot(rutas) ],
  exports : [ RouterModule ]
})
export class AppRouterModule {}
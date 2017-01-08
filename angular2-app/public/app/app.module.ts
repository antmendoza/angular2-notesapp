import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { ArticulosListComponent } from './modules/articles/articulos-list.component';
import { RouterModule, Routes, Router } from '@angular/router';
import { AppRouterModule } from './approuter';
import { ArticuloDetailComponent } from './modules/articles/articulo-detail.component';
import { ArticuloMiniComponent } from './modules/articles/articulo-mini.component';

import { ArticuloListService } from './modules/articles/articulo-list.service';
import { ComentarioFormComponent } from "./modules/articles/comentario-form.component";
import { ArticuloFormComponent } from "./modules/articles/articulo-form.component";
import { ArticuloNewComponent } from "./modules/articles/articulo-new.component";


import { CapitalizePipe } from './modules/shared/pipes/capitalize.pipe';


import { SettingModule } from "./setting/setting.module";
import { SearchModule } from "./modules/shared/services/search/search.module";
import { SearchService } from './modules/shared/services/search/search.service'

import { HeaderModule } from './modules/header/header.module';


import { HomeModule } from './modules/home/home.module';
import { BookMarkModule } from './modules/bookmark/bookmark.module';
import { NotesModule } from './modules/notes/notes.module';
import { NotFoundModule } from './modules/not-found/not-found.module';


import { AuthModule }   from './auth/auth.module';
import { AuthService }   from './auth/auth.service';



import { authRouting } from './auth/auth.routing';
import { notesRouting } from './modules/notes/notes.routing';
import { homeRouting } from './modules/home/home.routing';
import { notFoundRouting } from './modules/not-found/not-found.routing';





@NgModule({
  imports: [BrowserModule,
    FormsModule,
    AppRouterModule,
    HttpModule,
    SettingModule,
    HeaderModule,
    NotesModule,
    HomeModule,
    BookMarkModule,
    NotFoundModule,
    AuthModule, 
    SearchModule,
    notesRouting,
    homeRouting,
    authRouting,
    notFoundRouting
  ],
  declarations: [AppComponent,
    ArticulosListComponent,
    ArticuloDetailComponent,
    ArticuloMiniComponent,
    CapitalizePipe,
    ComentarioFormComponent,
    ArticuloFormComponent,
    ArticuloNewComponent
  ],
  providers: [
    AuthService, SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
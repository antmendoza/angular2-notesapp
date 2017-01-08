import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { SettingRouterModule } from "./setting-router.module";
import { SettingComponent } from "./setting.component";
import { UserSettingComponent } from "./user-setting.component";
import { AppSettingComponent } from "./app-setting.component";
import {UserService} from './user.service';
 

@NgModule({
	imports: [BrowserModule, RouterModule, FormsModule,SettingRouterModule ],
	declarations: [SettingComponent, UserSettingComponent, AppSettingComponent ],
	providers: [UserService]
})
export class SettingModule { }
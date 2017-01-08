
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { SettingComponent } from "./setting.component";
import { UserSettingComponent } from "./user-setting.component";
import {  AppSettingComponent } from "./app-setting.component";

const routingSetting: Routes = [
	{ path: 'setting', component: SettingComponent },
	{ path: 'setting/user', component: UserSettingComponent },
	{ path: 'setting/app', component: AppSettingComponent }	 
];

@NgModule({
	imports: [
		RouterModule.forChild(routingSetting)
	],
	exports: [
		RouterModule
	]
})
export class SettingRouterModule { }
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { SideDrawerComponent } from "./side-drawer/side-drawer.component";
import { SideDrawerService } from "./side-drawer/side-drawer.service";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        HomeRoutingModule
    ],
    declarations: [
        HomeComponent,
        SideDrawerComponent
    ],
    providers: [
        SideDrawerService
    ],
    exports: [
        SideDrawerComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule { }

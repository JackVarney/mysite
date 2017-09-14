import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './header.component';
import { NavbarComponent } from './_Navbar/navbar.component';

import { RoutesModule } from 'app/routing/routes.module';

@NgModule({
    declarations: [
        HeaderComponent,
        NavbarComponent
     ],
    imports: [
        BrowserModule,
        FormsModule,
        RoutesModule
    ],
    exports: [ HeaderComponent ]
})

export class HeaderModule { }
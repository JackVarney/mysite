import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// my modules
import { FooterModule } from './components/_footer/footer.module';
import { HeaderModule } from './components/_header/header.module';
import { HomeModule } from './components/_home/home.module';
import { InfoModule } from './components/_info/info.module';
import { RoutesModule } from 'app/routing/routes.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    // my modules
    FooterModule,
    HeaderModule,
    HomeModule,
    InfoModule,
    RoutesModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

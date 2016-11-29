import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { DateComponent } from './date/date.component';
import { HeadingComponent } from './heading/heading.component';
import { IconHeartComponent } from './icon-heart/icon-heart.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    DateComponent,
    HeadingComponent,
    IconHeartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

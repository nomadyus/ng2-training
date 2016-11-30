import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { DateComponent } from './date/date.component';
import { HeadingComponent } from './heading/heading.component';
import { IconHeartComponent } from './icon-heart/icon-heart.component';
import { PostsListComponent } from './posts-list/posts-list.component';

import { PostsService } from './posts.service';
import { ServerService } from './server.service';
import { UserService } from './user.service';
import { SearchbarComponent } from './searchbar/searchbar.component';

import { HomeContainerComponent } from './home-container/home-container.component';
import { PostContainerComponent } from './post-container/post-container.component';

import { routing } from './router.config';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    DateComponent,
    HeadingComponent,
    IconHeartComponent,
    PostsListComponent,
    SearchbarComponent,
    HomeContainerComponent,
    PostContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [PostsService, ServerService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

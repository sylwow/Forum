import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BlogwowComponent } from './blogwow/blogwow.component';
import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NewPostComponent } from './blogwow/new-post/new-post.component';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './blogwow/posts/posts.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';
import { SignInDialogComponent } from './navbar/sign-in-dialog/sign-in-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MediaDialogComponent } from './blogwow/new-post/media-dialog/media-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BlogwowComponent,
    MainComponent,
    PageNotFoundComponent,
    NewPostComponent,
    PostsComponent,
    SignInDialogComponent,
    MediaDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    FlexLayoutModule,
    MatInputModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

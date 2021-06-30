import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HoverFocusDirective } from './hoverfocus.directive';
import { CapitalizeDirective } from './capitalize.directive';
import { StrFormatPipe } from './strformat.pipe';
import { PostsComponent } from './posts/posts.component';
import {PostsService} from './posts.service';
import { CustomLoopDirective } from './custom-loop.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HoverFocusDirective,
    CapitalizeDirective,
    StrFormatPipe,
    PostsComponent,
    CustomLoopDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

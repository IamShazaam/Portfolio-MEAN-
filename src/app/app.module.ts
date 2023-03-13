import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { GithubFeedComponent } from './github-feed/github-feed.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { GithubServiceService } from './github-service.service';
import { SkillLanguagesComponent } from './skill-languages/skill-languages.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { MyworkComponent } from './mywork/mywork.component';
import { HomeComponent } from './home/home.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    GithubFeedComponent,
    SkillLanguagesComponent,
    SocialMediaComponent,
    AboutmeComponent,
    MyworkComponent,
    HomeComponent,
    TutorialsComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GithubServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

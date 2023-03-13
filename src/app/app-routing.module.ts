import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MyworkComponent } from './mywork/mywork.component';
import { RegisterComponent } from './register/register.component';
import { TutorialsComponent } from './tutorials/tutorials.component';

const routes: Routes = [
  // { path: '', component: AppComponent },
  { path: '', component: HomeComponent, data: { title: 'Portfolio - Home' } },
  { path: 'mywork', component: MyworkComponent, data: { title: 'Portfolio - My Work' } },
  { path: 'aboutme', component: AboutmeComponent, data: { title: 'Portfolio - About Me' } },
  { path: 'tutorials', component: TutorialsComponent, data: { title: 'Portfolio - Tutorials' } },
  { path: 'register', component: RegisterComponent, data: { title: 'Portfolio - Register' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

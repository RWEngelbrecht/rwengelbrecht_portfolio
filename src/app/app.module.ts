import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { HeaderComponent } from './components/header/header.component';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { SkillsListComponent } from './components/skills-list/skills-list.component';
import { ToolsListComponent } from './components/tools-list/tools-list.component';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import {DividerModule} from 'primeng/divider';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {AvatarModule} from 'primeng/avatar';
import {TooltipModule} from 'primeng/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    ContactFormComponent,
    HeaderComponent,
    PortfolioPageComponent,
    ProjectsListComponent,
    SkillsListComponent,
    ToolsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    MenubarModule,
    ButtonModule,
    DividerModule,
    CardModule,
    InputTextModule,
    InputTextareaModule,
    AvatarModule,
    TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

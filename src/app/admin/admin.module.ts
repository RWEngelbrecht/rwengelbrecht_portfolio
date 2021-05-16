import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { MessagesPageComponent } from './pages/messages-page/messages-page.component';
import { AdminAboutMeComponent } from './components/admin-about-me/admin-about-me.component';
import { AdminMessagesComponent } from './components/admin-messages/admin-messages.component';
import { AdminProjectListComponent } from './components/admin-project-list/admin-project-list.component';
import { AdminSkillsListComponent } from './components/admin-skills-list/admin-skills-list.component';
import { AdminToolsListComponent } from './components/admin-tools-list/admin-tools-list.component';
import { FormModalComponent } from './components/form-modal/form-modal.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [AdminComponent, AdminPageComponent, AuthPageComponent, MessagesPageComponent, AdminAboutMeComponent, AdminMessagesComponent, AdminProjectListComponent, AdminSkillsListComponent, AdminToolsListComponent, FormModalComponent, HeaderComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }

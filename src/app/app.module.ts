import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {HttpClientModule} from '@angular/common/http';

import {FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { ButtonComponent } from './component/button/button.component';
import { TasksComponent } from './component/tasks/tasks.component';
import { TaskItemComponent } from './component/task-item/task-item.component';
import { AddTaskComponent } from './component/add-task/add-task.component';
import { FooterComponent } from './component/footer/footer.component';
import { AboutComponent } from './component/about/about.component';

const AppRoutes:Routes=[
  {path: '', component:TasksComponent},
  {path:'About', component: AboutComponent}
  
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskItemComponent,
    AddTaskComponent,
    FooterComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes,{enableTracing:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

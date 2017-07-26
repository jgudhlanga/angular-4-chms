import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RoutingModule } from './app.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ConfigComponent } from './config/config.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './register/register.component';
import { CellGroupComponent } from './cell-group/cell-group.component';
import { ZoneComponent } from './zone/zone.component';
import { MemberComponent } from './member/member.component';
import { FamilyComponent } from './family/family.component';
import { DepartmentComponent } from './department/department.component';
import { ProjectComponent } from './project/project.component';
import { MinistryComponent } from './ministry/ministry.component';
import { LibraryComponent } from './library/library.component';
import { HelpComponent } from './help/help.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ReportComponent } from './report/report.component';

@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
    FooterComponent,
    SideBarComponent,
    NotFoundComponent,
    HomeComponent,
    ConfigComponent,
    DashboardComponent,
    AuthComponent,
    RegisterComponent,
    CellGroupComponent,
    ZoneComponent,
    MemberComponent,
    FamilyComponent,
    DepartmentComponent,
    ProjectComponent,
    MinistryComponent,
    LibraryComponent,
    HelpComponent,
    CalendarComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ AuthGuard, AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

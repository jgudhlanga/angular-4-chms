import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AuthGuard } from './auth/auth.guard';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConfigComponent } from './config/config.component';
import { MemberComponent } from './member/member.component';
import { CellGroupComponent } from './cell-group/cell-group.component';
import { LibraryComponent } from './library/library.component';
import { HelpComponent } from './help/help.component';
import { CalendarComponent } from './calendar/calendar.component';
import { RegisterComponent } from './register/register.component';
import { ReportComponent } from './report/report.component';
import { FamilyComponent } from './family/family.component';
import { ZoneComponent } from './zone/zone.component';
import { DepartmentComponent } from './department/department.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'calendar', component: CalendarComponent, canActivate: [AuthGuard]},
    { path: 'config', component: ConfigComponent, canActivate: [AuthGuard]},
    { path: 'cell-groups', component: CellGroupComponent, canActivate: [AuthGuard] },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
    { path: 'departments', component: DepartmentComponent, canActivate: [AuthGuard] },
    { path: 'families', component: FamilyComponent, canActivate: [AuthGuard] },
    { path: 'help', component: HelpComponent, canActivate: [AuthGuard]},
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
    { path: 'library', component: LibraryComponent, canActivate: [AuthGuard] },
    { path: 'login', component: AuthComponent },
    { path: 'logout', component: AuthComponent },
    { path: 'membership', component: MemberComponent,  canActivate: [AuthGuard] },
    { path: 'projects', component: ProjectComponent, canActivate: [AuthGuard] },
    { path: 'register', component: RegisterComponent },
    { path: 'reports', component: ReportComponent, canActivate: [AuthGuard] },
    { path: 'zones', component: ZoneComponent,  canActivate: [AuthGuard] },
    { path: '**', component: NotFoundComponent }
]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutingModule{};

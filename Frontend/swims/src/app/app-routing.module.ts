import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { SettingsComponent } from './settings/settings.component';
import { SwimshelpComponent } from './swimshelp/swimshelp.component';


const routes: Routes = [ 
  {path: '', component: DashboardComponent, pathMatch: 'full'},
  {path: 'statistics', component: StatisticsComponent, pathMatch: 'full'},
  {path: 'login', component: LoginComponent, pathMatch: 'full' },
  {path: 'settings', component: SettingsComponent, pathMatch: 'full' },
  {path: 'help', component: SwimshelpComponent, pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

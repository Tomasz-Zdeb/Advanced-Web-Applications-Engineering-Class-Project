import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../components/pages/login/login.component';
import { DashboardComponent } from '../components/pages/dashboard/dashboard.component';
import { StatisticsComponent } from '../components/pages/statistics/statistics.component';
import { SettingsComponent } from '../components/pages/settings/settings.component';
import { SwimshelpComponent } from '../components/pages/swimshelp/swimshelp.component';
import { StorageSpacesComponent } from '../components/contained/storage-spaces/storage-spaces.component';
import { StorageSpaceDetailsComponent } from '../components/contained/storage-space-details/storage-space-details.component';

const routes: Routes = [
  { path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', component: StorageSpacesComponent, pathMatch: 'full'  },
      { path: ':name', component: StorageSpaceDetailsComponent}
  ]},
  { path: 'raports', component: StatisticsComponent, pathMatch: 'full'},
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'settings', component: SettingsComponent, pathMatch: 'full' },
  { path: 'help', component: SwimshelpComponent, pathMatch: 'full' },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

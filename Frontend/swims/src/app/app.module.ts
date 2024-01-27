import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { LoginComponent } from './components/pages/login/login.component';
import { NavbarComponent } from './components/contained/navbar/navbar.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './services/auth.interceptor.service';
import { FormsModule } from '@angular/forms';
import { StatisticsComponent } from './components/pages/statistics/statistics.component';
import { BreadcrumbComponent } from './components/contained/breadcrumb/breadcrumb.component';
import { SettingsComponent } from './components/pages/settings/settings.component';
import { SwimshelpComponent } from './components/pages/swimshelp/swimshelp.component';
import { StorageSpacesComponent } from './components/contained/storage-spaces/storage-spaces.component';
import { StorageSpaceDetailsComponent } from './components/contained/storage-space-details/storage-space-details.component';
import { CapitalizeAndReplacePipe } from './pipes/capitalize-and-replace.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    NavbarComponent,
    StatisticsComponent,
    BreadcrumbComponent,
    SettingsComponent,
    SwimshelpComponent,
    StorageSpacesComponent,
    StorageSpaceDetailsComponent,
    CapitalizeAndReplacePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
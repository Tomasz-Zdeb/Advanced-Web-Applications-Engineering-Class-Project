import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { FormsModule } from '@angular/forms';
import { StatisticsComponent } from './statistics/statistics.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { SettingsComponent } from './settings/settings.component';
import { SwimshelpComponent } from './swimshelp/swimshelp.component';
import { StorageSpacesComponent } from './storage-spaces/storage-spaces.component';
import { StorageSpaceDetailsComponent } from './storage-space-details/storage-space-details.component';
import { CapitalizeAndReplacePipe } from './capitalize-and-replace.pipe';

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
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { PricingComponent } from './pricing/pricing.component';
import { BlogComponent } from './blog/blog.component';
import { HelpComponent } from './help/help.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import {  ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SitesComponent } from './sites/sites.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsersComponent } from './users/users.component';
import { SettingsComponent } from './settings/settings.component';
import { AccountComponent } from './account/account.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { IntegrationsComponent } from './integrations/integrations.component';
import { SettingsSidebarComponent } from './settings-sidebar/settings-sidebar.component';
import { PrivateSettingsComponent } from './private-settings/private-settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { BacklogComponent } from './backlog/backlog.component';
import { TasksComponent } from './tasks/tasks.component';
import { ClosedComponent } from './closed/closed.component';
import { EditComponent } from './edit/edit.component';
import { SiteSettingsComponent } from './site-settings/site-settings.component';
import { EmbedComponent } from './embed/embed.component';
import { PagesComponent } from './pages/pages.component';
import { ExportsComponent } from './exports/exports.component';
import { BillingComponent } from './billing/billing.component';
import { ReceiptsComponent } from './receipts/receipts.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeaturesComponent,
    PricingComponent,
    BlogComponent,
    HelpComponent,
    SigninComponent,
    SignupComponent,
    SitesComponent,
    NavbarComponent,
    UsersComponent,
    SettingsComponent,
    AccountComponent,
    NotificationsComponent,
    IntegrationsComponent,
    SettingsSidebarComponent,
    PrivateSettingsComponent,
    DashboardComponent,
    FeedbackComponent,
    BacklogComponent,
    TasksComponent,
    ClosedComponent,
    EditComponent,
    SiteSettingsComponent,
    EmbedComponent,
    PagesComponent,
    ExportsComponent,
    BillingComponent,
    ReceiptsComponent
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

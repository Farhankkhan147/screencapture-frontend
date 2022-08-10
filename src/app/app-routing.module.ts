import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { BacklogComponent } from './backlog/backlog.component';
import { BillingComponent } from './billing/billing.component';
import { BlogComponent } from './blog/blog.component';
import { ClosedComponent } from './closed/closed.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditComponent } from './edit/edit.component';
import { EmbedComponent } from './embed/embed.component';
import { ExportsComponent } from './exports/exports.component';
import { FeaturesComponent } from './features/features.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { IntegrationsComponent } from './integrations/integrations.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { PagesComponent } from './pages/pages.component';
import { PricingComponent } from './pricing/pricing.component';
import { PrivateSettingsComponent } from './private-settings/private-settings.component';
import { ReceiptsComponent } from './receipts/receipts.component';
import { AuthGuard } from './service/auth.guard';
import { SettingsComponent } from './settings/settings.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { SiteSettingsComponent } from './site-settings/site-settings.component';
import { SitesComponent } from './sites/sites.component';
import { TasksComponent } from './tasks/tasks.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'features', component: FeaturesComponent, },
  { path: 'pricing', component: PricingComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'help', component: HelpComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'sites/:id', component: SitesComponent, children: [
      { path: 'sites/:id/users', component: UsersComponent, canActivate: [AuthGuard]},
      {
        path: 'sites/:id/user-settings', component: SettingsComponent, children: [
          { path: 'sites/:id/user-settings/notifications', component: NotificationsComponent, canActivate: [AuthGuard] },
          { path: 'sites/:id/user-settings/integrations', component: IntegrationsComponent, canActivate: [AuthGuard] },
          { path: 'sites/:id/user-settings/private-settings', component: PrivateSettingsComponent, canActivate: [AuthGuard] },
        ]
      },
      {
        path: 'sites/:id/account', component: AccountComponent, children: [
          { path: 'sites/:id/account/billing', component: BillingComponent, canActivate: [AuthGuard] },
          { path: 'sites/:id/account/receipts', component: ReceiptsComponent, canActivate: [AuthGuard] },
        ]
      },
      {
        path: 'sites/:id/dashboard/:id1', component: DashboardComponent, children: [
          { path: 'sites/:id/dashboard/:id1/feedback', component: FeedbackComponent, canActivate: [AuthGuard] },
          { path: 'sites/:id/dashboard/:id1/backlog', component: BacklogComponent, canActivate: [AuthGuard] },
          { path: 'sites/:id/dashboard/:id1/tasks', component: TasksComponent, canActivate: [AuthGuard] },
          { path: 'sites/:id/dashboard/:id1/closed', component: ClosedComponent, canActivate: [AuthGuard] },
          {
            path: 'sites/:id/dashboard/:id1/edit/site-settings', component: SiteSettingsComponent, children: [
              { path: 'sites/:id/dashboard/:id1/edit/embed', component: EmbedComponent, canActivate: [AuthGuard] },
              { path: 'sites/:id/dashboard/:id1/edit/users', component: UsersComponent, canActivate: [AuthGuard] },
              { path: 'sites/:id/dashboard/:id1/edit/pages', component: PagesComponent, canActivate: [AuthGuard] },
              { path: 'sites/:id/dashboard/:id1/edit/exports', component: ExportsComponent, canActivate: [AuthGuard] }
            ]
          },
        ]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }   

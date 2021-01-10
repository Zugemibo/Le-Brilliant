import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component'
import {ContactComponent} from './contact/contact.component'
import {ServicesComponent} from './services/services.component'

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'kontakt', component: ContactComponent},
  { path: 'uslugi', component: ServicesComponent},
  { path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

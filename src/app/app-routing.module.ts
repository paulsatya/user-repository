import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './components/about/about/about.component';
import { UserInformationComponent } from './components/user-information/user-information.component';
import { ContactComponent } from './components/contact/contact/contact.component';

const routes: Routes = [
  { path: 'userinformation', component: UserInformationComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [UserInformationComponent, AboutComponent, ContactComponent]

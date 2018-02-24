import { RouterModule, Routes } from '@angular/router';
import { BuyerRegistrationComponent } from './account/buyer-registration/buyer-registration.component';
import { BuyerHomeComponent } from './home/buyer-home/buyer-home.component';
import { BuyerSigninComponent } from './account/buyer-signin/buyer-signin.component';


const routes: Routes = [
    { path: 'BuyerHomeComponent', component: BuyerHomeComponent },
    { path: 'BuyerSignin', component: BuyerSigninComponent },
    { path: 'BuyerRegistration', component: BuyerRegistrationComponent },
    { path: '', redirectTo: 'BuyerHomeComponent', pathMatch: 'full' },
    { path: '**', redirectTo: 'BuyerHomeComponent', pathMatch: 'full' }
];

export const Routing = RouterModule.forRoot(routes);
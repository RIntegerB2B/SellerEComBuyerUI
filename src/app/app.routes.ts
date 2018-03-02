import { RouterModule, Routes } from '@angular/router';
import { BuyerRegistrationComponent } from './account/buyer-registration/buyer-registration.component';
import { BuyerHomeComponent } from './home/buyer-home/buyer-home.component';
import { BuyerSigninComponent } from './account/buyer-signin/buyer-signin.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { ContentViewComponent } from './content/content-view/content-view.component';
import { ContentDetailComponent } from './content/content-detail/content-detail.component';
import { CartViewComponent } from './cart/cart-view/cart-view.component';
import { OrderViewComponent } from './order/order-view/order-view.component';
import { AccountViewComponent } from './account/account-view/account-view.component';
import { CollectionViewComponent } from './collection/collection-view/collection-view.component';

const routes: Routes = [
    { path: 'BuyerHomeComponent', component: BuyerHomeComponent },
    { path: 'BuyerSignin', component: BuyerSigninComponent },
    { path: 'BuyerRegistration', component: BuyerRegistrationComponent },
    { path: 'Welcome', component: WelcomeComponent },
    { path: 'ContentView', component: ContentViewComponent },
    { path: 'ContentDetail', component: ContentDetailComponent },
    { path: 'CartView', component: CartViewComponent },
    { path: 'OrderView', component: OrderViewComponent },
    { path: 'AccountView', component: AccountViewComponent },
    { path: 'CollectionView', component: CollectionViewComponent },
    { path: '', redirectTo: 'BuyerHomeComponent', pathMatch: 'full' },
    { path: '**', redirectTo: 'BuyerHomeComponent', pathMatch: 'full' }
];

export const Routing = RouterModule.forRoot(routes);
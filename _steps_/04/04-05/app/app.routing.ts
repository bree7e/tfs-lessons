import {WalletListComponent} from './wallet-list/wallet-list.component';
import {Routes} from '@angular/router';
import {IntroComponent} from './intro/intro.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {WalletComponent} from './wallet/wallet.component';
import {AuthGuard} from './auth.guard';

export const appRoutes: Routes = [
  {
    path: 'wallets',
    canActivate: [AuthGuard],
    children: [
      {
        path: ':id',
        component: WalletComponent
      },
      {
        path: '',
        component: WalletListComponent
      }
    ]
  },
  {
    path: '',
    component: IntroComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

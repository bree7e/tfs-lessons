import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WalletListComponent} from './wallet-list.component';
import {WalletModule} from '../wallet/wallet.module';
import {WalletListService} from './wallet-list.service';
import {WalletFireService} from './wallet-fire.service';

@NgModule({
  imports: [
    CommonModule,
    WalletModule
  ],
  declarations: [WalletListComponent],
  exports: [WalletListComponent],
  providers: [WalletListService, WalletFireService]
})
export class WalletListModule {
}

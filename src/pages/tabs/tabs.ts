import { Component } from '@angular/core';

import { MarketPage } from '../market/market';
import { SettingsPage } from '../settings/settings';
import { SideMenusPage } from '../sidemenus/sidemenus';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = SideMenusPage;
  tab2Root = MarketPage;
  tab3Root = SettingsPage;

  constructor() {
    
  }
}

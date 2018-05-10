import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { TermometroPage } from '../termometro/termometro';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = TermometroPage;
  tab2Root = HomePage;
  tab3Root = ContactPage;

  constructor() {

  }
}

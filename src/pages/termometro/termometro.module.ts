import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TermometroPage } from './termometro';

@NgModule({
  declarations: [
    TermometroPage,
  ],
  imports: [
    IonicPageModule.forChild(TermometroPage),
  ],
})
export class TermometroPageModule {}

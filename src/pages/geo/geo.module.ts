import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GeoPage } from './geo';

@NgModule({
  declarations: [
    GeoPage,
  ],
  imports: [
    IonicPageModule.forChild(GeoPage),
  ],
  exports: [
    GeoPage
  ]
})
export class GeoPageModule {}

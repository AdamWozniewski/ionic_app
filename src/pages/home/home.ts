import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ItemDetailPage } from '../item-detail/item-detail';
import { AddItemPage } from '../add-item/add-item';
import { GeoPage } from '../geo/geo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public items: any[] = [];
  constructor(
      public navCtrl: NavController,
      public modalController: ModalController
  ) {}
  viewItem(item) {
    this.navCtrl.push(ItemDetailPage, {item: item});
  }
  addItem() {
    let addModal = this.modalController.create(AddItemPage);
    addModal.onDidDismiss(item => {
      if (item) {
        this.saveItem(item);
      }
    });
    addModal.present();
  }
  viewGeo() {
    console.log('weszlo')
    this.navCtrl.push(GeoPage, {});
  }
  saveItem(item) {
    this.items.push(item);
  }
}

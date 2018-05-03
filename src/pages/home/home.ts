import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ItemDetailPage } from '../item-detail/item-detail';
import { AddItemPage } from '../add-item/add-item';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public items: any[];
  constructor(public navCtrl: NavController) {

  }
  ionViewDidLoad() {
    this.items = [
        {
          title: 'art 1',
          desc: 'lorem1',
        },
        {
            title: 'art 2',
            desc: 'lorem2',
        },
        {
            title: 'art 3',
            desc: 'lorem3',
        },
    ]
  }
  viewItem(item) {
    this.navCtrl.push(ItemDetailPage, {item: item});
  }
  addItem() {
    this.navCtrl.push(AddItemPage, {});
  }
}

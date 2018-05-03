import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the AddItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})
export class AddItemPage {

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public viewController: ViewController
  ) {
  }
  title: string;
  desc: string;
  saveItem() {
    let newItem = {
      title: this.title,
      desc: this.desc
    };
    this.viewController.dismiss(newItem)
  }
  close() {
    this.viewController.dismiss();
  }
}

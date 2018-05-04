import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;
/**
 * Generated class for the GeoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-geo',
  templateUrl: 'geo.html',
})
export class GeoPage {
  map: any;
  @ViewChild('map') mapElement: ElementRef;
  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public geolocation: Geolocation,
  ) {
  }

  ionViewDidLoad() {
    this.initMap();
  }
  initMap() {
    this.geolocation.getCurrentPosition().then(pos => {
      let LatLng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
      let mapOptions = {
          center: LatLng,
          zoom: 13,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
      };
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      new google.maps.Marker({
          position: LatLng,
          map: this.map,
          animation: google.maps.Animation.DROP,
          title: 'Jesteś tutaj'
      });
    }, err => console.log(err));
  }
}

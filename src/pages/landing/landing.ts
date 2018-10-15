import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public authProvider: AuthProvider) {
  }

  goToList(): void {
	this.authProvider.createAnonymousUser().then( () => {
		this.navCtrl.setRoot('AnonymousListPage');
	});
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad LandingPage');
  }

}

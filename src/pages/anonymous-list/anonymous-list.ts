import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Databaseservice } from "../../providers/databaseservice/databaseservice";
import { Observable } from 'rxjs';


@IonicPage()
@Component({
  selector: 'page-anonymous-list',
  templateUrl: 'anonymous-list.html',
})
export class AnonymousListPage {  
  employees: Observable<any[]>;
  certifications: Observable<any[]>;
  trainings: Observable<any[]>;
  today: number = Date.now()
  constructor(public navCtrl: NavController, public navParams: NavParams, public db: Databaseservice) {
	this.employees = this.db.listEmployees();
	this.certifications = this.db.listCerts();
	this.trainings = this.db.listTrainings();

	  }

    ionViewDidLoad() {
    console.log('ionViewDidLoad AnonymousListPage');
  }

}

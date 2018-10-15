import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable()
export class Databaseservice {

  constructor(public _af: AngularFireDatabase) {
    
  }

  public listEmployees(): Observable<any[]>{
	return this._af.list('/employees').valueChanges();
  }

  public listCerts(): Observable<any[]>{
	return this._af.list('/certifications').valueChanges();
  }

  public listTrainings(): Observable<any[]>{
	return this._af.list('/trainings').valueChanges();
  }

}

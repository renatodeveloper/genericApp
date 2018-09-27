import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
items: Observable<any[]>;
  constructor(public db: AngularFireDatabase, public navCtrl: NavController){
  		this.items = db.list('contatos').valueChanges();
  }
}

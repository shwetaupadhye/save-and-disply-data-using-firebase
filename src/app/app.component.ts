import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  description = 'Angular-Fire-Demo';
  itemValue = '';
  nameValue = '';
  addValue = '';
  cityValue = '';
  contactValue = '';
  items: Observable<any[]>;
  name: Observable<any[]>;
  address: Observable<any[]>;
  city: Observable<any[]>;
  contact: Observable<any[]>;
  title = 'firebaseDemo';

  constructor(public db: AngularFireDatabase) {
    this.items = db.list('items').valueChanges();
    this.name = db.list('name').valueChanges();
    this.address = db.list('address').valueChanges();
    this.city = db.list('city').valueChanges();
    this.contact = db.list('contact').valueChanges();


  }
  onSubmit() {
    this.db.list('items').push({ content: this.itemValue });
    this.db.list('name').push({ namecontent: this.nameValue });
    this.db.list('address').push({ addcontent: this.addValue });
    this.db.list('city').push({ citycontent: this.cityValue });
    this.db.list('contact').push({ contcontent: this.contactValue });

    this.itemValue = '';
    this.nameValue = '';
    this.addValue = '';
    this.cityValue = '';
    this.contactValue = '';

  }
}

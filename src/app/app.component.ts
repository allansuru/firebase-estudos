
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

 courses: any[];

  constructor(private db: AngularFireDatabase) {}

  getCourses() {
    this.db.list('/courses').valueChanges()
   .subscribe(result => {
     this.courses = result;
     console.log('Firebase Result: ', this.courses);
   });

  }


  ngOnInit(): void {
    this.getCourses();
  }


}

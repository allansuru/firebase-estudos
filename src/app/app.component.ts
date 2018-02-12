
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 courses$;
 course$;
 author$;


  constructor(private db: AngularFireDatabase) {}

  getCourses() {
    this.courses$ = this.db.list('/courses').valueChanges();
    this.course$ = this.db.object('/courses/5').valueChanges();
    this.author$ = this.db.object('/authors/1').valueChanges();

    //#region get sem utilizar o pipe | async
    /*
   this.subscription =  this.db.list('/courses').valueChanges()
   .subscribe(result => {
     this.courses = result;
     console.log('Firebase Result: ', this.courses);
   });
   */
  //#endregion

  }

  ngOnInit(): void {
    this.getCourses();
  }

  addCourse(course: HTMLInputElement) {
    const obj: any = {
      'idade': '15',
      'nome': course.value,
      'telefone': 883312,
      'sections': [
        {
          title: 'Seção 1',
          isFavorite: true
        },
        {
          title: 'Seção 2',
          isFavorite: false
        }
      ]
    };

    const add = this.db.list('/courses');
    add.push(obj);
    course.value = '';
  }
}

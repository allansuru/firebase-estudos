
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 private basePath = '/courses';
 courses$;
 course$: AngularFireObject<any>;
 author$;
 crud: AngularFireList<any>;
courseComId: any;

  constructor(private db: AngularFireDatabase) {
    this.crud  = this.db.list(this.basePath);
  }

  getCourses() {
    this.courses$ = this.db.list(this.basePath).valueChanges();
    //this.course$ = this.db.object('/courses/5').valueChanges();
    this.author$ = this.db.object('/authors/1').valueChanges();

     this.db.object('/courses').valueChanges()
    .subscribe(item => {
      this.courseComId = item;
      console.log('itens: ', this.courseComId);
    });
  }

  ngOnInit(): void {
    this.getCourses();
  }

  addCourse(course: HTMLInputElement) {
    const obj: any = {
      'id': Math.random(),
      'idade': '69',
      'nome': course.value,
      'telefone': 696969,
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

    this.crud.push(obj);
    //course.value = '';
    coruse.value = ';'
  }

  update(course, newNome: HTMLInputElement) {
  //  console.log(course.nome);
   // course.nome = newNome.value;
 //   console.log('Novo Objeto: ', course);
  //  this.crud.update(course.id, course);
//console.log(this.db.object('/courses/' + course.$key));


  }
}

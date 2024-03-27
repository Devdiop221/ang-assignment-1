import { Component } from '@angular/core';
import { Class } from './model/class.model';
import { Student } from './model/student.model';
import { SchoolService } from './services/school.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  classes!: Class[];
  students: Student[] = [] ;

  constructor( private schoolService: SchoolService) {}

  ngOnInit() {
    this.schoolService.ngOninit();
    this.classes = this.schoolService.getClasses();
    this.students = this.schoolService.getStudents();
  }

  addClass(newClass: Class) {
    this.schoolService.addClass(newClass);
    this.classes = this.schoolService.getClasses();
  }

  addStudent(newStudent: Student) {
    this.schoolService.addStudent(newStudent);
    this.students = this.schoolService.getStudents();
  }


  deleteClass(ClassId: Class): void {
    this.schoolService.deleteClass(ClassId);
    this.classes = this.schoolService.getClasses();
  }

  deleteStudent(studentId: Student): void {
    this.schoolService.deleteStudent(studentId);
    this.students = this.schoolService.getStudents();
  }

  updateClass(updatedClass: Class): void {
    this.schoolService.updateClass(updatedClass);
    this.classes = this.schoolService.getClasses();
  }

  updateStudent(updatedStudent: Student): void {
    this.schoolService.updateStudent(updatedStudent);
    this.students = this.schoolService.getStudents();
  }

  getClasses(): void {
    this.classes = this.schoolService.getClasses();
  }

  getStudents(): void {
    this.students = this.schoolService.getStudents();
  }



}

import { Injectable } from '@angular/core';
import { Class } from '../model/class.model';
import { Student } from '../model/student.model';
import { faker } from '@faker-js/faker';

@Injectable({
  providedIn: 'root',
})
export class SchoolService {
  Classes: Class[] = [];
  Students: Student[] = [];

  ngOninit() {
    this.generateFakeData();
    this.addClass({ id: faker.string.uuid(), name: 'Class 1' });
    this.addClass({ id: faker.string.uuid(), name: 'Class 2' });
    this.addStudent({ id: faker.string.uuid(), name: 'Student 1', class: 'Class 1' });
    this.addStudent({ id: faker.string.uuid(), name: 'Student 2', class: 'Class 1' });
    this.addStudent({ id: faker.string.uuid(), name: 'Student 3', class: 'Class 2' });
    this.deleteClass({
      id: faker.string.uuid(),
      name: 'Student 3',
    });
    this.deleteStudent({
      id: faker.string.uuid(),
      name: 'Student 3',
      class: 'Class 2',
    });
    this.updateClass({ id: faker.string.uuid(), name: 'Class 2 Updated' });
    this.updateStudent({
      id: faker.string.uuid(),
      name: 'Student 2 Updated',
      class: 'Class 2 Updated',
    });
    this.getStudents();
    this.getClasses();
  }

  generateFakeData(): void {
    // Genarate fake Classes
    for (let i = 1; i < 2; i++) {
      const className = `Terminal ${faker.string.alphanumeric([
        'S1',
        'S2',
        'L1a',
        'L2b',
      ])}`;
      const newClass: Class = {
        id: faker.string.uuid(),
        name: className,
      };
      this.Classes.push(newClass);
    }

    // Generate fake Students

    for (let i = 1; i < 20; i++) {
      const studentName = faker.name.fullName();
      const studentClass =
        this.Classes[Math.floor(Math.random() * this.Classes.length)].name;
      const newStudent: Student = {
        id: faker.string.uuid(),
        name: studentName,
        class: studentClass,
      };
      this.Students.push(newStudent);
    }
  }

  // implements CRUD operations

  getClasses():  Class[]  {
    return this.Classes;
  }

  getStudents(): Student[] {
    return this.Students;
  }

  addClass(newClass: Class): void {
    this.Classes.push(newClass);
  }

  addStudent(newStudent: Student): void {
    this.Students.push(newStudent);
  }

  updateClass(updatedClass: Class): void {
    const index = this.Classes.findIndex((c) => c.id === updatedClass.id);
    this.Classes[index] = updatedClass;
  }

  updateStudent(updatedStudent: Student): void {
    const index = this.Students.findIndex((s) => s.id === updatedStudent.id);
    this.Students[index] = updatedStudent;
  }

  deleteClass(classId: Class): void {
    this.Classes = this.Classes.filter((c) => c.id !== classId.id);
  }

  deleteStudent(studentId: Student): void {
    this.Students = this.Students.filter((s) => s.id !== studentId.id);
  }
}

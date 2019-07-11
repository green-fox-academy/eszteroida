'use strict';

// Create Student and Teacher classes
//  Student
//      learn() -> prints the student is learning something new
//      question(teacher) -> calls the teachers answer method
//  Teacher
//      teach(student) -> calls the students learn method
//      answer() -> prints the teacher is answering a question
// Instantiate a Student and Teacher object
// Call the student's question() method and the teacher's teach() method

class Student {
    learn() {
        console.log(`Student is learning something new`);
    }

    question(teacher: Teacher) {
        teacher.answer();
    }
}

class Teacher {
    teach(student: Student) {
        student.learn();
    }
    answer() {
        console.log("Teacher is answering the question");
    }
}

let me = new Student();
let Belaba = new Teacher();

me.question(Belaba);
Belaba.teach(me);



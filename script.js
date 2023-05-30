//complete this code
class Person {
	let name;
	let age;
	person(name,age){
		this.name=name;
		this.age=age;
	}
}

class Student extends Person {
	study(){
		console.log(`${name} is studying`)
	}
}

class Teacher extends Person {
	teach(){
		console.log(`${name} is teaching`);
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;

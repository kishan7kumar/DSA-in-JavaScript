class Student {
  // * here the constructor is used to assign these two properties whenever a new student object is created using this Student Class
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

//Creating an object from the Class
let firstStudent = new Student("Kishan", "kumar");
let lastStudent = new Student("ray", "jane");

console.log(firstStudent);

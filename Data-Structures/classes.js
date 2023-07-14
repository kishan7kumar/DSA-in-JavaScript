class Student {
  // * here the constructor is used to assign these two properties whenever a new student object is created using this Student Class
  // * This keyword refers to the object created from the class
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.tardies = 0;
    this.score = [];
  }
  // *Instance methods is limited to a particular instance of a class
  fullName() {
    return `The student name is ${this.firstName} ${this.lastName}`;
  }

  markLate() {
    this.tardies += 1;
    if (this.tardies >= 3) {
      return `You are expelled`;
    }
    return `${this.firstName} has been late for ${this.tardies} time`;
  }

  addScore(score) {
    this.score.push(score);
    return this.score;
  }

  calculateAverage() {
    let sum = this.score.reduce((acc, score) => acc + score);
    return sum / this.score.length;
  }

  // * This is like a utility method and not specific to a particular instance and provides overall functionality for the class. A functionality not relevant to an individual instance.
  static enrollStudent(...students) {
    return `Student Enrolled`;
  }
}

// *Creating an object from the Class we use NEW keyword used for instantiation
let firstStudent = new Student("Kishan", "kumar");

console.log(firstStudent.addScore(20));
console.log(firstStudent.addScore(40));
console.log(firstStudent.calculateAverage());
console.log(Student.enrollStudent());

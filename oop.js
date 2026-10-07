class Student {
  constructor(name, age, classN, adminNo) {
    this.name = name;
    this.age = age;
    this.classN = classN;
    this.adminNo = adminNo;
  }

  getName() {
    console.log(this.name);
  }
  getAge() {
    console.log(this.age);
 
  }

  getClassN() {
    return this.classN;
  }

  getAdminNo() {
    return this.adminNo;
  }
}

const newStudent = new Student("Uyai", 24, "Masters");

newStudent.getName();
newStudent

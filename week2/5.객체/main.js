//객체

function Student(){
    this.name = '강감찬'
    this.age=56
}

const student = new Student()
console.log(student);
console.log(student.name);
console.log(student['name']);


const student2 = new Object()
student2.name = '김유신'
student2.age = '김유신'
console.log(student2);
console.log(student2.name);
console.log(student2['name']);


const studentA = {
name : '고종훈',
age : 25
};

const studentB = {
    name : '남웅식',
    age : 28,
    parent : studentA
};

console.log(studentA);
console.log(studentB);

const students=[studentA, studentB]
console.log(students[0]);
console.log(students[1]);
console.log(students[0].name);
console.log(students[0].age);
console.log(students[1]['parent']['name']);




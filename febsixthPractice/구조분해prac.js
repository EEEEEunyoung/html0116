// const obj = {
//     id: 'abc',
//     name: '라떼',
//     'c': 3,
//     e: '고구마'
// }
// //구조분해시 같은 변수 사용 불가
// const{id, name} = obj
// console.log(obj);





// function User(name, age, ...skils){
// this.name=name;
// this.age=age;
// this.skils=skils;

// }

// const user1 = new User("mike", 30, "html");
// const user2 = new User("tom", 10, "java", "photoshop");
// const user3 = new User("smith", 40, "react", "css", "엿먹기");

// console.log(user1);
// console.log(user2);
// console.log(user3);


//전개구문
// let arr1 = [1,2,3];
// let arr2 = [4,5,6];


// arr1 = [...arr2, ...arr1]
// console.log(arr1);



// let user = {name : "mike"};
// let info = {age : "30"};
// let fe = ["js", "react"];
// let lang = ["mike", "korean"];
 

// user = Object.assign({}, user, info, {skilss:[], });


// user.info
// console.log(user);

// let num =0;

// function time(){
//     console.log(`접속 후, ${num++}분이 지남`);
//     }
// setInterval(time, 60000);



//class

// const User = function(name, age){
//     this.name= name;
//     this.age = age;
//     this.showName = function(){
//         console.log(this.name);
//     }
// }

// const mike = new User("mike", 30);

// class User2{
//     constructor(name, age){
//         this.name = name;
//         this.agea = age;

//     }
//     showName(){
//         console.log(this.name);
//     }
// }

// const tom = new User2("tom", 19);

// let a = null;
// a = (1+"안녕");
// console.log(typeof(a));

// // alert("hi")
// const name = prompt("이름입력", "2020-10");
// // console.log(name);


// function say(name){
//     let msg = 'hi';
//     if(name){
//         msg +=`,${name}`;
//     }
//     console.log(msg);
// }
// say();
// say('mynameiskey');

// showError();
// function showError(){
//     console.log('error');
// }


// const showHi=(name)=>{
//     const msg = `hello, ${name}`;
//     console.log(msg);
// }
// showHi('mike');
//////////////////////////////////////////
// const superman = {
//     name : 'clark', 
//     age : 30
// }

// superman.haircolor = 'black';
// delete superman.age;
// console.log(superman.name);
// console.log(superman['age']);
// console.log(superman);
//////////////////////////////////////////
//////////////////////////////////////////

// function makeObject(name,age){
//     return{
//         name:name,
//         age:age,
//         hobby : 'football'
//     }
// }
// const Mike = makeObject("mike", 30);
// console.log(Mike);

// console.log(("age" in Mike));
// console.log(("birth" in Mike));
//////////////////////////////////////////

// function isAdult(user){
//     if(!('age'in user) || user.age<20){     //유저에 age가 없거나, 20살 미만이면 false
//         return false;
//     }
//     return true;
// }

// const Mike = {
//     name : "mike",
//     age : 30
// };

// const Jake = {
//     name : "Jake",
// };

// console.log(isAdult(Jake));


// let days = ['mon','tue','wed'];
// days[1] = '화요일';
// days.push('thu');
// days.unshift();
// days.shift();

// console.log(days);


// let list = [
//     "1. 사과",
//     "2. 바나나",
//     "3. 파인애플",
//     "4. 골드키위",
//     "5. 포도",
// ];

// let fruits =[];

// for (let i = 0; i<list.length;i++){
//     fruits.push(list[i].slice(3));
// }
// console.log(fruits);



// let str = "hello, My name is Mike.";
// const result = str.split(",");
// console.log(result);
/////////////////////////////////////////////////////
// let user ={
//     name : "Mike",
//     age : 30
// };

// let userList = ["mike","tom","jane"];

// console.log(Array.isArray(user));
// console.log(Array.isArray(userList));
/////////////////////////////////////////////////////



// function add(...names){
//     let result = names.reduce((prev, cur)=> prev+cur);
//     console.log(result);
// }
// add(1,2,3);
// add (1,2,3,4,5,6,7,8,9);
/////////////////////////////////////////////////////



//데이터 타입 

const a = 5

console.log(typeof a)

console.log(typeof '이순신'==='string'); 
console.log(typeof a=='string'); 
console.log(typeof a=='number'); 
console.log(typeof a=='undefined'); 
console.log(typeof a=='null');  //null 은 object 타입 임 
console.log(typeof true=='boolean');
console.log(typeof []=='object');
console.log(typeof {}=='object'); 



console.log(typeof true=='boolean'); 
console.log(typeof undefined=='undefined'); 
console.log(typeof null=='null');  //null 은 object 타입 임 

function methodA(){
    console.log('methodA호출하긔');
}
methodA()
console.log(methodA);




console.log([].constructor===Array);
console.log({}.constructor===Object);
// console.log(null.constructor===Object);
console.log(Object.prototype.toString.call(null).slice(8,-1)==='Null');

function checkType(data){
    return Object.prototype.toString.call(data).slice(8,-1);
}


const checkType2 = (data) => {  //ES6, ECMAScript(2016)  - arrow function
    return Object.prototype.toString.call(data).slice(8,-1);
}


console.log(checkType(null));
console.log(checkType(undefined));
console.log(checkType("강감찬"));

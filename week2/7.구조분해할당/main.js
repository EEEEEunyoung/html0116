const obj = {
    a: 1,
    b: 2,
    c: 3,
    e: null
}
//구조분해시 같은 변수 사용 불가
const{a,b} = obj
console.log(a);
console.log(b);
// console.log(e);

console.log('======');

const{c} = obj
//초기화도 가능하다 - 구조분해 할당시, 
const { e = 5} = obj;
const { y = 5} = obj;
console.log(c);
console.log(e);
console.log(y);

const arr=[1,2,3,4,5]
const [i,j,...rest]=arr
const [i2,j2,...abc]=arr 

console.log(i);
console.log(j);
console.log(rest);



//false   0, null, 

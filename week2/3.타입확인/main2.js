//Nullish
//널 병합 연산자 (??) 는 왼쪽 피연산자가 null 또는 undefined일 때 오른쪽 피연산자를 반환하고, 그렇지 않으면 왼쪽 피연산자를 반환하는 논리 연산자이다.


console.log(null ?? 1);
console.log(undefined ?? 2);  //2
console.log(undefined ?? null);  //null

console.log(null ?? 1 ?? 3);  //1
console.log(true ?? 1 ?? 3);  //
console.log(0 ?? 1 ?? 3);  //



//OR연산자 인 경우
const no = 0

const num = no || 7
console.log(num);


// Nullish 병합 연산자를 이용하면 - 왼쪽 부터 비교하는 것은 OR연산자와 동일
// 그러나 null, undefined는 건너뛰고 나머지 데이터 만나면 처음 만나자 마자 반환한다. 
const num2 = no ?? 7
console.log(num2);  //0





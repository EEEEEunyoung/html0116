//배열 내장함수
//


const colors = ['red','green','blue'];

//toString(): 배열을 문자로 변환
let result = colors.toString()
console.log(typeof result);

//join(): 구분자를 활용해 문자열로 이어붙이기
result = colors.join("+")
console.log(result);

//pop(): 배열의 마지막 요소를 제거 (리턴값으로 잘라낸 요소 반환)
result = colors.pop()
console.log(result); 

//push(): 배열의 끝 부분에 새로운 요소 추가(리턴값으로 배열의 길이 반환)
result = colors.push("yellow")
console.log(result);

//shitf(): 베열의 첫 부분 요소 제거(리턴값으로 잘라낸 요소 반환)
result = colors.shift()
console.log(result);

//unshift(): 배열의 첫 부분에 새로운 요소 추가
result = colors.unshift("potato")
console.log(result);

//splice(삽입위치, 잘라낼 갯수, 추가할 내용)
colors.splice(1, 0, "banana")
console.log(colors);

//concat() : 두 개 배열 합치기 
const color2 = ["cyan", "brown"]
result = colors.concat(color2)
console.log(result)

//slice(): 배열 잘라내기 - 새로운 배열을 만들어서 잘라내기(리액트 CRUD 처리시 )
result = colors.slice(1);
console.log(result);
result = colors.slice(1,-1);
console.log(result);

const result2 = ['Obeject Null']
console.log(result2.slice(8,-1));
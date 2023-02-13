//Array - 구조분해 할당 문법
// 배열요소

const colors=["red","green", "blue"];
console.log(colors);

//arr.forEach(callback(currentvalue[,index[,array]])[,thisArg)
// arrow function 에서 [ES6]는 파라미터가 한개이면 괄호 생략가능함
// arrow function 에서는 실행문이 단일행이면 좌중괄호 우중괄호 생략 가능함
colors.forEach(color=>console.log(color))
colors.forEach(color=>{ //함수의 이름이 없다. - 사용자 호출이 불가함
    console.log(color);
})





// colors.forEach(function(color,index))
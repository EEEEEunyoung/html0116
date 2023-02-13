let colors = ['red','green','blue'];//리터널 이용한 배열선언 및 초기화 

// 콜백함수 - 함수 호출 할 때 인수(파라미터)로 함수가 들어가는 형태 
// arr.forEach(callback(currentvalue[, index[, array]])[, thisArg])
// ES5-반복처리기능만,유사배열도처리해줌, ES6 - 순수배열만 
//이전      
colors.forEach(function(color, index, items){   //펑션안에는 파라미터 3가지가 올 수 있음 index, 배열 생략가능 배열은 다른이름으로 치환도 가능
 console.log(color);  //red
 console.log(index);  //0          1        2
 console.log(items);  //['red','green','blue'] 3번 반복...
});

//이후버전 - react수업 - 데이터 변하면 변하는 것만 렌더링 처리함
colors.forEach((color, index)=>{
    console.log(color);  //red
    console.log(index);  //0          1        2
})
colors.forEach((color)=>{
    console.log(color);  //red
})
console.log('=======================================================');


colors.map(function(color, index, items){   //펑션안에는 파라미터 3가지가 올 수 있음 index, 배열 생략가능 배열은 다른이름으로 치환도 가능
    console.log(color);  //red
    console.log(index);  //0          1        2
    console.log(items);  //['red','green','blue'] 3번 반복...
   });

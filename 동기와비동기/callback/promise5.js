

const goodSearch = () => {
  //resolve 성공시 콜백, reject 함수는 실패 시 콜백
return new Promise((resolve, reject) => {    //고차함수 - 반환으로 함수 
  setTimeout(() => {
    console.log("상품조회");
    resolve();
  }, 2000);
});
};



const cart = () => {
  return new Promise((resolve, reject) => {    //고차함수 - 반환으로 함수 
    setTimeout(() => {
      console.log("카트담기");
      resolve();
    }, 2000);
  });
  };




  const account =()=> {
    return new Promise((resolve, reject) => {    //고차함수 - 반환으로 함수 
      setTimeout(() => {
        console.log("결제하기");
        resolve();
      }, 2000);
    });
    };

  const delivery =()=> console.log("배송하기");
  

  
//goodSearch함수 호출 될 때, 콜백에서 cart함수를 호출하면 
//순서가 보장된다. 


//일급이라    파라미터로 파라미터의 resolve가 카트 전체 함수를 받아서 처리해줌 
goodSearch()
    .then(cart)      // 파라미터로 cart를 넘기면 resolve가 cart 함수 전체를 받아서 처리 
    .then(account)    // account를 넘기면 resolve가 account함수 전체 받아서 처리 
    .then(delivery)   
    .then(()=>console.log("배송완료"));  // 콜백 붙이기

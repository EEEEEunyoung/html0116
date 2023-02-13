

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


//체이닝 
goodSearch()
    .then(()=>cart())
    .then(()=>account())
    .then(()=>delivery())


//콜백(callback) 패턴

const goodSearch = (callback) => {
  setTimeout(() => {
    console.log("상품조회");
  }, 0);
};

const cart = () => console.log("카트담기");

goodSearch();
cart();



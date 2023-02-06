const myHeaders = new Headers();
myHeaders.append("X-Naver-Client-Id", "P0dqIQcSahyZAaB4DrMa");
myHeaders.append("X-Naver-Client-Secret", "bb08fkcWcl");

const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

fetch("https://openapi.naver.com/v1/captcha/nkey?code=0", requestOptions)
    .then(response => response.json())   // .text로 하면 undefined뜸..
    .then(result => {
const imsi = JSON.stringify(result)
console.log(imsi);
console.log(result.key);
      
    })
    .catch(error => console.log('error', error));
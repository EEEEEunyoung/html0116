/*
Express 는 웹 모바일 애플리케이션(하이르디르엠(웹+웹(네이비트)를 위한 일련의 강력한 기능을
유연한 NODE js 우배 애플리케이션 프레임 워크입니다.))
ExpressAPI를 이용하면 자유롭게 활용할 수 있는 수많은 HTTP 유틸리티 메소드 및 미들웨어를 통해
쉽고 빠르게 강력한 API를 작성 할 수 있습니다. 
*/
const express = require('express');   //웹어플리케이션을 위한 프레임 워크 선언함
//선언하면 프레임워크가 제공하는 API를 누릴 수 있다. 그럴 때 nodejs에서는 require 함수를 사용함
//리액트에서는 import가 제공됨 
// <script type="module"></script> 지원하게 되면서 넷플릭스가 서버사이드를 노드제이에스 기반
const app = express();
//네이버 서버에서 발급한 고유 아이디값 - 회우너가입이 되어 있고, 개발자센터에서 어플리케이션을 등록한 자 
const client_id = 'P0dqIQcSahyZAaB4DrMa';//개발자센터에서 발급받은 Client ID
const client_secret = 'bb08fkcWcl'; //개발자센터에서 발급받은 Client Secret
const code = "0";
let key;
app.get('/captcha/nkey', function (req, res) {
    //네이버 서버가 제안하는 url주소 - 키 값을 받아와야 함 (인증과정)
   const api_url = 'https://openapi.naver.com/v1/captcha/nkey?code=' + code;
   //네이버가 제공하는 URL 주소로 네이버 서버에 요청을 해야 하니까...
   //npm i -g request     // npm i request   
   const request = require('request');
   const options = {
       url: api_url,
       headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
    };
   request.get(options, function (error, response, body) {
     if (!error && response.statusCode == 200) {
       res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
    //    res.end(body);
       key=body.substring(8,24)
       console.log(key);
     } else {
       res.status(response.statusCode).end();
       console.log('error = ' + response.statusCode);
     }
   });
 });
 app.listen(3000, function () {
   console.log('http://127.0.0.1:3000/captcha/nkey app listening on port 3000!');
 });



 /* REST API
 우리가 하고싶은 작업에 따라 다른 메소드로 요청
 
 HTTP 메소드 수단으로 이용
 GET - 데이터 조회
 POST - 데이터 등록 및 전송
 PUT - 데이터 수정
 DELETE - 데이터 삭제 */
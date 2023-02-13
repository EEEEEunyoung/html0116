//참 거짓
//1) false
//2) 0    - 0이 아닌건 다 거짓  {}:Object,  []:Array참
//3) null
//4) undefined
//5) NaN
//6) "빈문자열

if(500){
console.log("참");
}

if('0'){       //0은 false 이지만, '0' (문자열)은 참
    console.log("참");
}
if(null){
    console.log("Null도 false")
}


if(undefined){
    console.log("Undefined 도 false")

}else{
    console.log("NaN도 false")
}
if(""){
}else{
    console.log("빈문자열도 도 false")

}
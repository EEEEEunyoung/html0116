import {weatherKey} from "../../apiKEY.js";

const getWeather=(local, callback)=>{
    return new Promise((resolve, reject)=>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?appid=${weatherKey}&q=${local}&units=metric`)
        .then((response)=>response.json())
    .then((response)=>{
        console.log(response);
    resolve();
    });
});
};




//insert here

getWeather("seoul").then(()=>{
    console.log('=======================서울 날씨 가져오기====================');
}).then(()=>{
    console.log('=======================부산 날씨 가져오기====================');
    return getWeather("busan");

}).then(()=>{
    console.log('=======================인천 날씨 가져오기====================');
    return getWeather("incheon");
})
 

console.log('===========================짤짤========================');
console.log('===========================짤짤=======================');
console.log('===========================짤짤=======================');

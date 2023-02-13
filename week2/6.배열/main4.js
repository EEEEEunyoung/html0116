//Array - 구조분해 할당 문법
// 배열요소

const colors=["red","green", "blue"];
const copy = []

//이전 방식 
for(let i = 0; i <colors.length;i++){
copy.push(colors[i])
console.log(`copy[${i}]`);
}



//이후 방식 
colors.forEach(function(color){
    copy.push(color)
   console.log(`${copy}`);
});



['red','green','blue'].forEach(color=>{
copy.push(color)
});
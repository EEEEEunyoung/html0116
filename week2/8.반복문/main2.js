// for in  for of 
let color = ['red','green','blue']//리터널 이용한 배열선언 및 초기화 

for(color in colors){
    console.log(color, ',color:',colors[color]);
} 
for(color of colors){
    console.log('color:'+ color);
} 

let items = [
{ id: 1, name: "벤치프레스", count: 0 },
{ id: 2, name: "랫풀다운", count: 0 },
{ id: 3, name: "스쿼트", count: 0 },
];

for(let item of items){
    console.log(item.id+item.name+item.count); //다르게 출력이 됐나보지 ? 
} 

/*const stu = {
    name : "남웅식",
    age : 20,
    address : '서울'
}

for(let key in stu){
    console.log(key+","+stu[kry]);
}*/

/*연습문제로 workout*/ 
let items = [
    { id: 1, name: "벤치프레스", count: 0 },
    { id: 2, name: "렛풀다운", count: 0 },
    { id: 3, name: "스쿼트", count: 0 },
];


//운동제목 추가하기 - ES6(ECMAScript2016) - arrow function
const handleAdd = () => {
const workouts = [...itmes,{id:items.length+1,name:undefined,count:0}]
console.log(workouts);
console.log(items);
}



const handleDelete = (id) => {
const workouts = items.filter(item=>item.id !=id);
console.log(workouts);
items=[...workouts]

};

// handleDelete(1)
console.log(items);







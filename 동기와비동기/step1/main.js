const hap=(x, y)=>{
    setTimeout(()=>{
        return x+y
    },3000)
}

const x = hap(100, 200)
const y = x

console.log(y);


//맞춰가는게 - 동기  
// 안맞는거- 비동기
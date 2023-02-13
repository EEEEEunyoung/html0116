if(true){
    console.log(this);
}

const btn = document.querySelector('button')

btn.addEventListener('click',function(e){
    console.log(this);
})

btn.addEventListener('click',e=>{
    console.log(this);
})
  


8시 40분 즈음
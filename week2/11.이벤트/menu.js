const btns = document.querySelectorAll('.list li') //array

for(let i = 0;i<btns.length;i++){
    btns[i].addEventListener('click', function(e){
console.log(e.target);
    })
//인자가 1개이면 괄호 생략 가능
btns[i].addEventListener('click', (e)=>{
    console.log(e.target);
})
}

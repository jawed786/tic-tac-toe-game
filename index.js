

let gameover=false;

let turn='X';

//function to change turn
const changeturn=()=>{
    return turn==='X'? '0':'X';
}

//function to check win
const checkwin=()=>{
    let boxtext=document.getElementsByClassName('boxtext');
       console.log('checkwin')
      let wins=[
                [0,1,2],
                [3,4,5],
                [6,7,8],
                [0,3,6],
                [1,4,7],
                [2,5,8],
                [0,4,8],
                [2,4,6],]

        wins.forEach(e=>{
            if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[1]].innerText===boxtext[e[2]].innerText) && (boxtext[e[0]].innerText!=='')){
                document.querySelector('.info').innerText=boxtext[e[0]].innerHTML+" wons"
                  gameover=true
            }
        })
}

//game logic

let boxes=document.getElementsByClassName('box')

  
    Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.boxtext');
     element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn;
            turn=changeturn();
            checkwin()
            if(!gameover){
                document.getElementsByClassName('info')[0].innerText='turn for  ' + turn
            }
        }
     })
    
})

//reset logic


 reset.addEventListener('click',()=>{
   let allbox= document.querySelectorAll('.boxtext')
   Array.from(allbox).forEach(element=>{
    element.innerHTML=''

   })
   gameover=false
   turn='X'
   document.getElementsByClassName('info')[0].innerText='turn for  ' + turn
 })

 
 
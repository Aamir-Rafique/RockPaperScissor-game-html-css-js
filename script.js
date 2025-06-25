
let rockElementUser=document.getElementById('rock');
let paperElementUser=document.getElementById('paper');
let scissorElementUser=document.getElementById('scissor');
let result=document.getElementById('result');

let compChoice=document.getElementById('compChoice');

let comp;
let user;

 let scoreElementUser=document.getElementById('scoreUser');
 let scoreElementComputer=document.getElementById('scoreComputer');

 let scoreUser=0;
 let scoreComputer=0;
 
 rockElementUser.onclick=()=>{
     user="rock";
     upadatingStatus();
    }
    paperElementUser.onclick=()=>{
        user="paper";
        upadatingStatus();
    }
    scissorElementUser.onclick=()=>{
        user="scissor";
        upadatingStatus();
    }
    
    
    
    function upadatingStatus(){
        let random=Math.floor(Math.random()*100+1);
        if(random>=0&&random<=33)
        comp="rock";
    else if(random>33&&random<=66)
    comp="paper";
else
{comp="scissor";}

compChoice.innerHTML=comp;

    if(comp==="rock"&&user==="paper"){
        result.innerHTML="You won. Paper beats rock!";
        scoreUser++;
        scoreElementUser.innerHTML=scoreUser;
    }
    else if(comp==="paper"&&user==="rock"){
        result.innerHTML="You lost. Paper beats rock!";
        scoreComputer++;
        scoreElementComputer.innerHTML=scoreComputer;
    }
    else if(comp==="paper"&&user==="scissor"){
        result.innerHTML="You won. scissor beats paper!";
        scoreUser++;
        scoreElementUser.innerHTML=scoreUser;
    }
    else if(comp==="scissor"&&user==="paper"){
        result.innerHTML="You lost. scissor beats paper!";
        scoreComputer++;
        scoreElementComputer.innerHTML=scoreComputer;
    }
    else if(comp==="scissor"&&user==="rock"){
        result.innerHTML="You won. rock beats scissor!";
        scoreElementUser.innerHTML=scoreUser;
        scoreUser++;
    }
    else if(comp==="rock"&&user==="scissor"){
        result.innerHTML="You lost. rock beats scissor!";
        scoreComputer++;
        scoreElementComputer.innerHTML=scoreComputer;
    }
    else{
        result.innerHTML="It was a Draw";
    }
}


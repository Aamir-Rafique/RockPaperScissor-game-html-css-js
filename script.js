
let rockElementUser = document.getElementById('rock');
let paperElementUser = document.getElementById('paper');
let scissorElementUser = document.getElementById('scissor');
let result = document.getElementById('result');

let compChoice = document.getElementById('compChoice');

let comp;
let user;

let scoreElementUser = document.getElementById('scoreUser');
let scoreElementComputer = document.getElementById('scoreComputer');

let scoreUser = 0;
let scoreComputer = 0;

rockElementUser.onclick = () => {
    user = "rock";
    upadatingStatus();
}
paperElementUser.onclick = () => {
    user = "paper";
    upadatingStatus();
}
scissorElementUser.onclick = () => {
    user = "scissor";
    upadatingStatus();
}



function upadatingStatus() {
    let random = Math.floor(Math.random() * 100 + 1);
    if (random >= 0 && random <= 33) {
        comp = "rock";
        compChoice.innerText = "👊 Rock";
    }
    else if (random > 33 && random <= 66) {
        comp = "paper";
        compChoice.innerText = "👊 Paper";
    }
    else {
        comp = "scissor";
        compChoice.innerText = "✌ Scissor";
    }


    if (comp === "rock" && user === "paper") {
        result.style.backgroundColor = 'springgreen';
        result.innerText = "You won. Paper beats rock!";
        scoreUser++;
        scoreElementUser.innerText = scoreUser;
    }
    else if (comp === "paper" && user === "rock") {
        result.style.backgroundColor = 'red';
        result.innerText = "You lost. Paper beats rock!";
        scoreComputer++;
        scoreElementComputer.innerText = scoreComputer;
    }
    else if (comp === "paper" && user === "scissor") {
        result.style.backgroundColor = 'springgreen';
        result.innerText = "You won. scissor beats paper!";
        scoreUser++;
        scoreElementUser.innerText = scoreUser;
    }
    else if (comp === "scissor" && user === "paper") {
        result.style.backgroundColor = 'red';
        result.innerText = "You lost. scissor beats paper!";
        scoreComputer++;
        scoreElementComputer.innerText = scoreComputer;
    }
    else if (comp === "scissor" && user === "rock") {
        result.style.backgroundColor = 'springgreen';
        result.innerText = "You won. rock beats scissor!";
        scoreElementUser.innerText = scoreUser;
        scoreUser++;
    }
    else if (comp === "rock" && user === "scissor") {
        result.style.backgroundColor = 'red';
        result.innerText = "You lost. rock beats scissor!";
        scoreComputer++;
        scoreElementComputer.innerText = scoreComputer;
    }
    else {
        result.innerText = "It was a Draw";
        result.style.backgroundColor='darkblue  ';
    }
}


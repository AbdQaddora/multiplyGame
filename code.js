let time = 30;
let currentAnswer = 0;
let x = 0;
let y = 0;
let timeOut = false;

function timer() {
    time--;
    document.getElementById("time").innerHTML = time;
    if(time <= 0 ){
        timeOut = true;
        check();
    }
}

function Ques() {
    x = Math.floor(Math.random() * 4 + 2);
    y = Math.floor(Math.random() * 8 + 2);
    var Question = " " + x + " x " + y + " =";
    currentAnswer = x*y;
    document.getElementById("Question").innerHTML = Question;
}

setInterval(timer, 1000);
setTimeout(Ques, 0)

function check() {
    var answer1 =document.getElementById("answer").value;
    if (answer1 == currentAnswer ) {
        document.getElementById("QuestionAndAnswer").innerHTML =  " " + x + " * " + y + " = " + currentAnswer;
        document.getElementById("true").style.display = "block";
        document.getElementById("true").style.color = "#39ff14";
        document.getElementById("main").style.display = "none";
        setTimeout(newQues, 3500)
    }else if(answer1 != currentAnswer || timeOut){
        document.getElementById("QuestionAndAnswer2").innerHTML =  " " + x + " * " + y + " = " + currentAnswer;
        document.getElementById("false").style.display = "block";
        document.getElementById("false").style.color = " #ff073a";
        document.getElementById("main").style.display = "none";
        setTimeout(newQues, 3500)
    }
}

function newQues(){
    Ques() ;
    time = 31;
    timer();
    document.getElementById("main").style.display = "block";
    document.getElementById("true").style.display = "none";
    document.getElementById("false").style.display = "none";
    timeOut = false;
    document.getElementById("answer").value = "";
}
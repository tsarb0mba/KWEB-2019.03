let max = 25;	//버튼의 총 개수
let sec = 0;	//게임 진행 시간
let current = 1;	//현재 찾아야 할 번호
let flag = false;	//판이 다 섞였는지를 체크하는 변수
let scoreBoard = []; // 최고 
let time_switch=1;
let score=0;
var score_list=new Array();
let timer = setInterval(start_timer,1000);
hall=document.getElementById("hall");

// 타이머를 시작하는 함수

function start_timer(){
    if(time_switch===1){
        document.getElementById("time").innerHTML=sec;
        sec++;
    }
}

function stop_timer(){
        clearInterval(timer);
        alert("clear!");
        score_sec=sec;
        sort(score_sec);
}


/*버튼 만들고 클릭이벤트 추가함수*/
window.onload=function init(){

    let board = document.getElementById("board");

    /*max개의 버튼을 만드는 for문*/
    for(let i=1;i<=max;i++){
        board.innerHTML += "<input type='button' value='"+i+"' class='btn'></input>";
        if(i%5 === 0)
            board.innerHTML += "<br>";	//버튼 5개 생성시 줄 바꿈
    }

    /*만들어진 버튼에 클릭 이벤트 추가*/
    let btns = document.getElementsByClassName("btn");
    for(let i=0;i<max;i++) {
        var change=Math.floor(Math.random() * 25) + 1;
        swap(i,change);

        btns[i].addEventListener("click", function(event){
            btnClick(event.target);	//인자로 현재 눌러진 버튼을 넘겨주는 btnClick함수 호출
        });
    }

    time_switch=1;
    start_timer();
}

function swap(index1,index2){
    let btns=document.getElementsByClassName("btn");
    var swap=btns[index1].value;
    btns[index1].value=btns[index2].value;
    btns[index2].value=swap;
}



function btnClick(btn){
    /*찾아야 하는 버튼을 제대로 클릭했을시 동작*/
    if(parseInt(btn.value) === current){//
        document.getElementById("current").innerHTML=current;
        btn.value = " ";
        btn.style.backgroundColor = "#CCC";

        /*만약 현재 찾아야 하는 숫자가 마지막 숫자였다면 게임 클리어*/
        if(current === 25){
            stop_timer();
        }

        /*그 외엔 current값 증가시켜주고 표시*/
        else{
            current++;
        }
    }
}


/*
LeaderBoard에 점수를 추가하는 함수
*/
function leader_board(score_list) {
    for(let i=0;i<=score;i++){
        if(i==0)
            hall.innerHTML="<input type='text' value='"+(i+1)+"위     "+score_list[i]+"초'></input><br>";
         else 
            hall.innerHTML+="<input type='text' value='"+(i+1)+"위     "+score_list[i]+"초'></input><br>";
    }
}

function sort(new_score_sec){
    score_list[score]=new_score_sec;
    score_list.sort(function(a, b) {
        return a - b;});
    leader_board(score_list);
    score++;
}

function reset(){
    sec=0;
    document.getElementById("time").innerHTML=sec;

    current=1;
    document.getElementById("current").innerHTML=current;
    
    let btns=document.getElementsByClassName("btn");
    for(let i=0;i<max;i++) {
        btns[i].style.backgroundColor = "#ffffff";
        btns[i].value=i+1;
    }
    for(let i=0;i<max;i++){
        var change=Math.floor(Math.random() * 25) + 1;
        swap(i,change);
    }
    
    
    timer = setInterval(start_timer,1000);
    time_switch=1;
    start_timer();
}
  
  
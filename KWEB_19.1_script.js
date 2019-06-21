let max = 25;	//버튼의 총 개수
let sec = 0;	//게임 진행 시간
let current = 1;	//현재 찾아야 할 번호
let flag = false;	//판이 다 섞였는지를 체크하는 변수
let scoreBoard = []; // 최고 
let timer = setInterval(start_timer,1000); // 타이머
let time_switch=1;
let score=0;
// 타이머를 시작하는 함수

function start_timer(){
    if(time_switch===1){
        document.getElementById("time").innerHTML=sec;
        sec++;
    }
    else if(time_switch===0){
        score_sec=sec;
        score++;
        
    }
}

function stop_timer(){
        time_switch=0;
        alert(score+"위"+socre_sec+"second");
        sec=0;  
}

/*main 함수*/
function main(){
    init();	//처음에 판을 초기화
    shuffle(25,0,0);	//총 25번 shuffle
}

/*버튼 만들고 클릭이벤트 추가함수*/
function init(){
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

    start_timer();
}

function swap(index1,index2){
    let btns=document.getElementsByClassName("btn");
    var swap=btns[index1].value;
    btns[index1].value=btns[index2].value;
    btns[index2].value=swap;
}
function reset() {
    sec=0;
;
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
            sec=0; 
            time_switch=1;
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
function leaderBoard(value) {
    // 코드를 완성하세요.
}
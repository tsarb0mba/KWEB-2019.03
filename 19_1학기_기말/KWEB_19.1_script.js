let max = 25;	//버튼의 총 개수
let sec = 0;	//게임 진행 시간
let current = 1;	//현재 찾아야 할 번호
let flag = false;	//판이 다 섞였는지를 체크하는 변수
let scoreBoard = []; // 최고 
let timer = setInterval(start_timer,1000); // 타이머
let time_switch=1;
// 타이머를 시작하는 함수

function start_timer(){
    if(time_switch===1){
        document.getElementById("time").innerHTML=sec;
        sec++;
    }
    else if(time_switch===0){
        stop_timer();
        sec=0;
    }
}

function stop_timer(){
        clearIntervar(timer);
}

/*main 함수*/
window.onload = function main(){
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
        btns[i].addEventListener("click", function(event){
            btnClick(event.target);	//인자로 현재 눌러진 버튼을 넘겨주는 btnClick함수 호출
        });
    }

    start_timer();
}

function reset() {
    sec=0;
}

/*버튼 클릭 이벤트 핸들러*/
function btnClick(btn){
    /*찾아야 하는 버튼을 제대로 클릭했을시 동작*/
    if(parseInt(btn.value) === current){
        btn.value = " ";
        btn.style.backgroundColor = "#CCC";

        /*만약 현재 찾아야 하는 숫자가 마지막 숫자였다면 게임 클리어*/
        if(current === max){
            // 코드를 완성하세요.
        }

        /*그 외엔 current값 증가시켜주고 표시*/
        else{
            // 코드를 완성하세요.
        }
    }
}

/*
두 버튼의 값을 바꾸는 함수
prev1, prev2 : 이전에 섞었던 두 button의 index
*/
function shuffle(no_of_random_mix,prev1,prev2){
    let btns = document.getElementsByClassName("btn");

    /* red로 바꿨던 button들 다시 하얗게 바꿔준다. */
    btns[prev1].style.backgroundColor = "white";
    btns[prev2].style.backgroundColor = "white";

    /*반복 횟수 남아있으면 shuffle*/
    if(no_of_random_mix>0){
        // 코드를 완성하세요.

        /*SWAP한 두 버튼 표시*/
        btns[index1].style.backgroundColor = "red";
        btns[index2].style.backgroundColor = "red";

        /*반복횟수 하나 줄인다음 shuffle 재귀 호출*/
        no_of_random_mix--;
        setTimeout(function(){
            shuffle(no_of_random_mix,index1, index2);
        },100);
    }

    else{
        // 코드를 완성하세요.
    }
}

/*
LeaderBoard에 점수를 추가하는 함수
*/
function leaderBoard(value) {
    // 코드를 완성하세요.
}
player_1_name = localStorage.getItem("player_1_name");
player_2_name = localStorage.getItem("player_2_name");
player_1_score=0;
player_2_score=0;
document.getElementById("player_1_name").innerHTML=player_1_name+":";
document.getElementById("player_2_name").innerHTML=player_2_name+":";
document.getElementById("player_1_score").innerHTML=player_1_score;
document.getElementById("player_2_score").innerHTML=player_2_score;
function send(){
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    actualanwser=parseInt(number1)*parseInt(number2);

    question_number="<h4>"+number1+"X"+number2+"</h4>";
    input_box="<br>Answer:<input type='text' id='input_check_box'>";
    check_button="<br><br><button class='btn btn_info' onclick='check()'>Check</button>";
    row=question_number+input_box+check_button;
    document.getElementById("output").innerHTML=row;
}


question_turn="player1";
anwser_turn="player2";
function check(){
get_anwser=document.getElementById("input_check_box").value;
if (get_anwser == actualanwser) {
    if (anwser_turn == "player1") {
        update_player_1_score=player_1_score+1;
        document.getElementById("player_1_score").innerHTML= update_player_1_score;
    }
    else{
    update_player_2_score=player_2_score+1;
    document.getElementById("player_2_score").innerHTML= update_player_2_score;
    }
}
if (question_turn == "player1") {
    question_turn="player2";
    document.getElementById("player_question").innerHTML = "Question turn : "+player_2_name;
}
else{
    question_turn="player1";
    document.getElementById("player_question").innerHTML = "Question turn : "+player_1_name;
}
if (anwser_turn == "player1") {
    anwser_turn="player2";
    document.getElementById("player_answer").innerHTML = "Answer turn : "+player_2_name;
}
else{
    anwser_turn="player1";
    document.getElementById("player_answer").innerHTML = "Answer turn : "+player_1_name;
}
document.getElementById("output").innerHTML="";
}

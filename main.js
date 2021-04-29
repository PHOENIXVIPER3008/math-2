function addUser() {
    if (document.getElementById("player1_name_input").value == "" || document.getElementById("player2_name_input").value == "") {
        document.getElementById("aud").play();
    } else {
        Player1_name = document.getElementById("player1_name_input").value;
        Player2_name = document.getElementById("player2_name_input").value;
        localStorage.setItem("Player1_Name", Player1_name);
        localStorage.setItem("Player2_Name", Player2_name);
        document.getElementById("player1_name_input").value = "";
        document.getElementById("player2_name_input").value = "";
        window.location = "index2.html";
    }
}
player1_name = localStorage.getItem("Player1_Name");
player2_name = localStorage.getItem("Player2_Name");
player1_score = 0;
player2_score = 0;
document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";
document.getElementById("player1_score").innerHTML = " " + player1_score;
document.getElementById("player2_score").innerHTML = " " + player2_score;
document.getElementById("player_quest").innerHTML = "question Turn - " + player1_name;
document.getElementById("player_ans").innerHTML = "Answer Turn - " + player2_name;

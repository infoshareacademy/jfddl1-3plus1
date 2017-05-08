/**
 * Created by Rafal on 2017-05-06.
 */
var question = [
    ["<h4>1. Jaka to marka?</h4>", "BMW", "AUDI", "ROVER", "KIA", 4,"<img class='img-responsive' src='quiz_photos/photo_1-min.jpeg'>"],
    ["<h4>2. Jaka to marka?</h4>", "Volvo", "AUDI", "BMW", "volkswagen", 3,"<img class='img-responsive' src='quiz_photos/photo_2-min.jpeg'>"],
    ["<h4>3. Jaka to marka?</h4>", "ASTON", "AUDI", "ROVER", "PEUGEOT", 1,"<img class='img-responsive' src='quiz_photos/photo_3-min.jpeg'>"],
    ["<h4>4. Jaka to marka?</h4>", "Renault", "AUDI", "ROVER", "PEUGEOT", 2,"<img class='img-responsive' src='quiz_photos/photo_4-min.jpeg'>"],
    ["<h4>5. Jaka to marka?</h4>", "FIAT", "AUDI", "ROVER", "FORD", 1,"<img class='img-responsive' src='quiz_photos/photo_5-min.jpeg'>"]
];


var score = 0;
var quesNum = 0;
var level=document.getElementById("progress");

function displayQuiz(){

    var quest = document.getElementById("pytanie");
    quest.innerHTML = question[quesNum][0];
    for(var j=1; j<=4; j++){
        var opt = document.getElementById("choice"+j);
        opt.innerHTML = question[quesNum][j];
    }
    var photo=document.getElementById("zdjecia");
    photo.innerHTML=question[quesNum][6];


    level.innerHTML="pytanie numer: "+(quesNum+1)+" z "+question.length;
    //TODO zrobic wyskakujace okno z opcja ponownego zagrania lub zakonczenia gry
}

//---------------------------------Zliczanie punktow
function validat(item){

    if(item === "choice"+question[quesNum][5]){
        score++;
    }
    if(item === "btn"+question[quesNum][5]){
        score++;
    }
    if(quesNum === 4){
        var mainBody = document.getElementById("wynik");
        mainBody.innerHTML = "<h1>"+"Twoj wynik to:"+ score+"/5"+"</h1>";
    }
    quesNum++;
}

//---------------------------------mechanika przycisków

$(document).ready(function () {
    $(".Odpowiedz").click(listenMe);
    displayQuiz();
});

function listenMe(e) {
     var clickedItem = $(e.target).children().attr("id");
     validat(clickedItem);

    e.stopPropagation();
    if(quesNum < 5){
        displayQuiz();}
}



// the randomNumber is 19-120, which should display at the begining of the game.
   var randomNumber=Math.floor(Math.random()*101+19);
console.log(randomNumber);


 //attaching random number to the random-Number id in the html, so it can match the value in the js

  $('#random-Number').text(randomNumber);

//This will generate random number for each crystal image. 
//each random crystal value is 1 -12

var oneCrystal =Math.floor(Math.random()*11+1);
var twoCrystal =Math.floor(Math.random()*11+1);
var threeCrystal =Math.floor(Math.random()*11+1);
var fourCrystal =Math.floor(Math.random()*11+1);

//this is declairing variables for tallies
var yourTotal= 0;
var wins= 0;
var losses= 0;

//this appends wins and losses .
$('#n-wins').text(wins);
$('#n-losses').text(losses);

//reset function
function reset(){
randomNumber=Math.floor(Math.random()*101+19);
console.log(randomNumber);

  $('#random-Number').text(randomNumber);
  oneCrystal =Math.floor(Math.random()*11+1);
 twoCrystal =Math.floor(Math.random()*11+1);
 threeCrystal =Math.floor(Math.random()*11+1);
 fourCrystal =Math.floor(Math.random()*11+1);
 yourTotal=0;
  $('#userFinalTotal').text(yourTotal);


}


//create an alert to show the user win and to display its counter 
//wins add to yourTotal
   function  wow(){
   alert(" yeah! You win!");
  wins++;
    $('#n-wins').text(wins);
    reset();
}

 //losses add to yourTotal
 function loser(){
  alert("you lose");
  losses++;
  $('#n-losses').text(losses);
  reset();

 }

 // clicks for each crystal image

 $('#one-crystal').on('click', function(){

  yourTotal = yourTotal + oneCrystal;
  console.log("new score=" + yourTotal);
  $('#userFinalTotal').text(yourTotal);
 
 //winsandlose condition statement
 if (yourTotal==randomNumber){

 	wow();
 }

else if(yourTotal > randomNumber){

	loser();
}

 });


$('#two-crystal').on('click', function(){

  yourTotal = yourTotal + twoCrystal;
  console.log("new score=" + yourTotal);
  $('#userFinalTotal').text(yourTotal);
 
 
 if (yourTotal==randomNumber){

 	wow();
 }

else if(yourTotal > randomNumber){

	loser();
}

 });



$('#three-crystal').on('click', function(){

  yourTotal = yourTotal + threeCrystal;
  console.log("new score=" + yourTotal);
  $('#userFinalTotal').text(yourTotal);
 
 //winsandlose condition statement
 if (yourTotal==randomNumber){

 	wow();
 }

else if(yourTotal > randomNumber){

	loser();
}

 });


$('#four-crystal').on('click', function(){

  yourTotal = yourTotal + fourCrystal;
  console.log("new score=" + yourTotal);
  $('#userFinalTotal').text(yourTotal);
 
 //winsandlose condition statement
 if (yourTotal==randomNumber){

 	wow();
 }

else if(yourTotal > randomNumber){

	loser();
}

 });








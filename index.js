var randomPicture1 = Math.floor(Math.random() * 3) + 1;
var randomImage1 = "rsp" + randomPicture1 + ".jpg"; 
var randomImageSource1 = "images/" + randomImage1; 
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);
//--------------------------------------------------------------------------------
var randomPicture2 = Math.floor(Math.random() * 3) + 1;
var randomImage2 = "rsp" + randomPicture2 + ".jpg"; 
var randomImageSource2 = "images/" + randomImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);
//--------------------------------------------------------------------------------
var rock = "rsp1.jpg";
var paper = "rsp2.jpg";
var scissor = "rsp3.jpg";
//--------------------------------------------------------------------------------
//ROCK WINNER
if (randomImage1 === rock && randomImage2 === scissor) {
  document.querySelector("h1").innerHTML = "Rock Wins";
  document.querySelector('.p1').innerHTML = "😛 <strong>Player 1 Wins</strong>";
  document.querySelector('.p2').innerHTML = "🤬 <strike>Player 2</strike>";
 }
else if (randomImage1 === scissor && randomImage2 === rock) {
  document.querySelector("h1").innerHTML = "Rock Wins";
  document.querySelector('.p1').innerHTML = "🤬 <strike>Player 1</strike>";
  document.querySelector('.p2').innerHTML = "😛 <strong>Player 2 Wins</strong>";
 }
//--------------------------------------------------------------------------------
 //PAPER WINNER
 else if (randomImage1 === paper && randomImage2 === rock) {
  document.querySelector("h1").innerHTML = "Paper Wins";
  document.querySelector('.p1').innerHTML = "😛 <strong>Player 1 Wins</strong>";
  document.querySelector('.p2').innerHTML = "🤬 <strike>Player 2</strike>";
 }
 else if (randomImage1 === rock && randomImage2 === paper) {
  document.querySelector("h1").innerHTML = "Paper Wins";
  document.querySelector('.p1').innerHTML = "🤬 <strike>Player 1</strike>";
  document.querySelector('.p2').innerHTML = "😛 <strong>Player 2 Wins</strong>";
 }
//--------------------------------------------------------------------------------
//SCISSOR WINNER
  else if (randomImage1 === scissor && randomImage2 === paper) {
    document.querySelector("h1").innerHTML = "Scissor Wins";
    document.querySelector('.p1').innerHTML = "😛 <strong>Player 1 Wins</strong>";
    document.querySelector('.p2').innerHTML = "🤬 <strike>PLAYER 2</strike>";
}
else if (randomImage1 === paper && randomImage2 === scissor) {
    document.querySelector("h1").innerHTML = "Scissor Wins";
    document.querySelector('.p1').innerHTML = "🤬 <strike>Player 1</strike>";
    document.querySelector('.p2').innerHTML = "😛 <strong>Player 2 Wins!</strong>";
}
//--------------------------------------------------------------------------------
//DRAW
 else {
  document.querySelector('h1').innerHTML = "Try Again"
  document.querySelector('.p1').innerHTML = "🧑 <strong>Player 1</strong>";
  document.querySelector('.p2').innerHTML = "🧒 <strong>Player 2</strong>";
}; 

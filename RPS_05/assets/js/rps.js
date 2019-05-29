/*
*Global HTML variables
*/
var rpsJumbotron=document.getElementById("rps-jumbotron");
var rpsCardGroup=document.getElementById("rps-card-group");
var winText=document.getElementById("winCount");
var lossText=document.getElementById("lossCount");
var tieText=document.getElementById("tieCount");
var rpsResetButton=document.getElementById("reset-button");
var userImg=document.getElementById("user-img");
var computerImg=document.getElementById("computer-img");
/*
*Other Global variables
*/
var wins=0;
var losses=0;
var ties=0;

function gameStart(e){
/*
 * check if the user pressed either the 'r','p' or the 's' key
 *if they do log the key and hide the jumbotron and show the gameboard
 * Call the computerPicker function and store the value it returens in
 * the computerGuess variable and log it to the console
 * call the updatePicture function
 */ 
  if(e.key==='r'||e.key==='p'||e.key==='s'){
    console.log('You pressed the ' + e.key + ' key');
    rpsJumbotron.style.display="none";
    rpsCardGroup.style.display="flex";
    var computerGuess=computerPicker();
    // console.log("The Computer choose " + computerGuess);
    var computerPicture=updatePicture(computerGuess);
    computerImg.src=computerPicture;
    userImg.src=updatePicture(e.key);
    // console.log("The Computer choose " + userImg.scr);
    updateScore(computerGuess, e.key);
  /*
   *if they the 'q' key then show the jumbotron again and log the key in a warning 
   *Also hide the gameboard
   *Also reset the scoreboard
   */
  }else if(e.key==='q'){
    console.warn('You pressed the ' + e.key + ' key');
    rpsJumbotron.style.display="block";
    rpsCardGroup.style.display="none";
    initializeScores();
  }
  

}
/*
* fuction that sets win loss and tie values to zero.
*/
function initializeScores(){
  wins=0;
  losses=0;
  ties=0;
  displayScores();
}
/*
* That will update the html values of the scores to the values in the javascript file
*/
function displayScores(){
  winText.textContent=wins;
  lossText.textContent=losses;
  tieText.textContent=ties;
}
/*
* This function will pick a guess for the computer from the available options
* Options are set in an array as 'r', 'p' or 's' for Rock, Paper or Scissors
* we will call Math.random() to pick a number for us between 0 and 1
* It is INCLUSIVE of 0 bot NOT of 1
* We than call Math.floor() on the response from Math.Random() which will give us a whole number 
* which will be the largest integer less than or equal to a given number
*/
function computerPicker(){
  var computerOptions=['r','p','s'];
  var computerChoice=computerOptions[Math.floor(Math.random()*3)] ;
  return computerChoice;
  
}
/*
* Receive a character from either the user or the computer
* check if  the character is either an 'r', a 'p' or an 's'
*And return the appropriate img source
*/
function updatePicture(char){
  console.log("In update picture function "+ char);
  if(char==='r'){
    return 'assets/images/rock.png';
  }else if(char==='p'){
    return 'assets/images/paper.jpg';
  }else if(char==='s'){
    return 'assets/images/scissor.jpg';
  }
}
/*
* Will receive two arguments. first argument is computer guess, second argument is user guess.
* will compare the values and if the user guess beats the copputer, incdrease the wins
* if the user guess does not beat the computer, Increase the loss
* If there is a tie, increase the ties
*/
function updateScore(comp, user){
  if((user==='r' && comp==='s')||
  (user==='p' && comp==='r')||
  (user==='s' && comp==='p')){
    wins++;
  } else if(comp===user){
    ties++;
  } else{
    losses++;
  }
  displayScores();
}
/*
* The gameStart function will be called everytime a user pressed a key.
*/
document.onkeyup=gameStart;
/*
* Add an event listener to our reset button when the user clicks it 
*/
rpsResetButton.addEventListener("click", initializeScores);
/*
* Call this function as the file loads to initialize the scores
*/
initializeScores();

/*
*
*/
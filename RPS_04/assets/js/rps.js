/*
*Global HTML variables
*/
var rpsJumbotron=document.getElementById("rps-jumbotron");
var rpsCardGroup=document.getElementById("rps-card-group");
var winText=document.getElementById("winCount");
var lossText=document.getElementById("lossCount");
var tieText=document.getElementById("tieCount");
var rpsResetButton=document.getElementById("reset-button");
/*
*Other Global variables
*/
var wins=0;
var losses=0;
var ties=0;
/*
 * check if the user pressed either the 'r','p' or the 's' key
 *if they do log the key and hide the jumbotron 
 *if they the 'q' key then show the jumbotron 
 * Any other key should log a message that says 'bad key'
 */ 
function gameStart(e){
  
  if(e.key==='r'||e.key==='p'||e.key==='s'){
    console.log('You pressed the ' + e.key + ' key');
    rpsJumbotron.style.display="none";
    rpsCardGroup.style.display="flex";
  }else if(e.key==='q'){
    console.warn('You pressed the ' + e.key + ' key');
    rpsJumbotron.style.display="block";
    rpsCardGroup.style.display="none";
  }
  else{
    console.error('you pressed the bad key! you should feel bad about it!');
  }

}
/*
* fuction that sets win loss and tie values to zero.
*/
function initializeScores(){
  winText.textContent=wins;
  lossText.textContent=losses;
  tieText.textContent=ties;
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
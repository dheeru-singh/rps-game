/*
*Global variable
*/
var rpsJumbotron=document.getElementById("rps-jumbotron");
var rpsCardGroup=document.getElementById("rps-card-group");

console.log(rpsCardGroup);
/*
* This function will be called everytime a user pressed a key.
*/
document.onkeyup=function(e){
   /*
   * check if the user pressed either the 'r','p' or the 's' key
   *if they do log the key and hide the jumbotron 
   *if they the 'q' key then show the jumbotron 
   * Any other key should log a message that says 'bad key'
   */ 
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
*
*/
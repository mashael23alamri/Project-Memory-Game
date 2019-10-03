
//Store all memory cards inside a variable..
const cards = document.querySelectorAll('.card');
//Create logic to flip the card and set the false ..
let invertedcard = false;
//Create a variable so that no more than two cards are opened during the comparison..
let onlytwocards = false;
//Create two first and second card variables to see if the player clicks on the first or second card..
let cardnumberone ;
let cardnumbertwo;
//Create a variable to set the interval..
var timer = setInterval(counttimer, 1000);
var hour;
var minute;
var seconds;

//Create a variable totalSeconds..
var totalSeconds =0;
//Create a variable myattempts..
let myattempts =0;
//Create a variable to see how many cards are open..
let allcardsareopen =0;

  //Create a function restart..
  function ReStart() {
     //restart timer..
     totalSeconds =0;

     //restart my attemps..
     myattempts =0;
     document.getElementById("attempt").innerHTML = "  My attempts: "+ myattempts ;

     //remove flip from cards..
     removeflipfromcards();
  }

  //Create a function flipcard..
  function flipcard(){
  if(onlytwocards) return;
  if(this === cardnumberone)return;

  this.classList.add('flip');

  if(!invertedcard)
  {
    //The first time the player clicks on the card..
    //I assumed if the first card clicked is correct it is the first card..
    invertedcard = true;
    cardnumberone = this;
 } else{
   //The second time the player clicks on the card..
   //I assumed if the second card clicked is uncorrect it is the second card..
   invertedcard = false;
   cardnumbertwo = this;

   //Call function checkMatchThecards..
   checkMatchThecards();
   }
 }

  //You create a loop and add a listener to each card when you click and call a function flipcard..
  cards.forEach(card => card.addEventListener('click', flipcard));

  //Create a function to check for match or not..
  function checkMatchThecards() {

  //Check that the cards match or not ..
  //The comparison is done using data name for each card..
  //Used getAttribute property to access and compare dta name for the first and second cards..
  //References(https://www.w3schools.com/jsref/met_element_getattribute.asp)..
  if(cardnumberone.getAttribute('data-name') === cardnumbertwo.getAttribute('data-name'))
     {
       //Call function Disable..
       Disable();
          //Each time two cards match the number increases by one..
          allcardsareopen+=1;
          //Condition if the value of the variable allcardsareopen equals 8 calls to a function thefinalresult..
          if(allcardsareopen == 8)
          {
           thefinalresult();
          }

     } else{
       //Call function  DisableTheFlip..
       DisableTheFlip() ;
       //Increase the number of my attempts by one..
       myattempss() ;
  }
}
  //Create a function to disable the card..
  function Disable() {
  //Remove the event from the cards after opening them so they are not clicked again..
  //References(https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_removeeventlistener_crossbrowser)..
  cardnumberone.removeEventListener('click' , flipcard);
  cardnumbertwo.removeEventListener('click' , flipcard);

}
  //Create a function to return the card to the primary face..
  function DisableTheFlip() {
      //Set the variable onlytwocards to true so that the player can choose two more cards and compare again..
      onlytwocards = true;
      //Return the card upside down if it does not match..
      setTimeout(() => {
      cardnumberone.classList.remove('flip');
      cardnumbertwo.classList.remove('flip');
      //Again set to false until only two cards are opened for comparison..
      onlytwocards = false;

    },800);
   }

  //Create a shuffle function ، Until the cards are changed each time the player presses a button..
  // or after the page loads again..
  (function shuffle() {
    //Use forEach until passes on each card..
    cards.forEach (card => {
      //Use the famous random equation and assign it to the variable randomcards..
      //Use floor even give integers free of decimal points..
      //References(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)..
      let randomcards = Math.floor(Math.random()*10);
      //Change the order of cards to random..
      card.style.order = randomcards;
   });
})();

  //Create a function to calculate time..
  function counttimer() {
     ++totalSeconds;
      hour = Math.floor(totalSeconds /3600);
      minute = Math.floor((totalSeconds - hour*3600)/60);
      seconds = totalSeconds - (hour*3600 + minute*60);
     //Using getElementById time mode in page index and time format..
     document.getElementById("timer").innerHTML = "⏰ "+ hour + ":" + minute + ":" + seconds;
 }

  //Create a function to Player attempts..
  function myattempss() {
     myattempts+=1;
     document.getElementById("attempt").innerHTML = "  My attempts: "+ myattempts ;
    }

  //Create a function to Remove all cards..
  function removeflipfromcards() {
      cards.forEach(card =>{
        card.className="card";
      });

  }
  //Dialog function showing the final score of the player..
  function thefinalresult() {
    //dialog ..
    let dialog = document.getElementById("dialog1");

    //Get the final time..
    let finaltime = document.getElementById("timer").innerHTML ;
    document.getElementById("time").innerHTML = finaltime;

    //Get the final number of attempts
    document.getElementById("attemps").innerHTML = myattempts;

    //Get the number of stars..
    if(myattempts <= 5)
    {
      document.getElementById("stars").innerHTML = " 🌟🌟🌟";
    }
    if(myattempts > 5 &&  myattempts <= 10)
    {
      document.getElementById("stars").innerHTML = " 🌟🌟";

    }
    if (myattempts > 10 )
    {
      document.getElementById("stars").innerHTML = " 🌟";
    }

    //Show Dialog..
    dialog.showModal();

   }
   //Create the play function again..
   function playagain() {
     //Reload the current page..
    location.reload();

   }

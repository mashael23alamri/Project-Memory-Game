# MemoryGame
Project Memory Game - Udacity
The memory game is based on the strength of the player's concentration, where he tries to match 8 cards as soon as possible, with fewer attempts and more stars.

# How the game works
You should open your browser and upload a index.html file.

# What are the most important things used in the project

1-Bootstrap library until the page responds to all devices (called external link).

2-The cards were created using <img> , so "data-name" was added so that we can compare them using getAttribute them in the JavaScript file.

3-Use a mathematical equation to make the card random when the player replays the game.

4-Use floor even give integers free of decimal points.

```javascript
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

```
# References
- [link to site MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) 
- [link to site w3schools](https://www.w3schools.com/default.asp) 
- [link to  site bootstrap](https://getbootstrap.com/)   



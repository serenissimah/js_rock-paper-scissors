var options = ["rock", "paper", "scissors"];

var userChoice;
var compChoice;

var choices = document.getElementsByClassName("choice");
for(var i = 0; i < choices.length; i++) {
  choices[i].addEventListener("click", function() {
    userChoice = this.id;
    window.alert("You chose " + userChoice);
  
    var totalOptions = options.length;
    var optionIndex = Math.floor((Math.random() * 10) + 1) % totalOptions;
    compChoice = options[optionIndex];
    window.alert("The computer chose " + compChoice);

    comparison(userChoice);
});

  function comparison(userChoice) {
    switch (userChoice) {
      case "rock":
        if (userChoice == "rock" && compChoice == "paper") {
          alert("The computer won. Paper covers rock!");
        } else if (userChoice == "rock" && compChoice == "scissors") {
          alert("You won. Rock crushes scissors!");
        } else {
          alert("Rock vs. Rock! This is a tie!");
        }
      break;
      case "paper":
        if (userChoice == "paper" && compChoice == "rock") {
          alert("You won. Paper covers rock!");
        } else if (userChoice == "paper" && compChoice == "scissors") {
          alert("The computer won. Scissors cuts paper!");
        } else {
          alert("Paper vs. Paper! This is a tie!");
        }
      break;
      case "scissors":
        if (userChoice == "scissors" && compChoice == "rock") {
          alert("Computer won. Rock crushes scissors!");
        } else if (userChoice == "scissors" && compChoice == "paper") {
          alert("You won. Scissors cuts paper!");
        } else {
          alert("Scissors vs. Scissors! This is a tie!");
        }
      break;
      
    }
  }
}

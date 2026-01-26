import * as prompt from "prompt";

prompt.start();

prompt.get(
  {
    name: "userSelection",
    description: "Choose ROCK, PAPER, or SCISSORS",
    required: true
  },
  (err, result) => {
    if (err) {
      console.log("Error occurred");
      return;
    }

    const userSelection = String(result.userSelection).toUpperCase();

    const randomNumber = Math.random();
    let computerSelection: string;

    if (randomNumber <= 0.34) {
      computerSelection = "PAPER";
    } else if (randomNumber <= 0.67) {
      computerSelection = "SCISSORS";
    } else {
      computerSelection = "ROCK";
    }

    console.log("User Selection:", userSelection);
    console.log("Computer Selection:", computerSelection);

    if (userSelection === computerSelection) {
      console.log("It's a tie");
    } else if (
      (userSelection === "ROCK" && computerSelection === "SCISSORS") ||
      (userSelection === "PAPER" && computerSelection === "ROCK") ||
      (userSelection === "SCISSORS" && computerSelection === "PAPER")
    ) {
      console.log("User Wins");
    } else {
      console.log("Computer Wins");
    }
  }
);

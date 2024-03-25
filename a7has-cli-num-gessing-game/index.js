#! /usr/bin/env node
import inquirer from "inquirer";
const rendumNum = Math.floor(Math.random() * 6 + 1);
const userNum = await inquirer.prompt([
    { message: "Please guess a Game Number between ( 1 to 6 )!",
        type: "number",
        name: "userGuessedNumber",
    },
]);
if (userNum.userGuessedNumber === rendumNum) {
    console.log("conguratulation , you Guessed a Right number!");
}
else {
    console.log("You Guess Wrong number please again!");
}

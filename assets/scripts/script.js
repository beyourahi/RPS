function RPS(yourChoice) {
    let humanChoice = yourChoice.id;
    let botChoice = numToChoice(randToInt());
    console.log(`My Choice: ${humanChoice}`);
    console.log(`Computers Choice: ${botChoice}`);

    let result = decideWinner(humanChoice, botChoice);

    let message = finalmessage(result);

    rpsFrontEnd(humanChoice, botChoice, message);
}

function randToInt() {
    return Math.floor(Math.random() * 3);
}

function numToChoice(number) {
    return ["rock", "paper", "scissor"][number];
}

function decideWinner(yourChoice, computerChoice) {
    let rpsDB = {
        rock: { scissor: 1, rock: 0.5, paper: 0 },
        paper: { rock: 1, paper: 0.5, scissor: 0 },
        scissor: { paper: 1, scissor: 0.5, rock: 0 },
    };

    let yourScore = rpsDB[yourChoice][computerChoice];
    let computerScore = rpsDB[computerChoice][yourChoice];

    console.log("Result =>");
    console.log(`\tMy score: ${yourScore}`);
    console.log(`\tComputer score: ${computerScore}`);

    return [yourScore, computerScore];
}

function finalmessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        console.log("You Lost!");
        console.log("\n\n");
        return { message: "You Lost!", color: "red" };
    } else if (yourScore === 0.5) {
        console.log("It's a tie!");
        console.log("\n\n");
        return { message: "It's a tie!", color: "pink" };
    } else {
        console.log("You Won!");
        console.log("\n\n");
        return { message: "You Won!", color: "green" };
    }
}

function rpsFrontEnd(humanImageChoice, BotImageChoice, finalMessage) {
    let imgDB = {
        rock: document.getElementById("rock").src,
        paper: document.getElementById("paper").src,
        scissor: document.getElementById("scissor").src,
    };

    document.getElementById("rock").remove();
    document.getElementById("paper").remove();
    document.getElementById("scissor").remove();

    let humanDiv = document.createElement("div");
    let botDiv = document.createElement("div");
    let messageDiv = document.createElement("div");

    humanDiv.innerHTML = `<img src="${imgDB[humanImageChoice]}" height="150" width="150" style="box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);">`;
    messageDiv.innerHTML = `<h1 style="color: ${finalMessage["color"]}; padding: 30px; font-size: 60px;">${finalMessage["message"]}</h1>`;
    botDiv.innerHTML = `<img src="${imgDB[BotImageChoice]}" height="150" width="150" style="box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);">`;

    document.getElementById("flexBoxRPSid").appendChild(humanDiv);
    document.getElementById("flexBoxRPSid").appendChild(messageDiv);
    document.getElementById("flexBoxRPSid").appendChild(botDiv);
}

function reloadPage() {
    location.reload();
}

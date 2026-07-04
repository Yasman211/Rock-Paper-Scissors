function finaldecision(choice){
    let userResult = userChoice(choice);
    let computerResult = computerChoice();
    let result = decision(userResult, computerResult);
    //let visualize = visualizeResult(result);//
    //console.log(visualize);//
   // document.getElementById("user-choice").src = "https://i.pinimg.com/474x/67/eb/fd/67ebfd32e898b4ec3ae4e59ae33832c8.jpg";
    //document.getElementById("computer-choice").src = "https://i.pinimg.com/474x/0e/3f/1c/0e3f1c7d8b5a4b6a9e2f5d8e4c6f8b9a.jpg";
    //document.getElementById("result").src = "https://i.pinimg.com/474x/2c/3d/4e/2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f.jpg";
    document.getElementById("imageInput21").textContent= userResult
    document.getElementById("imageInput22").textContent= computerResult
    document.getElementById("result").textContent= result
    return result;
   // document.getElementById("counter-user").textContent= (y=m+1)
    //document.getElementById("counter-computer").textContent= ( )
    
}

function visualizeResult(result){
    if (userResult == "Rock") {
        document.getElementById('imageInput').src = "https://i.pinimg.com/474x/67/eb/fd/67ebfd32e898b4ec3ae4e59ae33832c8.jpg";
    }
    else if (userResult == "Paper") {
        document.getElementById('imageInput').src = "https://i.pinimg.com/474x/0e/3f/1c/0e3f1c7d8b5a4b6a9e2f5d8e4c6f8b9a.jpg";
    }
    else if (userResult == "Scissors") {
        document.getElementById('imageInput').src = "https://i.pinimg.com/474x/2c/3d/4e/2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f.jpg";
    }
    if (computerResult == "Rock") {
        document.getElementById('imageInput2').src = "https://i.pinimg.com/474x/67/eb/fd/67ebfd32e898b4ec3ae4e59ae33832c8.jpg";
    }
    else if (computerResult == "Paper") {
        document.getElementById('imageInput2').src = "https://i.pinimg.com/474x/0e/3f/1c/0e3f1c7d8b5a4b6a9e2f5d8e4c6f8b9a.jpg";
    }
    else if (computerResult == "Scissors") {
        document.getElementById('imageInput2').src = "https://i.pinimg.com/474x/2c/3d/4e/2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f.jpg";
    }   
    let vizzedResult = visualizeResult("userResult");
    let vizzedResult2 = visualizeResult("computerResult");
    let vizzedResult3 = visualizeResult("result");
}

function userChoice(choice){
    console.log("User chose: " + choice);
    userResult = choice;
    return choice;
    
}
function computerChoice(){
    options =["Rock", "Paper", "Scissors"];
    let computerChoice = Math.floor(Math.random() * options.length);
    computerResult = options[computerChoice];
    console.log("Computer chose: " + computerResult);
    return computerResult;
    
}
function decision(userResult, computerResult){
    console.log(userResult);
    console.log(computerResult);
    if(userResult==computerResult)
    {
        return "It's a tie!";
    }
    else if(userResult == "Rock" && computerResult == "Paper")
    {
        return "Computer wins!";
    }
    else if(userResult == "Paper" && computerResult == "Scissors")
    {
        return "Computer wins!";
    }
    else if(userResult == "Scissors" && computerResult == "Rock")
    {
        return "Computer wins!";
    }
    else{
        return "You win!";
    }
}
function winCounter(userResult, computerResult){
    console.log(userResult);
    console.log(computerResult);
    
   
    return result;
}
/*var colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)"
]*/
var numOfSquares = 6;
var colors = [];/*generateRandomColors(numOfSquares);*///generateRandomColors(6); *//*
//Reset function will generate the initial colours array So the colours variable above can just be an initialised variable
//Which is just an empty Array
var pickedColor; /*pickColor();*///This can also be an empty variable now because the reset function will set this value
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
/*var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");*/
var	modeButtons = document.querySelectorAll(".mode");
var confettiElement = document.getElementsByTagName("canvas")[0];

init();

function init(){
		setupModeButtons(); //good practice to have a separate function if the function is over 10 lines long
		setupSquaresListeners();
		reset();//This will generate the initial colours array So the colours variable above can just be an initialised variable
				//Which is just an empty Array
}// end of init function 

function confetti( party ) {

    if (party) {

        // turn on the confetti
        confettiElement.style.display = null;


    } else {

        //turn off the confetti
        confettiElement.style.display = "none";
    }

}

function setupModeButtons(){
	//Mode buttons event handlers
		for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");	
		this.textContent === "Easy" ? numOfSquares = 3: numOfSquares = 6;
		/*if(this.textContent === "Easy"){
			numOfSquares = 3;
		}else{
			numOfSquares = 6;
		}*/
		reset();
		// What reset function does, reset function uses the numOfSquares set in the if else statement above 
		//Figure out how many squares to show
		//pick new colours
		//pick a new picked colour
		//Update page to reflect changes
		});
	}
}//end of setupModeButtons

function setupSquaresListeners(){
		//setup Squares
		for(var i = 0; i < squares.length; i++){
		//This line is no longer needed when inside the init function Because the reset function will do this
		//Add initial colours to squares
		/*squares[i].style.backgroundColor = colors[i] */// Using the same counter i to loop through the color array

		//Add click listeners to squares
		squares[i].addEventListener("click", function(){
			//Grab colour of clicked square
		var clickedColor = this.style.backgroundColor;
			//compare colour to pickedColor
			console.log(clickedColor, pickedColor);
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play again!";
				confetti(true);
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			}else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try again.";
			}
		});//end of squares[i] listner
	}//end of for loop
}//end of setupSquaresListeners function

function reset() {
	confetti(false);
	//Generate all new colours
	colors = generateRandomColors(numOfSquares);
	//pick a new random colour from Array
	pickedColor = pickColor();
	//change the colorDisplay to pickedColor
	colorDisplay.textContent = pickedColor;
	//change the colour Of the squares in the page
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
		//If given a background colour this makes sure all the squares are visible first
			 squares[i].style.display = "block";
		//Add new colours to squares
			squares[i].style.backgroundColor = colors[i]; // Using the same counter i to loop through the color array
		}else{
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
	/*resetButton.textContent = "New Colors";*/
	//The line above is the longer version of the line below  
	//but you have to use "this" if it is inside a loop of an event listener 
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
}
/*easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numOfSquares = 3;
	//Generate all new colours
	colors = generateRandomColors(numOfSquares);
	//pick a new random colour from Array
	pickedColor = pickColor();
	//change the colorDisplay to pickedColor
	colorDisplay.textContent = pickedColor;
	//reset try again/correct message
	messageDisplay.textContent = "";
		//change the colour Of the squares in the page
	for(var i = 0; i < squares.length; i++){
		if(i < 3) {
		//Add new colours to squares
			squares[i].style.backgroundColor = colors[i]; // Using the same counter i to loop through the color array
			}
				else{
					squares[i].style.display = "none";
				}
		}
});

hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numOfSquares = 6;
		//Generate all new colours
	colors = generateRandomColors(numOfSquares);
	//pick a new random colour from Array
	pickedColor = pickColor();
	//change the colorDisplay to pickedColor
	colorDisplay.textContent = pickedColor;
	//reset try again/correct message
	messageDisplay.textContent = "";
	//change the colour Of the squares in the page
	for(var i = 0; i < squares.length; i++){
	//Add new colours to squares
	squares[i].style.backgroundColor = colors[i] // Using the same counter i to loop through the color array
	squares[i].style.display = "block";
	}
	h1.style.backgroundColor = "steelblue";squares[i].style.display = "none";
	resetButton.textContent = "New Colors";
});*/

/*colorDisplay.textContent = pickedColor;*/ //This will also be set by reset function inside init function 

resetButton.addEventListener("click", function(){
	reset();
/*	//Generate all new colours
	colors = generateRandomColors(numOfSquares);
	//pick a new random colour from Array
	pickedColor = pickColor();
	//change the colorDisplay to pickedColor
	colorDisplay.textContent = pickedColor;
	//change the colour Of the squares in the page
	for(var i = 0; i < squares.length; i++){
		//Add new colours to squares
		squares[i].style.backgroundColor = colors[i] // Using the same counter i to loop through the color array
	}
	h1.style.backgroundColor = "steelblue";*/
	/*resetButton.textContent = "New Colors";*/
	//The line above is the longer version of the line below  
	//but you have to use "this" if it is inside a loop of an event listener 
/*	this.textContent = "New Colors";
	messageDisplay.textContent = "";*/
});


function changeColors(color){//makes all squares the same colour as the correctly picked square. 
	//loop through all squares 
for(var i = 0; i < squares.length; i++){
	//Change colour to match the correct picked colour.
	squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	//picks a random colour from the colors array
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//Make an array
	var	arr = []
	//add num random numbers to array
	//repeat num times
	for(var i = 0; i < num; i++){
		//Get random colour and push into Array
		arr.push(randomColors());
	}
	//Return that array
	return arr;
}

function randomColors(){
	//Pick a red from 0 to 255
	var r = Math.floor(Math.random() * 256);//add 1 to max if from 0 to max. if from 2 to max it would be eg *256 + 2
	//Pick a green from 0 to 255
	var g = Math.floor(Math.random() * 256);
	//Pick a blue from 0 to 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
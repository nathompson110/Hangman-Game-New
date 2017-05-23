var randomWord=''
var emptyArray = [];
var lettersGuessed=[]
var wins = 0;
var losses = 0;
var guesses = 10;
var myBeach= ["SUNNY","SUNSET","HAMMOCK","OCEAN","RESORT","ISLAND","SAND","PALM TREE","BEACH BALL","WAVES"]
var myImage= ["assets/images/beach.png","assets/images/beach1.jpg","assets/images/beach2.jpg","assets/images/beach3.jpg","assets/images/beaches4.jpg","assets/images/beach5.jpg","assets/images/beaches6.jpg","assets/images/beaches7.jpg","assets/images/beaches8.jpg","assets/images/beaches9.jpg"]
var randomIndex= Math.floor(Math.random()*myBeach.length);
function createWord(){

randomWord = myBeach[randomIndex]

}

function createImage(){

randomImage = myImage[randomIndex]
}

function emptyString() {
for (var i = 0; i < randomWord.length; i++) {
	emptyArray.push("___ ");
}
}
function blankSpace () {
	for (var i = 0; i < randomWord.length; i++) {
		if (randomWord[i]===" ") { 
			emptyArray[i]="* *"};
	}
}
createWord();
emptyString();
blankSpace();

//It would be better if I defined randomIndex before createImage and createWord so it would not choose a different index for each.
//Ideally, myBeach and myImage would be set up as an object, but I couldn't figure out how to pull the property and values.:(
// var myBeaches= {
// 	ocean: {item: "ocean", image: "beach1.png"},
// 	speedo: {item: "speedo", image: "beach2.png"},
// 	beach: {item: "beach", image: "beach3.png"},
// 	oasis: {item: "oasis", image: "beach4.png"},
// 	towel: {item: "towel", image: "beach5.png"},
// 	jellyfish: {item: "jellyfish", image: "beach6.png"},
// 	resort: {item: "resort", image: "beach7.png"},
// 	boardwalk: {item: "boardwalk", image: "beach8.png"},
// 	sailboat: {item: "sailboat", image: "beach9.png"},
// 	waves: {item: "waves", image: "beach.png"},
// 	};	


document.onkeypress= function (e){
	var userGuess=e.key.toUpperCase();
		for (var i = 0; i < randomWord.length; i++) {

 		if (userGuess===randomWord[i]) {
 			emptyArray[i]=randomWord[i];
 		}
 	}

		if((randomWord.indexOf(userGuess) === -1)&&(lettersGuessed.indexOf(userGuess) ===-1)){
			guesses--;
			lettersGuessed.push(userGuess);


		}else if ((randomWord.indexOf(userGuess) !== -1)&&(lettersGuessed.indexOf(userGuess) ===-1)){
 			lettersGuessed.push(userGuess);
 		}
 



 	function winner(chara){
	 return chara!=="___ ";

 // }
}
 	if (emptyArray.every(winner)) {
		wins++;
		randomIndex= Math.floor(Math.random()*myBeach.length);
		document.getElementById('previousWord').innerHTML=randomWord;
		guesses=10;
		emptyArray = [];
		lettersGuessed=[]
		createWord();
		emptyString()
		blankSpace();
		document.getElementById('randomWord').innerHTML=emptyArray.join('');
		createImage();
		document.getElementById('thinkSunny').src=randomImage;
		
	}
	if (guesses<1){
		losses++;
		randomIndex= Math.floor(Math.random()*myBeach.length);
		document.getElementById('previousWord').innerHTML=randomWord;
		guesses=10;
		emptyArray = [];
		lettersGuessed=[]
		createWord();
		emptyString()
		blankSpace();
		document.getElementById('randomWord').innerHTML=emptyArray.join('');
		createImage();
		document.getElementById('thinkSunny').src=randomImage;
	}

console.log(randomWord)


document.getElementById('randomWord').innerHTML=emptyArray.join('');
document.getElementById('lettersGuessed').innerHTML=lettersGuessed;
document.getElementById('wins').innerHTML=wins;
document.getElementById('counter').innerHTML=guesses;
document.getElementById('losses').innerHTML=losses;
};







// var myZoo= ["bear","elephant","giraffe","hippopotamus","rhinocaraus"]
// var randomIndex= Math.floor(Math.random()*myZoo.length);
// var randomWord = myZoo[randomIndex]
// function newRandomWord()  {
// 	myZoo[randomIndex]}

// console.log(randomWord)


// var emptyArray = [];
// for (var i = 0; i < randomWord.length; i++) {
// 	emptyArray.push("___ ");
// // document.getElementById('randomWord').innerHTML= emptyArray;
// };

// var lettersGuessedArray=[]
// console.log(emptyArray)
// // document.getElementById('randomWord').innerHTML= emptyArray;

// document.onkeypress= function (){
// 	var userGuess=String.fromCharCode(event.keyCode).toLowerCase();


// 	document.getElementById('lettersGuessed').innerHTML+=userGuess + ", ";

	
// 	if(randomWord.indexOf(userGuess) === -1){
// 		{guesses--};
// 	}
// 	if(guesses<0)
// 		{losses++;
// 		guesses=10;
// 		newRandomWord()};


// 	for (var i = 0; i < randomWord.length; i++) {

// 	if (userGuess===randomWord[i]) {
		
// 		emptyArray[i]=randomWord[i]
// 	};

	
// //checks whether all characters are letters
	// function winner(chara){
	//  return chara!=="___ ";

// 	}
	// if (emptyArray.every(winner)) {
	// 	wins++;
	// 	newRandomWord();
// 	};





// };
// };








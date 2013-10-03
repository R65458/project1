//alert("JavaScript works!");

//Stacy A. Purdee
//SDI 1310
//Project1
//Story with JS

//start

//global variables(string, string w/escapes, number, boolean)

var intPets = 3;
var strLivQtr = "house";
var booSpoiled = true;
var strEsc = "\'Princess\' Isabella";

var myArray = new Array (3);
myArray[0] = "Ferret named Stewie,";
myArray[1] = "Teacup Chihuahua named Isabella,";
myArray[2] = "Grey Tabby named Gracie";

var myFirstPrompt;
var mySecondPrompt;
var myThirdPrompt;

var intFarAlong = 4;
var intTooGoThree = 8;


//my outputs

console.log("I have " + intPets + " pets and it is " + booSpoiled + " that they are spoiled.");

console.log("My pets are a " + myArray[0] + myArray[1] + myArray[2] + ".");

console.log("All " + intPets + " of my pets live in the " + strLivQtr + " with me.");

console.log("Of course, only one considers herself royalty and that is " + strEsc + ".");

//prompt for input

myFirstPrompt = confirm("Have you ever seen a ferret before?");

//boolean conditional

if (myFirstPrompt === true) {
    console.log("Than I am sure you know that they are very playful and rambunctious.");

//if true-->prompt-->number conditional-->(if false-->math conditional-->outputA)-->(if  true-->outputB)
    
} else {
    console.log("Just in case you did not know- they are like a perpetual two year old");
     
//if false-->prompt-->string conditonal-->(if true--> outputC)-->(if false--> string concatenation-->outputD)

}



//if false-->prompt-->string conditonal-->(if true--> outputC)-->(if false--> string concatenation-->outputD)

//finish
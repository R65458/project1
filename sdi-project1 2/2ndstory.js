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
var intKittens = 5;
var intKitten = 3;
var strCat = "Gracie";

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

console.log("Stewie is always getting into everything- Stewie and Gracie just about bounce off the walls.");

//prompt for input

myFirstPrompt = confirm("Did you know that Gracie and Stewie play together?");

//boolean conditional
//if true-->prompt-->number conditional-->(if false-->math conditional-->outputA)-->(if  true-->outputB)

if (myFirstPrompt === true) {
    mySecondPrompt = prompt("Do you know how long the gestation period is of a cat? Is it 2 or 3 months?");
            
            mySecondPrompt = parseInt(mySecondPrompt);
            
            
            if (mySecondPrompt === 2) {
                console.log("Gracie does not have much longer too go.");
            
            } else {
                var pregLength = (intTooGoThree - intFarAlong)
                console.log("She must have " + pregLength + " weeks left");
            }
//if false-->prompt-->string conditonal-->(if true--> outputC)-->(if false--> string concatenation-->outputD)
} else {
            myThirdPrompt = parseInt(myThirdPrompt);
    
            myThirdPrompt = prompt("How many weeks do you think she is?");
    
            if (intKittens >= myThirdPrompt) {
                console.log("Gracie will take good care of them.");
            } else {
            console.log("Hopefully " + strCat + "will only have " + intKitten + " kittens or less.");
      
    }

}

//finish
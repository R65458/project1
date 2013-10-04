//alert("JavaScript works!");
//SDI 1310
//Project1
//Story with JS

//start

//global variables(string w/escapes, string, number, boolean)
var strEscMySchool = "\'Full Sail University\'";
var strOpinion = "Awesome";
var intAcYr = 8;
var booEnoughFinAid = false;
var intProgLength = 32;
var intFinished = 16;
var intTimeRemaining;
var strOnlineResources = "Scholarships.com";

var firstPrompt;
var secondPrompt;
var thirdPrompt;

//My outputs
console.log("I love going too " + strEscMySchool + " .");
console.log("This school is really " + strOpinion + " !");
console.log("So far having enough Financial Aid is " + booEnoughFinAid + " .");
console.log("I know that I have this academic year covered though and I think it is " + intAcYr + " months long.");

//prompt for input
myFirstPrompt = confirm("Does the Financial Advisors have information on scholarships and private loans?");

//boolean conditional
//if true-->prompt-->number conditional-->(if false-->math conditional-->outputA)-->(if  true-->outputB)
if (myFirstPrompt === true) {

mySecondPrompt = prompt("I really need too figure out how I am going too finance the rest of school or if I will be able too continue next year? How many months is the program?");
            
            if (mySecondPrompt <= 16) {
                console.log("I will have completed the program.");
            } else {
                intTimeRemaining = (intProgLength - intFinished);
                console.log("I will have " + intTimeRemaining + " months left in the program too go.");
            }
//if false-->prompt-->string conditonal-->(if true--> outputC)-->(if false--> string concatenation-->outputD)
} else {

myThirdPrompt = confirm("Are there resources online that I can look for?");

            if (myThirdPrompt === true){
                console.log("Than I will look online.");
            
            } else {
                console.log("I will look at " + strOnlineResources + " too see if they have anything.");
}

}

//finish




//////////////
// FOR LOOPS AND IF/ELSE STATEMENTS 
//////////////

// // starting at 0; loop through the length of the movieScores array; one by one
// for (var i = 0; i < movieScores.length; i++) {
    
//     // new variable called score, which will temporarily hold each item from movieScores as we loop through
//     var score = movieScores[i];
//     sum += score;

//     if (score > 7) {
//         goodMovieScores.push(score);
//     }
//     else if (score <= 7 && score > 5) {
//         okMovieScores.push(score);
//     }
//     else {
//         badMovieScores.push(score);
//     }
// }


//////////////
// FUNCTIONS 
//////////////

// function proudOfYou() {
//     console.log("Hey hey! you're doing great. I'm proud of you :)")
// }
// proudOfYou(); // <- calling our function

// function listLoop(songs) {
//     for (var i = 0; i < songs.length; i++) {
//         console.log(songs[i])
//     }
// }


// ARRAYS (act like python lists)
// favoriteSongs = ["Colourway", "Halloween", "Therefore I Am", "COPYCAT", "Bite Back"]
// listLoop(favoriteSongs)

//////////////
// FOR EACH
//////////////

// var pets = ["Aiko", "Casca", "Millie", "Linus", "Lucy", "Simon", "PJ", "Toby", "Tucker", "Notta"]

// // print name function
// function printName(name) {
//     console.log(name);
// }

// // walk through pets array and perform printName function
// for (var i = 0; i < pets.length; i++) {
//     printName(pets[i]);
// }

// // for each
// pets.forEach(printName)

// // anonymous function inline with for each
// pets.forEach(function(name) { // for each name in our pet list, print the name
//     console.log(name)
// })
// //////////////////////////////////////////////
// var activities = ["Hiking", "Sewing", "Watercolors", "Tarot", "Yoga", "Reading"]

// // when called with parameter filled, prints array of activities
// // *this expects input (parameter)
// function printActivity(parameter) {
//     console.log(parameter)
// }
// printActivity(activities)

// // walk through activities array and print each item one by one
// // *no input involved... no parameters
// function forLoopActivity() {
//     for (var i = 0; i < activities.length; i++) {
//         console.log(activities[i])
//     }
// }

// function forEachActivity() {
//     activities.forEach(function(data) {
//         console.log(data);
//     })
// }

///////////////
// OBJECTS (act like python dictionaries)
///////////

// var Bri = {
//     favColors: ["Lavendar", "Green", "Indigo"],
//     favMovie: "Big",
//     yearBorn: "1997",
//     favActivity: "Hiking"
// };

// // value lookup via dot notation
// console.log(Bri.favColors)
// console.log(Bri.favColors[0])
// console.log(Bri.yearBorn) 

// // value lookup via bracket notation (like python)
// console.log(Bri["favMovie"])
// console.log(Bri["favColors"][0])

// // add key "pets" and values "Aiko" and "Casca" to existing "Bri" object
// Bri.pets = ["Aiko", "Casca"]

// // check if a key exists in an object
// if ("favColors" in Bri){
//     console.log("Great. You have favorite colors!")
// }

// // built in methods
// // Display the entire object, both keys and values
// console.log(Bri);

// // Display only the keys of the object
// console.log(Object.keys(Bri));

// // Display only the values of the object
// console.log(Object.values(Bri));

// // Display a key-value pair held in an array (like turning a dictionary into a list)
// console.log(Object.entries(Bri));

//////////////////
// .map METHOD
///////////////
var theStagesOfJS = ["confidence", "sadness", "confusion", "realization", "debugging", "satisfaction"];

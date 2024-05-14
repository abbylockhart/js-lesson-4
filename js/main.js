// VARIABLES
let firstName = "Abby";
let favouriteBeach = "Tugun Beach";
let waterTemperature = 15.5; // Degrees in Celsius
let coldestTemperature = 8; // Degrees in Celsius
let longestSwim = 3; // Time in Minutes
let completedTrack = true; 
let favouriteWaterfalls = ["Cedar Creek Falls", "Cougal Cascades", "Killen Falls"];
let hourOfDay = 15; // 3pm
let sunsetTime = 1705; // 5:05pm



// FUNCTIONS
// calculate water temperature difference
function calculateWaterDifference(temp1, temp2) {
    return temp1 - temp2;
}

// calculate remaining swim time
function calculateSwimTimeRemaining(time) {
    return time - 1;
}

// check track completion status
function checkTrackCompletion(completed) {
    if (completed) {
        return "You have completed the track.";
    } else {
        return "You haven't completed the track.";
    }
}

// check and log favorite waterfalls
function logFavoriteWaterfalls(waterfalls) {
    if (waterfalls.length > 1) {
        console.log("You have listed some favorite waterfalls.");
    } else {
        console.log("You haven't listed any favorite waterfalls.");
    }
}
// check water temp and provide warning
function checkWaterTemperature(temp) {
    if (temp <= 10) {
        console.warn("Water temperature is very cold. Please be mindful, and swim with a buddy!");
    } else if (temp >= 25) {
        console.warn("Water temperature is warm. Enjoy!");
    } else {
        console.warn("Water temperature is cool. Have a good swim!");
    }
}

// check if track has been completed and log favorite waterfalls
function checkTrackAndWaterfalls(trackCompleted, waterfalls) {
    if (trackCompleted) {
        console.log("The track has been completed.");
    } else {
        console.log("The track has not been completed.");
    }
    console.log("Favorite waterfalls:", waterfalls);
}


// list waterfall details, find out the circuit type, track difficulty and water suitability using "this" keyword
const waterfall = {
    name: "Boomerang Falls",
    location: "Whian Whian State Conservation Area",
    trailLength: 1.9, //in Kms
    elevationGain: 99, //in M
    circuit: true,
    waterTemp: 10,

    gettrackType : function() {
        if (this.circuit) {
            console.log(`${this.name} walking track is a circuit`);
        } else {
            console.log(`${this.name} walking track is out-and-back`);
        }
    },
    checkDifficulty : function() {
        if (this.elevationGain > 80) {
            console.warn("Warning: The track is difficult.");
        } else {
            console.warn("Warning: The track is moderate.");
        }
    },
    checkWaterTemp : function() {
        if (this.waterTemp <= 10) {
            console.warn(`Be careful! The water at ${this.name} is icy. Do not swim for more than 3 minutes`);
        } else {
            console.warn(`The water at ${this.name} is not too cold, keep swim time under 10 minutes`);
        } 
    }
    
}

// calculate the current time + walking distance time in hours to determine whether the walk can be completed before sunset.
function checkSuitableTime(hour, distanceHours) {
    let totalTime = hour + distanceHours;
    if (totalTime >= 17) {
        return `You will need to commence this walking track earlier to finish before sunset at ${sunsetTime} - Try again tomorrow`;
    } else {
        return `You have plenty of time to complete this track today! Enjoy your walk!`;
    }
}



// console
console.log("Water temperature difference:", calculateWaterDifference(waterTemperature, coldestTemperature));
console.log("Remaining swim time:", calculateSwimTimeRemaining(longestSwim));
console.log(checkTrackCompletion(completedTrack));
logFavoriteWaterfalls(favouriteWaterfalls);
checkWaterTemperature(waterTemperature);
checkTrackAndWaterfalls(completedTrack, favouriteWaterfalls);
waterfall.gettrackType();
waterfall.checkDifficulty();
waterfall.checkWaterTemp();
console.log(checkSuitableTime(hourOfDay, 5)); // eg hour of day + 5 hours walking
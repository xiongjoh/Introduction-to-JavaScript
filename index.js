/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

var votingAge = 19;

if (votingAge > 18) {
    console.log("true")
}
else {
    console.log("false")
}




//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

var conditionalVar = 0;

var secondVar = 10;

if (conditionalVar < secondVar) {
    conditionalVar = secondVar;
}
else {
    conditionalVar--;
}
console.log(conditionalVar)



//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

let stringTonum = "1999";

console.log(Number(stringTonum))


//Task d: Write a function to multiply a*b 

function multiplyNum(num1, num2) {
    return num1 * num2;
}

console.log(multiplyNum(3, 5))



/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function toDogYears(years) {
    return years * 7;
}

console.log("I am a " + toDogYears(28) + " year old dog.")



/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996

function dogFeeder(weight, age) {
    if (weight < 0 || age < 0) {
        return "invalid entries"
    }
    else if (age >= 1) {
        if (weight <= 5) {
            return weight * .05;
        }
        else if (weight <= 10) {
            return weight * .04;
        }
        else if (weight <= 15) {
            return weight * .03;
        }
        else {
            return weight * .02;
        }
    }
    else {
        if (age <= .33) {
            return weight * .1;
        }
        else if (age <= .58) {
            return weight * .05;
        }
        else {
            return weight * .04;
        }

    }
}

console.log(dogFeeder(15, 1))



/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

function rpcGame(hand) {

    let computerHand = Math.floor(Math.random() * 3);
    // 0 = rock, 1 = paper, 2 = scissors

    let playerHand = null;

    //set player's string to numbers
    if (hand === 'rock') {
        playerHand = 0;
    }
    else if (hand === 'paper') {
        playerHand = 1;
    }
    else if (hand === 'scissors') {
        playerHand = 2;
    }
    else {
        return "please type: 'rock' 'paper' or 'scissors'"
    }

    // compare the player's hand to the computer's rgn to see if we win or not
    if (playerHand === computerHand) {
        console.log("computer hand was " + computerHand)
        return 'Tie'
    }
    else if (playerHand === computerHand + 1) {
        console.log("computer hand was " + computerHand)
        return 'Win!'
    }
    else if (playerHand === 0 && computerHand === 2) {
        console.log("computer hand was " + computerHand)
        return 'Win!'
    }
    else {
        console.log("computer hand was " + computerHand)
        return 'Lost!'
    }
}

}

console.log(rpcGame('scissors'));



/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function kiloToMiles(km) {
    return km * .621371;
}

console.log(kiloToMiles(5))

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters

function feetToCenti(ft) {
    return ft * 30.48;
}

console.log(feetToCenti(5))

/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, 
// (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`

function annoyingSong(btlcount) {
    for (btlcount; btlcount > 0; btlcount--) {
        console.log(btlcount + " bottles of soda on the wall, " + btlcount + " bottles of soda, take one down pass it around " + (btlcount - 1) + " bottles of soda on the wall")
    }
}

annoyingSong(4);


/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F


function getGrade() {

    let markOutOf100 = Math.floor(Math.random() * 101);

    if (markOutOf100 >= 90) {
        console.log(markOutOf100)
        return 'Grade A'
    }
    else if (markOutOf100 >= 80) {
        console.log(markOutOf100)
        return 'Grade B'
    }
    else if (markOutOf100 >= 70) {
        console.log(markOutOf100)
        return 'Grade C'
    }
    else if (markOutOf100 >= 60) {
        console.log(markOutOf100)
        return 'Grade D'
    }
    else {
        console.log(markOutOf100)
        return 'Grade F'
    }

}

console.log(getGrade());

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object






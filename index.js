import { fifaData } from "./fifa.js";
console.log(fifaData);

console.log("its working");
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */
//(A)//
let team = fifaData.filter((element) => {
  return element.Stage === "Final" && element.Year === 2014;
});

console.log("Task 1", team); // array of objects
console.log("task 1a", team[0]["Home Team Name"]);
console.log("task 1b", team[0]["Away Team Name"]);
console.log("task 1c", team[0]["Home Team Goals"]);
console.log("task 1d", team[0]["Away Team Goals"]);
let hometeam = team[0]["Home Team Goals"];
let awayteam = team[0]["Away Team Goals"];
if (hometeam > awayteam) {
  console.log("Winner was", team[0]["Home Team Name"]);
} else {
  console.log("Winner was", team[0]["Away Team Name"]);
}

//TASK 2//
/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */
function getFinals(data) {
  return data.filter((element) => element.Stage === "Final");
}

console.log("getFinals", getFinals(fifaData));

// TASK 3 //
//  Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset

function getYears(cb, data) {
  let years = [];
  cb(data).map((item) => years.push(item.Year)); //=== 1930 ) )
  // data.filter(element => (element.stage === "Final")).map(item)
  return years;
}

console.log(getYears(getFinals, fifaData));

//TASK 4//
/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */

function getWinners(cb, data) {
  let winners = [];
  cb(data).forEach((item) => {
    if (item["Home Team Goals"] > item["Away Team Goals"]) {
      winners.push(item["Home Team Name"]);
    } else {
      winners.push(item["Away Team Name"]);
    }
  });
  return winners;
}
console.log("getWinners", getWinners(getFinals, fifaData));

// /* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!"
// Parameters:
//  * callback function getWinners
//  * callback function getYears
//  */

function getWinnersByYear(getWinners, allYears) {
  let countries = getWinners(getFinals, fifaData);
  let years = allYears(getFinals, fifaData);
  countries.forEach((item, index) => {
    console.log(`"In ${years[index]}, ${item} won the world cup!"`);
  });
}

getWinnersByYear(getWinners, getYears);

// function getName(hero)
// { return hero.name;
// }
// const names = heroes.map(getName);

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

// function getAverageGoals(data) {
//   let avghomegoals = Math.round(
//     data.reduce((acc, index) => {
//       return acc + index["Home Team Goals"] / data.length;
//     }, 0)
//   );
//   let avgawaygoals = Math.round(
//     data.reduce((acc, index) => {
//       return acc + index["Away Team Goals"] / data.length;
//     }, 0)
//   );
//   return { home: avghomegoals, away: avgawaygoals };
// }

// console.log(getAverageGoals(fifaData));
// //(A)//
// let team = fifaData.filter(element) => {
//     return element.Stage === "Final" && element.Year === 2014
// })
// }

// let team = fifaData.filter((element) => element.Stage === "Final");

// for (let i = 0; i < team.length; i++) {
//   if (team[i]["Year"] === 2014) {
//     console.log("Task 1 A is " + "Home Team Name " + team[i]["Home Team Name"]);
//   }
// }

// //(B)//
// let awayTeamName = fifaData.filter((element) => element.Stage === "Final");

// for (let i = 0; i < awayTeamName.length; i++) {
//   if (awayTeamName[i]["Year"] === 2014) {
//     console.log(
//       "Task 1 B is " + "Away Team Name " + awayTeamName[i]["Away Team Name"]
//     );
//   }
// }

// //(C)//
// let homeTeamGoals = fifaData.filter((element) => element.Stage === "Final");

// for (let i = 0; i < homeTeamGoals.length; i++) {
//   if (homeTeamGoals[i]["Year"] === 2014) {
//     console.log(
//       "Task 1 C is " +
//         "The Home Team Goals for 2014 were a score of " +
//         homeTeamGoals[i]["Home Team Goals"]
//     );
//   }
// }

// // (d) Away Team goals for 2014 world cup final
// let awayTeamGoals = fifaData.filter((element) => element.Stage === "Final");

// for (let i = 0; i < awayTeamGoals.length; i++) {
//   if (awayTeamGoals[i]["Year"] === 2014) {
//     console.log(
//       "Task 1 D is " +
//         "The Away Team Goals for 2014 were a score of " +
//         awayTeamGoals[i]["Away Team Goals"]
//     );
//   }
// }
// // "Home Team Name": "Uruguay",
// //     "Home Team Goals": 1,
// //     "Away Team Goals": 3,
// //     "Away Team Name": "Costa Rica",

// // (e) Winner of 2014 world cup final */
// let winnerOf2014Final = fifaData.filter((element) => element.Stage === "Final");
// for (let i = 0; i < winnerOf2014Final.length; i++) {
//   if (winnerOf2014Final[i]["Year"] === 2014) {
//     if (
//       winnerOf2014Final[i]["Home Team Goals"] >
//       winnerOf2014Final[i]["Away Team Goals"]
//     ) {
//       console.log(
//         "Task 1 E Winner is " + winnerOf2014Final[i]["Home Team Name"]
//       );
//     } else {
//       console.log(
//         "Task 1 E Winner is " + winnerOf2014Final[i]["Away Team Name"]
//       );
//     }
//   }
// }

// /* Task 2: Create a function  called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

// let finalsInfo = [];
// let getFinals = fifaData.filter((element) => element.Stage === "Final");
// for (let i = 0; i < getFinals.length; i++) {
//   if (getFinals[i]["Stage"] === ["Final"]) {
//     getFinals[i].push = finalsInfo;
//   }
// }

// console.log("The Answer to Task 2 is below");
// console.log(getFinals);

// // function getFinals(match) {
// //   return match["Stage"] === "Final";
// // }
// // const finalsData = fifaData.filter(getFinals);

// // function getYear(match) {
// //   return match.Year;
// // }

// // const years = finalsData.map(getYear);
// // console.log(years);

// // function getYears(getFinals) {
// //   const finalsData = fifaData.filter(getFinals);
// //   const newyears = finalsData.map((match) => match.Year);
// //   return newyears;
// // }

// // const newyears = getYears(getFinals);
// // console.log(newyears);

// // WORKS--------------------
// // let getFinals = fifaData.filter((data) => data.Stage === "Final");
// // console.log("The Answer to Task 2 is ", getFinals);

// // WORKS---------------
// // for (let i = 0; i < getFinals.length; i++) {
// //   if (getFinals[i]["Stage"] === "Final") {
// //     console.log("Task 2 is is" + getFinals[i]["Stage"]);
// //   }
// // }

// // const finalsInfo = [];
// // fifaData.forEach(function (element) {
// //   return finalsInfo.push(element.Stage["Finals"]());
// // });

// // console.log(finalsInfo);

/// cats 
// // }

// /* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

// console.log("No idea how to do Task 3");

// // var arr = [ 1, 2, 3 ];

// // var getFinals = arr.map(multiplyByTwo);

// // console.log(arrDoubled); // [ 2, 4, 6 ]

// // let getYears = callback.filter((data) => getYears.Years);

// // console.log(getYears(getFinals));
// // getYears uses getFinals to return a new array called years returning only the years in the dataset

// // let getYears = getFinals.filter((element) => (element.Years = "Years"));

// // console.log(getYears);

// // for (let i = 0; i < getYears.length; i++) {
// //   console.log(getYears[i].Years);
// // }
// // for (let i = 0; i < getYears.length; i++)
// //   console.log(getYears[i]["Years"]);
// // }
// // getYears();

// // for (let i = 0; i < awayTeamGoals.length; i++) {
// //   if (awayTeamGoals[i]["Year"] === 2014) {
// //     console.log(
// //       "Task 1 D is " +
// //         "The Away Team Goals for 2014 were a score of " +
// //         awayTeamGoals[i]["Away Team Goals"]
// //     );
// //   }
// // }
// // let getYears = getFinals.filter((element) => element.Year["Year"]);
// // console.log(getYears);

// // function getYears(callback) {
// //   let years = [];

// // }

// // console.log(getYears(getFinals);

// /* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */

// console.log("Getting somewhere with Task 4 (below) but at a loss");
// let getWinners = fifaData.filter((element) => element.Stage === "Final");
// for (let i = 0; i < getWinners.length; i++) {
//   if (getWinners[i]["Stage"] === "Final") {
//     if (getWinners[i]["Home Team Goals"] > getWinners[i]["Away Team Goals"]) {
//       console.log("Winner is " + getWinners[i]["Home Team Name"]);
//       //   getWinners[i].push == winner;
//     } else {
//       console.log("Winner is " + getWinners[i]["Away Team Name"]);
//       //   getWinners[i].push == winner;
//     }
//   }
// }

// getWinners;

// // let winnerOfFinals = getFinals.filter((element) =>
// // for (let i = 0; i < winnerOfFinals.length; i++) {
// //   if (winnerOf2014Final[i]["Year"] === 2014) {
// //     if (
// //       winnerOf2014Final[i]["Home Team Goals"] >
// //       winnerOf2014Final[i]["Away Team Goals"]
// //     ) {
// //       console.log("Winner is " + winnerOfFinals[i]["Home Team Name"]);
// //     } else {
// //       console.log("Winner is " + winnerOfFinals[i]["Away Team Name"]);
// //     }
// //   }
// // }

// // /* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!"

// // Parameters:
// //  * callback function getWinners
// //  * callback function getYears
// //  */

// // function getWinnersByYear(/* code here */) {}

// // getWinnersByYear();

// // /* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

// // function getAverageGoals(/* code here */) {
// //   /* code here */
// // }

// // getAverageGoals();

// // /// STRETCH 🥅 //

// // /* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had.

// // Hint: Investigate your data to find "team initials"!
// // Hint: use `.reduce` */

// // function getCountryWins(/* code here */) {
// //   /* code here */
// // }

// // getCountryWins();

// // /* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

// // function getGoals(/* code here */) {
// //   /* code here */
// // }

// // getGoals();

// // /* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

// // function badDefense(/* code here */) {
// //   /* code here */
// // }

// // badDefense();

// // /* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */

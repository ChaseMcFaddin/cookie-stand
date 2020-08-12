'use strict';

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
  //The maximum is inclusive and the minimum is inclusive
}

//------------------------------- LAB 06 OBJECTS/METHODS ---------------------------------//

// var seattle = {
//   name: seattle,
//   minCust: 23,
//   maxCust: 65,
//   avgCookieCust: 6.3,
//   openTime: 6,
//   closeTime: 20,
//   cookieArray: [],
//   dailyTotal: 0,

//   calcCookiesPerHour: function () {
//     for (var i = this.openTime; i < this.closeTime; i++) {
//       var hourlyTotal = Math.ceil(getRandom(this.minCust, this.maxCust) * this.avgCookieSale);
//       this.cookieArray[i - this.openTime] = hourlyTotal;
//       this.dailyTotal += hourlyTotal;
//     }
//   }
// };
// seattle.calcCookiesPerHour();


// // here I am generating a random number within the minCust/maxCust range //

// //   calcCustPerHour: function () {
// //     var getCust = getRandom();
// //     while (getCust < this.minCust || getCust > this.maxCust) {
// //       getCust = getRandom();
// //     }
// //     return getCust;
// //   },

// //   //here I am returning two arrays within one array. This includes the hour and cookies //

// //   calcCookiePerHour: function () {
// //     var perHour = [];
// //     var hour = [];
// //     for (var i = this.openTime; i < this.closeTime; i++) {
// //       perHour[i - this.openTime] = (this.getCust() * this.avgCookieCust).toFixed(0);
// //     }
// //     return [hour, perHour];
// //   }
// // };


// var tokyo = {
//   name: tokyo,
//   minCust: 3,
//   maxCust: 24,
//   avgCookieCust: 1.2,
//   openTime: 6,
//   closeTime: 20,
//   cookieArray: [],
//   dailyTotal: 0,

//   // streamlined with an array //

//   calcCookiesPerHour: function () {
//     for (var i = this.openTime; i < this.closeTime; i++) {
//       var hourlyTotal = Math.ceil(getRandom(this.minCust, this.maxCust) * this.avgCookieSale);
//       this.cookieArray[i - this.openTime] = hourlyTotal;
//       this.dailyTotal += hourlyTotal;
//     }
//   }
// };
// tokyo.calcCookiesPerHour();

// //   // here I am generating a random number within the minCust/maxCust range //

// //   calcCustPerHour: function () {
// //     var getCust = getRandom();
// //     while (getCust < this.minCust || getCust > this.maxCust) {
// //       getCust = getRandom();
// //     }
// //     return getCust;
// //   },

// //   //here I am returning two arrays within one array. This includes the hour and cookies //

// //   calcCookiePerHour: function () {
// //     var perHour = [];
// //     var hour = [];
// //     for (var i = this.openTime; i < this.closeTime; i++) {
// //       perHour[i - this.openTime] = (this.getCust() * this.avgCookieCust).toFixed(0);
// //     }
// //     return [hour, perHour];
// //   }
// // };

// var dubai = {
//   name: dubai,
//   minCust: 11,
//   maxCust: 38,
//   avgCookieCust: 3.7,
//   openTime: 6,
//   closeTime: 20,
//   cookieArray: [],
//   dailyTotal: 0,


//   // streamlined with an array //

//   calcCookiesPerHour: function () {
//     for (var i = this.openTime; i < this.closeTime; i++) {
//       var hourlyTotal = Math.ceil(getRandom(this.minCust, this.maxCust) * this.avgCookieSale);
//       this.cookieArray[i - this.openTime] = hourlyTotal;
//       this.dailyTotal += hourlyTotal;
//     }
//   }
// };
// dubai.calcCookiesPerHour();

// here I am generating a random number within the minCust/maxCust range //

//   calcCustPerHour: function () {
//     var getCust = getRandom();
//     while (getCust < this.minCust || getCust > this.maxCust) {
//       getCust = getRandom();
//     }
//     return getCust;
//   },

//   //here I am returning two arrays within one array. This includes the hour and cookies //

//   calcCookiePerHour: function () {
//     var perHour = [];
//     var hour = [];
//     for (var i = this.openTime; i < this.closeTime; i++) {
//       perHour[i - this.openTime] = (this.getCust() * this.avgCookieCust).toFixed(0);
//     }
//     return [hour, perHour];
//   }
// };


// var paris = {
//   name: paris,
//   minCust: 20,
//   maxCust: 38,
//   avgCookieCust: 2.3,
//   openTime: 6,
//   closeTime: 20,
//   cookieArray: [],
//   dailyTotal: 0,


//   // streamlined with an array //

//   calcCookiesPerHour: function () {
//     for (var i = this.openTime; i < this.closeTime; i++) {
//       var hourlyTotal = Math.ceil(getRandom(this.minCust, this.maxCust) * this.avgCookieSale);
//       this.cookieArray[i - this.openTime] = hourlyTotal;
//       this.dailyTotal += hourlyTotal;
//     }
//   }
// };
// paris.calcCookiesPerHour();

// here I am generating a random number within the minCust/maxCust range //

//   calcCustPerHour: function () {
//     var getCust = getRandom();
//     while (getCust < this.minCust || getCust > this.maxCust) {
//       getCust = getRandom();
//     }
//     return getCust;
//   },

//   //here I am returning two arrays within one array. This includes the hour and cookies //

//   calcCookiePerHour: function () {
//     var perHour = [];
//     var hour = [];
//     for (var i = this.openTime; i < this.closeTime; i++) {
//       perHour[i - this.openTime] = (this.getCust() * this.avgCookieCust).toFixed(0);
//     }
//     return [hour, perHour];
//   }
// };


// var lima = {
//   name: lima,
//   minCust: 2,
//   maxCust: 16,
//   avgCookieCust: 4.6,
//   openTime: 6,
//   closeTime: 20,
//   cookieArray: [],
//   dailyTotal: 0,


//   // streamlined with an array //

//   calcCookiesPerHour: function () {
//     for (var i = this.openTime; i < this.closeTime; i++) {
//       var hourlyTotal = Math.ceil(getRandom(this.minCust, this.maxCust) * this.avgCookieSale);
//       this.cookieArray[i - this.openTime] = hourlyTotal;
//       this.dailyTotal += hourlyTotal;
//     }
//   }
// };
// lima.calcCookiesPerHour();

// here I am generating a random number within the minCust/maxCust range //

//   calcCustPerHour: function () {
//     var getCust = getRandom();
//     while (getCust < this.minCust || getCust > this.maxCust) {
//       getCust = getRandom();
//     }
//     return getCust;
//   },

//   //here I am returning two arrays within one array. This includes the hour and cookies //

//   calcCookiePerHour: function () {
//     var perHour = [];
//     var hour = [];
//     for (var i = this.openTime; i < this.closeTime; i++) {
//       perHour[i - this.openTime] = (this.getCust() * this.avgCookieCust).toFixed(0);
//     }
//     return [hour, perHour];
//   }
// };

//------------------------------- LAB 07 CONSTRUCTOR ---------------------------------//

// var chase = document.getElementById('chase');
// console.log(chase);
// var ryanTable = document.getElementbyId('chase');
// var chaseTable = document.createElement('table');
// function mytable() {
//   var tableRow = document.createElement('tr');
//   var tableHeader = document.createElement('th');
//   ryanTable.append(chaseTable);
//   chaseTable.append(tableRow);
//   tableRow.append(tableHeader);
//   for (var i = this.openTime; i < this.closeTime; i++) {
//     tableHeader.textContent = this.openTime;
//     tableHeader = document.createElement('th');
//     tableRow.append(tableHeader);
//   }
//   tableHeader.textContent = '';
//   tableHeader.append(tableRow);
//   tableHeader = document.createElement('th');
//   tableHeader.textContent = 'Daily Store Total';
//   tableHeader.append(tableRow);

// }

// mytable();

// Putting together a Constructor //

function CookieStores(name, minCust, maxCust, avgCookieCust, openTime, closeTime) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieCust = avgCookieCust;
  this.openTime = openTime;
  this.closeTime = closeTime;
  this.cookieArray = [];
  this.dailyTotal = 0;
}

// calcCookiesPerHour: function () {
//     for (var i = this.openTime; i < this.closeTime; i++) {
//       var hourlyTotal = Math.ceil(getRandom(this.minCust, this.maxCust) * this.avgCookieSale);
//       this.cookieArray[i - this.openTime] = hourlyTotal;
//       this.dailyTotal += hourlyTotal;
//     }
//   }
// };
// seattle.calcCookiesPerHour();

CookieStores.prototype.calCookiesPerHour = function () {
  for (var i = this.openTime; i < this.closeTime; i++) {
    var hourlyTotal = Math.ceil(getRandom(this.minCust, this.maxCust) * this.avgCookieSale);
    this.cookieArray[i - this.openTime] = hourlyTotal;
    this.dailyTotal += hourlyTotal;
  }
};


CookieStores.prototype.renderTable = function () {
  this.calCookiesPerHour();
  var newRow = document.createElement('tr');
  var newHeader = document.createElement('td');
  newHeader.textContent = `${this.name}`;
  // chaseTable.append(newRow);
  newRow.append(newHeader);
  for (var i = this.openTime; i < this.closeTime; i++) {
    newHeader = document.createElement('td');
    newHeader.textContent = `${this.cookieArray[i]} Cookies`;
    newRow.append(newHeader);
  }
  newHeader.textContent = `${parseInt(this.dailyTotal)} Cookies`;
  newRow.append(newHeader);
};

var seattle = new CookieStores('seattle', '23', '65', '6.3', '6', '20');
CookieStores.push(seattle);
var tokyo = new CookieStores('tokyo', '3', '24', '1.2', '6', '20');
CookieStores.push(tokyo);
var dubai = new CookieStores('dubai', '11', '38', '3.7', '6', '20');
CookieStores.push(dubai);
var paris = new CookieStores('paris', '20', '38', '2.3', '6', '20');
CookieStores.push(paris);
var lima = new CookieStores('lima', '2', '16', '4.6', '6', '20');
CookieStores.push(lima);

seattle.renderTable();
tokyo.renderTable();
dubai.renderTable();
paris.renderTable();
lima.renderTable();


// Speaker: Company: Used to a Chancellor at Medieval Times, Education Major and now works as CTO for NewsStory (a housing tech company)Topic: Day in the life of a Junior DeveloperKey Ideas: Key Takeaways: 




//------------------------------- LAB 07 TABLE  -------------------------------------------//

// var stores = [seattle, tokyo, dubai, paris, lima];




//------------------------------- LAB 06 DOMS  --------------------------------------------//
// Array //

// var stores = [seattle, tokyo, dubai, paris, lima];

// Working with DOMs - attaching to main tag id //

// var main = document.getElementById('cookie-time');

// var total;
// for (var j = 0; j < stores.length; j++) {
//   total = 0;

//   // inserting section //

//   var secElement = document.createElement('section');
//   main.append(secElement);

//   // inserting header //

//   var h3Element = document.createElement('h3');
//   h3Element.textContent = stores[j].name;
//   secElement.appendChild(h3Element);

//   //inserting ul and li elements //

//   var ulElement = document.createElement('ul');
//   secElement.appendChild(secElement);
//   secElement.append(ulElement);

//   var liElement;
//   var cookieOutput = stores[j].cookiesPerHour();
//   var outPutString;
//   for (var i = 0; i < (stores[j].closeTime - stores[j].openTime); i++) {
//     liElement = document.createElement('li');
//     outPutString = `${formatTime(cookieOutput[0][i])}: ${cookieOutput[1][i]} cookies.`;
//     liElement.appendChild(document.createTextNode(outPutString));
//     ulElement.appendChild(liElement);
//     total = total + Number(cookieOutput[1][i]);
//     console.log(total);
//   }
// }


// //formats military time to am & pm //

// function formatTime(input) {
//   if (input < 13) {
//     return `${input}am`;
//   } else {
//     return `${input - 12}pm`;
//   }
// }

// formatTime;



//------------------------------- LAB 06 INSTRUCTIONS ---------------------------------//



// 1. Store the min/max hourly customers, and the average cookies per customer, in object properties

// 2. Uses a method of that object to generate a random number of customers per hour. Objects/Math/random

// 3. Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated

// 4. Store the results for each location in a separate array… perhaps as a property of the object representing that location

// 5. Display the values of each array as unordered lists in the browser

// 6. Calculating the sum of these hourly totals; your output for each location should look like this:


// Seattle

// 6am: 16 cookies
// 7am: 20 cookies
// 8am: 35 cookies
// 9am: 48 cookies
// 10am: 56 cookies
// 11am: 77 cookies
// 12pm: 93 cookies
// 1pm: 144 cookies
// 2pm: 119 cookies
// 3pm: 84 cookies
// 4pm: 61 cookies
// 5pm: 23 cookies
// 6pm: 42 cookies
// 7pm: 57 cookies
//  Total: 875 cookies



//------------------------------- LAB 07 INSTRUCTIONS ---------------------------------//

// 1. Create a new branch for today’s lab. Make sure it has all of your changes from lab 06 so that you can extend the functionality. //

// 2. Replace all of your object literals for the salmon cookie stand with a single constructor function that, when called with the ‘new’ keyword, it creates a new instance. //

// 3. Replace the lists of your data for each store and build a single table of data instead. It shoudl look similar to the following: //

// 4. Display each stores data in a table format similar to what is below. Break each column by the hour and complete each row with a “Daily Location Total”.

'use strict';

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}


var seattle = {
  name: seattle,
  minCust: 23,
  maxCust: 65,
  avgCookieCust: 6.3,
  openTime: 6,
  closeTime: 20,

  // here I am generating a random number within the minCust/maxCust range //

  calcCustPerHour: function () {
    var getCust = getRandom();
    while (getCust < this.minCust || getCust > this.maxCust) {
      getCust = getRandom();
    }
    return getCust;
  },

  //here I am returning two arrays within one array. This includes the hour and cookies //

  calcCookiePerHour: function () {
    var perHour = [];
    var hour = [];
    for (var i = this.openTime; i < this.closeTime; i++) {
      perHour[i - this.openTime] = (this.getCust() * this.avgCookieCust).toFixed(0);
    }
    return [hour, perHour];
  }
};


var tokyo = {
  name: tokyo,
  minCust: 3,
  maxCust: 24,
  avgCookieCust: 1.2,
  openTime: 6,
  closeTime: 20,

  // here I am generating a random number within the minCust/maxCust range //

  calcCustPerHour: function () {
    var getCust = getRandom();
    while (getCust < this.minCust || getCust > this.maxCust) {
      getCust = getRandom();
    }
    return getCust;
  },

  //here I am returning two arrays within one array. This includes the hour and cookies //

  calcCookiePerHour: function () {
    var perHour = [];
    var hour = [];
    for (var i = this.openTime; i < this.closeTime; i++) {
      perHour[i - this.openTime] = (this.getCust() * this.avgCookieCust).toFixed(0);
    }
    return [hour, perHour];
  }
};

var dubai = {
  name: dubai,
  minCust: 11,
  maxCust: 38,
  avgCookieCust: 3.7,
  openTime: 6,
  closeTime: 20,

  // here I am generating a random number within the minCust/maxCust range //

  calcCustPerHour: function () {
    var getCust = getRandom();
    while (getCust < this.minCust || getCust > this.maxCust) {
      getCust = getRandom();
    }
    return getCust;
  },

  //here I am returning two arrays within one array. This includes the hour and cookies //

  calcCookiePerHour: function () {
    var perHour = [];
    var hour = [];
    for (var i = this.openTime; i < this.closeTime; i++) {
      perHour[i - this.openTime] = (this.getCust() * this.avgCookieCust).toFixed(0);
    }
    return [hour, perHour];
  }
};


var paris = {
  name: paris,
  minCust: 20,
  maxCust: 38,
  avgCookieCust: 2.3,
  openTime: 6,
  closeTime: 20,

  // here I am generating a random number within the minCust/maxCust range //

  calcCustPerHour: function () {
    var getCust = getRandom();
    while (getCust < this.minCust || getCust > this.maxCust) {
      getCust = getRandom();
    }
    return getCust;
  },

  //here I am returning two arrays within one array. This includes the hour and cookies //

  calcCookiePerHour: function () {
    var perHour = [];
    var hour = [];
    for (var i = this.openTime; i < this.closeTime; i++) {
      perHour[i - this.openTime] = (this.getCust() * this.avgCookieCust).toFixed(0);
    }
    return [hour, perHour];
  }
};


var lima = {
  name: lima,
  minCust: 2,
  maxCust: 16,
  avgCookieCust: 4.6,
  openTime: 6,
  closeTime: 20,

  // here I am generating a random number within the minCust/maxCust range //

  calcCustPerHour: function () {
    var getCust = getRandom();
    while (getCust < this.minCust || getCust > this.maxCust) {
      getCust = getRandom();
    }
    return getCust;
  },

  //here I am returning two arrays within one array. This includes the hour and cookies //

  calcCookiePerHour: function () {
    var perHour = [];
    var hour = [];
    for (var i = this.openTime; i < this.closeTime; i++) {
      perHour[i - this.openTime] = (this.getCust() * this.avgCookieCust).toFixed(0);
    }
    return [hour, perHour];
  }
};






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
// Total: 875 cookies















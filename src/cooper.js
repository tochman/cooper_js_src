function Person(attr) {
  this.gender = attr.gender;
  this.age = attr.age;
};


Person.prototype.assessCooper = function(distance) {

  if (this.gender.toLowerCase() == 'male') {
    this.cooperMessage = this.getCooperResultsForMales(distance);
  } else {
    this.cooperMessage = this.getCooperResultsForFemales(distance);
  }
};

Person.prototype.getCooperResultsForMales = function(distance) {
  var age = this.age;
  switch (true) {
    case (age >= 20 && age < 29):
      switch (true) {
        case (distance < 1600):
          return 'Poor';
          break;
        case (distance >= 1600 && distance < 2199):
          return 'Below average';
          break;
        case (distance >= 2200 && distance < 2399):
          return 'Average';
          break;
        case (distance >= 2400 && distance < 2800):
          return 'Above average';
          break;
        case (distance >= 2800):
          return 'Excellent';
          break;
      }
      break;

    case (age >= 30 && age < 39):
      switch (true) {
        case (distance < 1500):
          return 'Poor';
          break;
        case (distance >= 1500 && distance < 1999):
          return 'Below average';
          break;
        case (distance >= 1999 && distance < 2299):
          return 'Average';
          break;
        case (distance >= 2300 && distance < 2700):
          return 'Above average';
          break;
        case (distance > 2700):
          return 'Excellent';
          break;
      }
      break;

    case (age >= 40 && age < 49):
      switch (true) {
        case (distance < 1400):
          return 'Poor';
          break;
        case (distance >= 1400 && distance < 1699):
          return 'Below average';
          break;
        case (distance >= 1700 && distance < 2099):
          return 'Average';
          break;
        case (distance >= 2100 && distance < 2500):
          return 'Above average';
          break;
        case (distance >= 2500):
          return 'Excellent';
          break;
      }
      break;

    case (age >= 50):
      switch (true) {
        case (distance < 1300):
          return 'Poor';
          break;
        case (distance >= 1300 && distance <= 1599):
          return 'Below average';
          break;
        case (distance >= 1600 && distance <= 1999):
          return 'Average';
          break;
        case (distance >= 2000 && distance <= 2400):
          return 'Above average';
          break;
        case (distance >= 2400):
          return 'Excellent';
          break;
      }
      break;

  }
}

Person.prototype.getCooperResultsForFemales = function(distance) {
  var age = this.age;
  switch (true) {
    case (age >= 20 && age < 29):
      switch (true) {
        case (distance < 1500):
          return 'Poor';
          break;
        case (distance >= 1500 && distance < 1799):
          return 'Below average';
          break;
        case (distance >= 1800 && distance < 2199):
          return 'Average';
          break;
        case (distance >= 2200 && distance < 2700):
          return 'Above average';
          break;
        case (distance > 2700):
          return 'Excellent';
          break;

      }
      break;

    case (age >= 30 && age < 39):
      switch (true) {
        case (distance < 1400):
          return 'Poor';
          break;
        case (distance >= 1400 && distance < 1699):
          return 'Below average';
          break;
        case (distance >= 1700 && distance < 1999):
          return 'Average';
          break;
        case (distance >= 2000 && distance < 2500):
          return 'Above average';
          break;
        case (distance > 2500):
          return 'Excellent';
          break;
      }
      break;

    case (age >= 40 && age < 49):
      switch (true) {
        case (distance < 1200):
          return 'Poor';
          break;
        case (distance >= 1200 && distance < 1499):
          return 'Below average';
          break;
        case (distance >= 1500 && distance < 1899):
          return 'Average';
          break;
        case (distance >= 1900 && distance < 2300):
          return 'Above average';
          break;
        case (distance >= 2300):
          return 'Excellent';
          break;
      }
      break;

    case (age >= 50):
      switch (true) {
        case (distance < 1100):
          return 'Poor';
          break;
        case (distance >= 1100 && distance <= 1399):
          return 'Below average';
          break;
        case (distance >= 1400 && distance <= 1699):
          return 'Average';
          break;
        case (distance >= 1700 && distance <= 2200):
          return 'Above average';
          break;
        case (distance >= 2200):
          return 'Excellent';
          break;
      }
      break;

  }
}

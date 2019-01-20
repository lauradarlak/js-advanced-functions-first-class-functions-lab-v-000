// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
}

const selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers
]

function createFareMultiplier(fare) {
  return function(num) {
    return fare * num;
  };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function fetchSpecifiedDrivers(drivers, fn) {
  return fn(drivers);
};

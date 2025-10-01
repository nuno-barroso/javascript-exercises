const convertToCelsius = function(temp) {
  let celsius = 0;
  celsius = (temp - 32) * (5/9);
  return Math.round(celsius * 10) / 10; 
};

const convertToFahrenheit = function(temp) {
  let fah = 0;
  fah = (temp * (9/5) + 32);
  return Math.round(fah * 10) / 10; 
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

function convertCelsiusToFahrenheit(temperature){
  var tempConverted = temperature * 9 / 5 + 32;

  return tempConverted;
}

module.exports = convertCelsiusToFahrenheit;
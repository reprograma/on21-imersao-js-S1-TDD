function convertToCelsius(fahrenheit) {
    var tempConverted = (fahrenheit - 32) * 5 / 9;
  return tempConverted;
}

module.exports = convertToCelsius;
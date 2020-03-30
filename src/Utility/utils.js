function convertToF(celsius) {
  let fahrenheit = ((celsius * 9) / 5 + 32).toFixed(2);
  return fahrenheit;
}

function changeTimeZone(time) {
  return new Date(time).toString().slice(0, 25);
}

function roundNumbers(input) {
  return (Math.round(input * 100) / 100).toFixed(2);
}

module.exports = { convertToF, changeTimeZone, roundNumbers };

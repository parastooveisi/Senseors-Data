const functions = require("../utils.js");

test("Converts celcius to farenheit", () => {
  expect(functions.convertToF(24.65)).toBe("76.37");
});

test("Converts any given timezone to the browser local time", () => {
  expect(functions.changeTimeZone("2019-12-31T00:00Z")).toBe(
    "Mon Dec 30 2019 18:00:00 "
  );
});

test("Rounds numbers to two decimals", () => {
  expect(functions.roundNumbers(12.567)).toBe("12.57");
});

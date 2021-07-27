function getNumberType(num) {
  if (isNaN(num) || typeof num === "string") {
    console.error("Please provide a valid number");
    return;
  }

  const remainder = num % 2;

  if (remainder === 0) {
    return "even";
  }

  return "odd";
}

console.log(getNumberType("2"));
console.log(getNumberType(2));
console.log(getNumberType([]));
console.log(getNumberType(boolean));
console.log(getNumberType(109));

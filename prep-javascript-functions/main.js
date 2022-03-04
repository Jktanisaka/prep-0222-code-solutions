function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(x) {
  return x * 60;
}

var hours = convertHoursToMinutes(2);
console.log('hours', hours);

function getGreeting(name) {
  return 'Hello ' + name + '!';
}

var greeting = getGreeting('World');
console.log(greeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
var addedAndMultiplied = addAndMultiplyBy5(10, 5);
console.log(addedAndMultiplied);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
var multipliedAndDivided = multiplyAndDivideBy5(35, 10);
console.log(multipliedAndDivided);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var difference = subtractTwoNumbers(22, 7);
console.log(difference);

function getCircleCircumference(radius) {
  return radius * 2 * 3.141592653589793;
}

var circumference = getCircleCircumference(5);
console.log(circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var fullName = getFullName('Juan', 'Ramirez');
console.log(fullName);

function cube(number) {
  return number ** 3;
}

var cubed = cube(5);
console.log(cubed);

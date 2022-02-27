var person = {
  firstName: 'Jon',
  lastName: 'Tanisaka',
  hobby: 'running'
};
console.log(person);

var fullName = person.firstName + ' ' + person.lastName;
console.log("The person's full name is " + fullName);

person.job = 'Coder';
console.log("The person's job is " + person.job);

person.previousJob = 'Real estate marketing';
console.log("The person's previous job was " + person.previousJob);
console.log(person);

// Local Storage

let someData;
let someOtherData;

// Set
localStorage.setItem('some-data', 'Some data here');

// Get
localStorage.getItem('some-data');
console.log(someData);

// Remove
localStorage.removeItem('some-data');
someData = localStorage.getItem('some-data');
console.log(someData);

// Clear
localStorage.setItem('some-data', 'Having some data here.');
localStorage.setItem('some-other-data', 'Having some other data here.');
localStorage.clear();

someData = localStorage.getItem('some-data');
console.log(someData);

someOtherData = localStorage.getItem('some-other-data');
console.log(someOtherData);

// Key
localStorage.setItem('someKey', 'someValue');
localStorage.key('0');

// Session Storage

// Set
sessionStorage.setItem('some-data', 'Some data here');

// Get
someData = sessionStorage.getItem('some-data');
console.log(someData);

// Remove
sessionStorage.removeItem('some-data');
someData = sessionStorage.getItem('some-data');
console.log(someData);

// Clear
sessionStorage.setItem('some-data', 'Having some data here.');
sessionStorage.setItem('some-other-data', 'Having some other data here.');
sessionStorage.clear();

someData = sessionStorage.getItem('some-data');
console.log(someData);

someOtherData = sessionStorage.getItem('some-other-data');
console.log(someOtherData);

// Local Storage & Session Storage Other data

const value = {
  property: 'propertyValue',
  fn: () => {
    console.log(this);
  },
  array: [],
  number: 10,
  object: new Object(),
};
console.log(JSON.stringify(value));
localStorage.setItem('newValue', JSON.stringify(value));
console.log(JSON.parse(localStorage.getItem('newValue')));

// /Cookies;

document.cookie = `name=Victor; expires=Wed, 26 Oct 2021 22:00:00`;
setTimeout(
  () => (document.cookie = `name=Victor; expires=Wed, 23 Oct 2021 22:00:00`),
  5000
);
// document.cookie = `name=Victor; expires=${new Date(9999, 0, 1).toUTCString()}`;
// document.cookie = 'lastname=Pavelescu; expires=';
console.log(document.cookie);

console.log(sessionStorage.getItem('dadad'));

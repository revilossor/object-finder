# Object Finder

Finds objects that match the passed in regex object.

```
// require the module...
const finder = require('object-finder');

// ...this is just a load of stuff to search in...
const stuffToSearch = [
  { name: 'Oliver', favourite: { colour: 'green', food: 'cheeseburger' }},
  { name: 'Caroline', favourite: { colour: 'red', food: 'pasta' }}
];
const otherStuffToSearch = [
  { name: 'Chris', favourite: { colour: 'blue', food: 'cheeseburger' }},
  { name: 'Tom', favourite: { colour: 'cyan', food: 'chocolate' }}
];
const moreStuffToSearch = {
  name: 'John',
  favourite: {
    colour: 'black',
    food: 'cheeseburger'
  }
};

// declare a 'comparator' object, with the fields to match and regex values...
const comparator = {
  favourite: {
    food: 'cheeseburger'
  }
};

// ...then just call the function.
const matches = finder(comparator, stuffToSearch, otherStuffToSearch, moreStuffToSearch);

console.dir(matches);

/*
  [
    { name: 'Oliver', favourite: { colour: 'green', food: 'cheeseburger' }},
    { name: 'Chris', favourite: { colour: 'blue', food: 'cheeseburger' }},
    { name: 'John', favourite: { colour: 'black', food: 'cheeseburger' }}
  ]
*/

```

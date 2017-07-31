module.exports = [
  { description: 'simple objects',
    input: {
      objects: [
        { name: 'Oliver' },
        { name: 'SomeoneElse' }
      ],
      comparator: { name: 'Oliver' }
    },
    output: [
      { name: 'Oliver' }
    ]
  },
  { description: 'nested objects',
    input: {
      objects: [
        { name: 'Oliver', favourite: { food: 'cheeseburgers', colour: 'green' } },
        { name: 'SomeoneElse', favourite: { food: 'cheeseburgers', colour: 'blue' } }
      ],
      comparator: { favourite: { colour: 'green'} }
    },
    output: [
      { name: 'Oliver', favourite: { food: 'cheeseburgers', colour: 'green' } }
    ]
  },
  { description: 'partial objects',
    input: {
      objects: [
        { name: 'Oliver', age: 999 },
        { name: 'SomeoneElse' }
      ],
      comparator: { age: 9 }
    },
    output: [
      { name: 'Oliver', age: 999 }
    ]
  },
];

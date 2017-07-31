/*eslint multiline-ternary: ["error", "always"]*/
const getMatcher = (comparator) => (target) => {          // check all keys from comparator in target for something that DOESNT match, and negate the result
  return !Object.keys(comparator).some((key) => {         // ... this is so we can use Array.some, which breaks on a true value.
    if(!target[key]) { return true; }                     // if there is no target key, then it doesnt match
    return (typeof(comparator[key]) === 'object') ?       // if the value for this comparator key is an object...
      getMatcher(comparator[key])(target[key]) :          // ...get a new matcher with the value and execute with the target value for this key ( ie, recurse )
      !target[key].toString().match([comparator[key]]);   // ...else do a regex match on the stringified target value
  });
};

module.exports = (comparator, ...objects) => [].concat(...objects).filter(getMatcher(comparator));

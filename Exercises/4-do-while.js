'use strict';

const sum = (...args) => {
  // used do while cycle
  let i = 0;
  let acc = 0;
  do {
    acc += args[i];
    i++;
  } while (i < args.length);
  return acc || 0;
};


module.exports = { sum };

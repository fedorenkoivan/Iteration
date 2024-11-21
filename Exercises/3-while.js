'use strict';

const sum = (...args) => {
  let i = 0;
  let acc = 0;
  while (i < args.length) {
    acc += args[i];
    i++;
  }
  return acc;
};

module.exports = { sum };

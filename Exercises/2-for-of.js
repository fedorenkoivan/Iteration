'use strict';

const sum = (...args) => {
  let acc = 0;
  for (const elem of args) {
    acc += elem;
  }
  return acc;
};

module.exports = { sum };

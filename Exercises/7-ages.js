'use strict';

const ages = (persons) => {
  const r = {};
  for (const name in persons) {
    const lived = persons[name]['died'] - persons[name]['born'];
    r[name] = lived;
  }
  return r;
};

module.exports = { ages };

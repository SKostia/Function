'use strict';

const generateKey = (length, possible) => {
  const base = possible.length;
  let key = '';
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * base);
    key += possible[index];
  }
  return key;
};


// Generate string of random characters
// Use Math.random() and Math.floor()
// See documentation at MDN
module.exports = { generateKey };


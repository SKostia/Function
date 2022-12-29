'use strict';

const methods = (iface) => {
  const result = [];
  for (const [key, value] of Object.entries(iface)) {
    const argCounter = value.length;
    result.push([key, argCounter]);
  }
  return result;

};


//Solution copied-pasted just to compare my code with it

// const methods = (iface) => {
//   const names = [];
//   for (const name in iface) {
//     const fn = iface[name];
//     if (typeof fn === 'function') {
//       names.push([name, fn.length]);
//     }
//   }
//   return names;
// };

// Introspect all properties of iface object and
// extract function names and number of arguments
// For example: {
//   m1: x => [x],
//   m2: function (x, y) {
//     return [x, y];
//   },
//   m3(x, y, z) {
//     return [x, y, z];
//   }
// will return: [
//   ['m1', 1],
//   ['m2', 2],
//   ['m3', 3]
// ]

module.exports = { methods };

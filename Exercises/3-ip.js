'use strict';


// Parse ip address as string, for example '10.0.0.1'
// to ['10', '0', '0', '1'] to [10, 0, 0, 1]
// and convert to Number value 167772161 with bitwise shift
// (10 << 8 << 8 << 8) + (0 << 8 << 8) + (0 << 8) + 1 === 167772161
// Use Array.prototype.reduce of for loop

/**I took solution here, because I couldn't figure out
*how to fit in the required length. Also it was dificult to understant
*how this method reduce works, I even started to
*type my question in " Metaeducation Chat", but writing that message understood
*how it is implemented and works.
*/
const ipToInt = (ip = '127.0.0.1') => {
  const fn = (res, item) => (res << 8) + parseInt(item);
  return ip.split('.').reduce(fn, 0);
};

module.exports = { ipToInt };

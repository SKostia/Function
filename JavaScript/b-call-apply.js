'use strict';

function f1(a, b) {
  console.log('f1(' + a + ', ' + b + ')');
}

const obj = { name: 'smth' };

f1(2, 3);
f1.call(null, 2, 3);

const arr = [2, 3, 5];
f1(...arr);
f1.apply(obj, arr);

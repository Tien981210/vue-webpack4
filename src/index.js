
import './css/index.css';
import './css/index.less';

const add = function add() {
  return '123';
};

console.log(add());
const promise = new Promise((resolve) => {
  setTimeout(() => {
    console.log('aaaa');
    resolve();
  }, 1000);
});
console.log(promise);

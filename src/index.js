function sum(a, b) {
  return a + b;
}

function substr(a,b) {
  return a - b;
}

function mult(a,b) {
  return a * b;
}

function fibo(n) {
    if (n < 2) return n
    return fibo(n-2) + fibo(n-1)
}

module.exports = {
  'sum' : sum,
  'substr' : substr,
  'mult' : mult,
  'fibo' : fibo
};

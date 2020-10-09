const memoize = (fn) => {
  let cache = {};
  return (...args) => {
    let argumentTaken = args[0];
    if (argumentTaken in cache) {
      console.log("Fetching from cache", argumentTaken);
      return cache[argumentTaken];
    } else {
      console.log("Calculating result", argumentTaken);
      let result = fn(argumentTaken);
      cache[argumentTaken] = result;
      return result;
    }
  };
};

const some = (n) => n + n;
const memoizedAdd = memoize(some);
console.log(memoizedAdd(3)); // calculated
console.log(memoizedAdd(3)); // cached
console.log(memoizedAdd(4)); // calculated
console.log(memoizedAdd(4)); // cached

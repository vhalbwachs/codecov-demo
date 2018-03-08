function each(collection, callback) {
  for (let i = 0; i < collection.length; i++) {
    callback(collection[i], i, collection);
  }
}
 // test

function reduce(collection, reducer, memo) {
  each(collection, (item, index, collection) => {
    memo = reducer(memo, item, index, collection);
  });
  return memo;
}

function map(collection, callback) {
  return reduce(collection, (mapped, item, index, collection) => {
    return mapped.concat([callback(item, index, collection)]);
  }, []);
}

function flatten(collection) {
  return reduce(collection, (flattened, item) => {
    if (Array.isArray(item)) {
      return flattened.concat(flatten(item));
    } else {
      return flattened.concat(item);
    }
  }, []);
}

module.exports = {
  each,
  map,
  reduce,
  flatten
};

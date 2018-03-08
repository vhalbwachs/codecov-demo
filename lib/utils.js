module.exports = {
  each(collection, callback) {
    for (let i = 0; i < collection.length; i++) {
      callback(collection[i], i, collection);
    }
  },
  map(collection, callback) {
    const mapped = new Array(collection.length);
    for (let i = 0; i < collection.length; i++) {
      mapped[i] = callback(collection[i], i, collection);
    }
    return mapped;
  },
  every(collection, predicate) {
    let i = 0;
    for (const item of collection) {
      if (predicate(item, ++i, collection) === false) {
        return false;
      }
    }
    return true;
  },
  filter(collection, predicate) {
    const filtered = [];
    let index = 0;
    for (const item of collection) {
      if (predicate(item, ++index, collection) === true) {
        filtered.push(item);
      }
    }
    return filtered;
  }
}
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
  }
}
module.exports = {
  oneEditAway(first, second) {
    if (Math.abs(first.length - second.length) > 1) {
      return false;
    }
    const shorter = first.length < second.length ? first : second;
    const longer = first.length < second.length ? second : first;
    let shorterIndex = 0;
    let longerIndex = 0;
    let foundDifference = false;
    while ((longerIndex < longer.length) && (shorterIndex < shorter.length)) {
      if (longer[longerIndex] !== shorter[shorterIndex]) {
        if (foundDifference) {
          return false;
        }
        foundDifference = true;
        if (shorter.length === longer.length) {
          shorterIndex++;
        }
      } else {
        shorterIndex++;
      }
      longerIndex++;
    }
    return true;
  }
}
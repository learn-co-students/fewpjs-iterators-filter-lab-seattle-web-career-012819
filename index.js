function findMatching(array, string) {
  return array.filter(driverName => {
    return driverName.toLowerCase() === string.toLowerCase();
  })
}

function fuzzyMatch(array, string) {
  let lengthOfString = string.length;
  return array.filter(driverName => {
    return driverName.slice(0, lengthOfString) === string;
  })
}

function matchName(array, string) {
  return array.filter(driverName => {
    return driverName.name.toLowerCase() === string.toLowerCase();
  })
}

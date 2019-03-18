const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

// function to case-insensitively match strings
function findMatching(drivers, string) {
  return drivers.filter(s => {
    return s.toLowerCase() === string.toLowerCase();
  })
}

//function to partially match substrings

function fuzzyMatch (list, partial) {
  let lengthOfName = partial.length;
  return list.filter(function (driverName) {
    return driverName.slice(0, lengthOfName) === partial;
  });
}

//function to match object values to a provided string

function matchName(drivers, name) {
  return drivers.filter(i => {
    return i.name.toLowerCase() === name.toLowerCase();
  })
}

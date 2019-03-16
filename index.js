// Code your solution here
function findMatching(drivers, name){
  return drivers.filter(n => {
    return n.toLowerCase() === name.toLowerCase();
  })
}

function fuzzyMatch (list, partialName) {
  let lengthOfName = partialName.length;
  return list.filter(function (driverName) {
    return driverName.slice(0, lengthOfName) === partialName;
  });
}

function matchName(drivers, name){
  return drivers.filter(n => {
    return n.name.toLowerCase() === name.toLowerCase();
  })
}

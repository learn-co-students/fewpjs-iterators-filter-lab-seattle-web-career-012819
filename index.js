// Code your solution here
function findMatching(drivers, target){
  return drivers.filter(driver => driver.toLowerCase() === target.toLowerCase());
}

function fuzzyMatch(drivers, target){
  return drivers.filter(driver => driver.toLowerCase().startsWith(target.toLowerCase()));
}

function matchName(driverObjs, targetName){
  return driverObjs.filter(driver => driver.name === targetName);
}

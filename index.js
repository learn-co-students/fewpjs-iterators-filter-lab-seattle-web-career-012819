// Code your solution here
function findMatching(drivers, str){
  return drivers.filter(d => {
    return d.toLowerCase() === str.toLowerCase();
  })

}
function fuzzyMatch(drivers, str){
  return drivers.filter(d => {
    return d.toLowerCase().startsWith(str.toLowerCase());
  })
}

function matchName(drivers, str){
  return drivers.filter(d => {
    return d.name === str;
  })
}

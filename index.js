function findMatching(drivers, string) {
  let matching = drivers.filter((driver) => driver.toLowerCase() == string.toLowerCase())
  return matching
}

function fuzzyMatch(drivers, partial) {
	let searchLength = partial.length;
	let list = drivers.filter((driver) => driver.slice(0, searchLength) == partial);
	return list;
}
// function fuzzyMatch(drivers, string){
//   return drivers.filter(d => {
//     return d.toLowerCase().startsWith(string.toLowerCase());
//   })
// }

function matchName(drivers, string) {
	let newDrivers = drivers.filter((driver) => driver.name == string);
	return newDrivers;
}

// function matchName(drivers, string) {
//   return drivers.filter(d => {
//     return d.name === string
//   })
// }

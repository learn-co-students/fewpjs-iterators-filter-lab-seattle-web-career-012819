// Code your solution here
function findMatching(arr, str) {
  return matched = arr.filter(e => {
    return e.toLowerCase().startsWith(str.toLowerCase())
  })
}

function fuzzyMatch(arr, str) {
  return matched = arr.filter(e => {
    return e.startsWith(str)
  })
}

function matchName(arr, str) {
  return matched = arr.filter(e => {
    return e.name.startsWith(str)
  })
}

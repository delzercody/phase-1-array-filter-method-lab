// Code your solution here
function findMatching(drivers, string) {
    // return list of drivers
    const newlist = drivers.filter(drivers => drivers.toLowerCase() === string.toLowerCase())//arrow function

    return newlist
}

function fuzzyMatch(drivers, string) {
    const driversThatMatchFirstLetter = drivers.filter(drivers => drivers.startsWith(string))
    return driversThatMatchFirstLetter
}

function matchName(drivers, string) {
    const exactMatch = drivers.filter(drivers => drivers.name === string)
    return exactMatch
}
// Code your solution here


//case insensitive match

function findMatching(array, str){
return array.filter(driver => driver.toLowerCase() === str.toLowerCase())
}


//match first letter

function fuzzyMatch(array, str){
return array.filter(driver => driver[0] === str[0])
}


//match if it has object properties

function matchName(array, str){
return array.filter(driver => driver.name === str)
}
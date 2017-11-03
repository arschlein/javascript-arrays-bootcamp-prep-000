var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}
function destructivelyAddElementToBeginningOfArray(array, element){
  var newArray = [element, ...array]
  return newArray
}

function addElementToEndOfArray(array, element){
  array.push(element);
  return array;
}
function destructivelyAddElementToEndOfArray(array, element){
  var newArray = [...array, element];
  return newArray;
}
function accessElementInArray(array, index){
  return array[index]
}
function destructivelyRemoveElementFromBeginningOfArray(array){
  return array.shift()
}
function removeElementFromBeginningOfArray(array){
  return array.slice(1)
}
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

// Code your solution in this file!
function distanceFromHqInBlocks(block){
  if (block >= 42) {
    return block - 42
  }
  else {
    return 42 - block
  }
}

function distanceFromHqInFeet(street){
  return distanceFromHqInBlocks(street) * 264
}

function distanceTravelledInFeet(street1, street2){
  if (street2 > street1){
    return (street2 - street1) * 264
  } else {
    return (street1 - street2) * 264
  }
}

function calculatesFarePrice(start, destination){
  const feet = distanceTravelledInFeet(start, destination)
  if(feet <= 400){
    return 0
  }
  else if(feet <= 2000){
      return 0.02 * (feet - 400)
    }
  else if(feet <= 2500){
    return 25
  }
  else {
    return "cannot travel that far"
  }
}

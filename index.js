// Code your solution in this file!
function distanceFromHqInBlocks(location) {
  const hq = 42;
  return Math.abs(location - hq);
}
function distanceFromHqInFeet(location) {
  return distanceFromHqInBlocks(location) * 264;
}
function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start) * 264;
}
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}

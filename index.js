const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  };
  console.log('It worked! Returned IP:' , ip);
});

fetchCoordsByIP("66.207.199.230", (error, coordinates) => {
  if (error) {
    console.log("Error Response: ", error);
    return;
  };
  console.log("The coordinates are", coordinates);
});

fetchISSFlyOverTimes({ latitude: '43.63830', longitude: '-79.43010' }, (error, flyOverTime) => {
  if (error) {
    console.log("Error Response: ", error);
    return;
  };
  console.log("The fly over times are: ", flyOverTime);
});

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  console.log(passTimes);
});
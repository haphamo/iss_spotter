const { fetchMyIP, fetchCoordsByIP } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
});


fetchCoordsByIP('', (error, coordinates) => {
  if (error) {
    console.log("Error Response: ", error);
    return;
  }
  console.log("The coordinates are", coordinates);
});
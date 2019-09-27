const request = require('request');

const fetchMyIP = function(callback) {
  request("https://api.ipify.org?format=json", (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    const ip = JSON.parse(body).ip;
    callback(null, ip);
  });
};

const fetchCoordsByIP = function(ip, callback) {
  request(`https://ipvigilante.com/${ip}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching coordinates for IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    const coordinates = {};
    coordinates["latitude"] = JSON.parse(body).data.latitude;
    coordinates["longitude"] = JSON.parse(body).data.longitude;
    callback(null, coordinates);
  });
};

const fetchISSFlyOverTimes = function(coordinates, callback) {
  const url = `http://api.open-notify.org/iss-pass.json?lat=${coordinates.latitude}&lon=${coordinates.longitude}`;
  request(url, (error, response, body) => {
  if (error) {
    callback(error, null);
    return;
  }
  if (response.statusCode !== 200) {
    const msg = `Status Code ${response.statusCode} when fetching fly over times:  ${body}`;
    callback(Error(msg), null);
    return;
  }
  const flyByTime = JSON.parse(body).response;
  callback(null, flyByTime);
  });
}

const nextISSTimesForMyLocation = function(callback) {
  // empty for now
}
module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes };
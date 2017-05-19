var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/find?units=metric&appid=9f9b9c3d25fb1bd82dab8a7b31688d00';


module.exports = {
	getTemp: function(location) {
		var encodedLocation = encodeURIComponent(location);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

		return axios.get(requestUrl).then(function(res) {
			return {
				temp: res.data.list[0].main.temp,
				location:  res.data.list[0].name
			};

		}, function(res) {
			throw new Error(res.data.message);
		});
	}
};
function getCoordinates(payloadObj) {
    
    fetchCoordinates(payloadObj).then(function(resData={}) {
        if (!resData.geonames.length) {
            document.getElementById('common-error').innerHTML = "Oops! City not found!";
            return;
        } else {
            document.getElementById('common-error').innerHTML = "";
        }
        const weatherPayloadObj = {
            latitude: resData.geonames[0].lat,
            longitude: resData.geonames[0].lng,
            date: document.getElementById('date').value
        }
        Client.getWeather(weatherPayloadObj);
    })
}

const fetchCoordinates = async (reqData = {},) => {
    reqData.city = encodeURIComponent(reqData.city);
    const res = await fetch(`http://api.geonames.org/searchJSON?q=${reqData.city}&maxRows=1&username=${reqData.username}`, reqData);
    try {
        let response = await res.json();
        return response;
    }
    catch(error) {
        console.log("error", error);
    }
}

export { getCoordinates }

function getWeather(payloadObj) {
    
    let currentDate = new Date().valueOf();
    let travelDate = new Date(payloadObj.date).valueOf();
    const millis = travelDate - currentDate;
    let dayDifference = Math.ceil((millis / (60*60*24*1000)));
    const sevenDays = 7;

    fetchKey().then(function(resData={}) {
        payloadObj = {...payloadObj, ...resData};
        if (dayDifference <= sevenDays) {
            fetchCurrentWeather(payloadObj).then(function(resData={}) {
                Client.getImage(resData);
            })
        } else {
            const days = {
                days: dayDifference
            }
            payloadObj = {...payloadObj, ...days}
            fetchFutureWeather(payloadObj).then(function(resData={}) {
                Client.getImage(resData);
            })
        }
    })
}

const fetchCurrentWeather = async (reqData = {}) => {
    const res = await fetch(`https://api.weatherbit.io/v2.0/current?lat=${reqData.latitude}&lon=${reqData.longitude}&key=${reqData.key}`);
    try {
        let response = await res.json();
        return response.data[0];
    }
    catch(error) {
        console.log("error", error);
    }
}

const fetchFutureWeather = async (reqData = {},) => {
    reqData.city = encodeURIComponent(reqData.city);
    const res = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${reqData.latitude}&lon=${reqData.longitude}&days=${reqData.days}&key=${reqData.key}`);
    try {
        let response = await res.json();
        return response.data[reqData.days - 1];
    }
    catch(error) {
        console.log("error", error);
    }
}

const fetchKey = async (reqData = {}) => {
    const res = await fetch('http://localhost:8081/getweatherbitKey')
    try {
        let response = await res.json();
        return response;
    }
    catch(error) {
        console.log("error", error);
    }
}

export { getWeather }

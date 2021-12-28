function getCoordinates(payloadObj) {
    
    fetchCoordinates(payloadObj).then(function(resData={}) {
        // const data = {
        //     'agreement'     : resData.agreement,
        //     'confidence'    : resData.confidence,
        //     'irony'         : resData.irony,
        //     'subjectivity'  : resData.subjectivity
        // }
        // Client.addData(data);
        // return data;
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

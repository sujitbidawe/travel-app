function getImage(payloadObj) {
    
    fetchKey().then(function(resData={}) {
        payloadObj = {...payloadObj, ...resData};
        fetchImage(payloadObj).then(function(resData={}) {
            const data = resData;
        })
    })

}

const fetchImage = async (reqData = {},) => {
    const conuntryObj = {
        code: reqData.country_code
    }
    findCountryCode("http://localhost:8081/getcountryname", conuntryObj).then(async function(resData={}) {
        let searchQuery = `${reqData.city_name} ${resData.country}`;
        searchQuery = encodeURIComponent(searchQuery);
        const res = await fetch(`https://pixabay.com/api/?key=${reqData.key}&q=${searchQuery}&image_type=photo`, reqData);
        try {
            let response = await res.json();
            if (response.hits.length) {
                Client.addData({imageURL: response.hits[0].webformatURL});
                return response.hits[0];
            } else {
                const payload = {...resData, ...reqData, city_name: resData.country}
                fetchImage(payload);
            }
        }
        catch(error) {
            console.log("error", error);
        }
    })
}

const fetchKey = async (reqData = {}) => {
    const res = await fetch('http://localhost:8081/getpixabayKey')
    try {
        let response = await res.json();
        return response;
    }
    catch(error) {
        console.log("error", error);
    }
}

const findCountryCode = async ( url = 'http://localhost:8081/getcountryname', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(data)
    });
    try {
        const res = await response.json();
        return res;
    } catch (error) {
        console.log("error", error);
    }
}

export { getImage }

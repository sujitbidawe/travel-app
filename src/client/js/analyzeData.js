function analyzeDataFn(dataObj) {
    
    const formdata = new FormData();
    
    formdata.append("key", dataObj.key);
    formdata.append("txt", dataObj.txt);
    formdata.append("lang", dataObj.lang);  // 2-letter code, like en es fr ...
    
    const requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };

    getAnalysis(requestOptions).then(function(resData={}) {
        const data = {
            'agreement'     : resData.agreement,
            'confidence'    : resData.confidence,
            'irony'         : resData.irony,
            'subjectivity'  : resData.subjectivity
        }
        Client.addData(data);
        return data;
    })
}

const getAnalysis = async (reqData = {},) => {
    const res = await fetch("https://api.meaningcloud.com/sentiment-2.1", reqData);
    try {
        let response = await res.json();
        return response;
    }
    catch(error) {
        console.log("error", error);
    }
}

export { analyzeDataFn }

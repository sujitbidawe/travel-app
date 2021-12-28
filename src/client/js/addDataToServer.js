function addData(dataObj) {
    
    postDataToServer("http://localhost:8081/adddata", dataObj).then((data) => {
        Client.getData(data);
    })
}

// Function to add data to server
const postDataToServer = async ( url = '', data = {}) => {
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
        const newData = await data;
        return newData;
    } catch (error) {
        console.log("error", error);
    }
}
export { addData }

function getData() {
    
    getDataFromServer("http://localhost:8081/all");

}

// Function to get data from server
const getDataFromServer = async ( url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'GET',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    });
    try {
        const allData = await response.json();
        return allData;
    } catch (error) {
        console.log("error", error);
    }
};

export { getData }

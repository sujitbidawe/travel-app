function getData() {
    
    getDataFromServer("http://localhost:8081/all").then((data) => {
        updateUI(data);
    })

}

function updateUI(data){
    document.getElementById('res1').innerHTML = data.agreement;
    document.getElementById('res2').innerHTML = data.confidence;
    document.getElementById('res3').innerHTML = data.irony;
    document.getElementById('res4').innerHTML = data.subjectivity;   
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
        console.log(allData);
        return allData;
    } catch (error) {
        console.log("error", error);
    }
};

export { getData }

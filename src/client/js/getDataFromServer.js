function getData() {
    
    getDataFromServer("http://localhost:8081/all").then((resData) => {
        updateUI(resData);
    })

}

function updateUI(data){

    let docFragment = document.createDocumentFragment();
    let div1 = document.createElement('div');
    let div2 = document.createElement('div');
    for (var key in data) {
        if (data.hasOwnProperty(key)) {
            if (key === 'imageURL') {
                let img = document.createElement('img');
                img.setAttribute("src", data[key]);
                div2.appendChild(img);
            } else {
                let span = document.createElement('span');
                span.id = key;
                span.innerText = `${key.charAt(0).toUpperCase()}${key.substring(1)}: ${data[key].toString().toUpperCase()}`;
                div1.appendChild(span);
            }
        }
    }
    docFragment.appendChild(div1);
    docFragment.appendChild(div2);
    let section = document.getElementById("card");
    section.appendChild(docFragment);
    
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

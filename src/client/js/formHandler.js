function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let city = document.getElementById('name').value
    if (city.length) {
        // document.getElementById('name').style = "border:2px solid #666666"
        // document.getElementById('error').innerHTML = "";
    } else {
        // document.getElementById('name').style = "border:2px solid red"
        // document.getElementById('error').innerHTML = "Please enter a city to proceed further.";
        return;
    }
    
    fetch('http://localhost:8081/getgeonamesuser')
    .then(res => {
        return res.json()
    })
    .then(function(data) {
        data["city"] = city;
        Client.getCoordinates(data)
    })
}

export { handleSubmit }

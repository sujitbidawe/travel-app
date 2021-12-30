function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form fields
    let city = document.getElementById('name').value;
    let date = document.getElementById('date').value;
    if (city.length) {
        document.getElementById('name').style = "border:2px solid #666666"
        document.getElementById('city-error').innerHTML = "";
    } else {
        document.getElementById('name').style = "border:2px solid red"
        document.getElementById('city-error').innerHTML = "Please enter a city to proceed further.";
        return;
    }

    if (date.length) {
        document.getElementById('date').style = "border:2px solid #666666"
        document.getElementById('date-error').innerHTML = "";
    } else {
        document.getElementById('date').style = "border:2px solid red"
        document.getElementById('date-error').innerHTML = "Please enter a date to proceed further.";
        return;
    }

    Client.addData({city: city, date: date});
    
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

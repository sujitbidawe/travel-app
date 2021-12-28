function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    if (formText.length) {
        document.getElementById('name').style = "border:2px solid #666666"
        document.getElementById('error').innerHTML = "";
    } else {
        document.getElementById('name').style = "border:2px solid red"
        document.getElementById('error').innerHTML = "Please enter an input to proceed further.";
        return;
    }
    
    fetch('http://localhost:8081/generateformdata')
    .then(res => {
        return res.json()
    })
    .then(function(data) {
        data["txt"] = formText;
        data["lang"] = "en";
        Client.analyzeDataFn(data)
    })
}

export { handleSubmit }

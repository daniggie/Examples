$('form').submit(async event => {
    event.preventDefault();

    // Serialize the form
    let formData = $('form').serializeJSON();                

    //Build the POST request
    let reqOptions = {method: 'POST', url: '/preparation-temp'}
    reqOptions['body'] = JSON.stringify(formData);

    // Result of POST request
    let result = await singleHttpRequest(reqOptions);

    if (result.http_code === 200) {
        window.location.replace("/");
    }
});
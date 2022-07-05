let result = await singleHttpRequest({
    method: 'GET',
    url: '/api/v1/counters-temp/all?OPENING_DATE=' + openingDate 
    + '&SHIFT=' + shift
    + '&LOCATION=' + location
    + '&RESTAURANT=' + restaurant
});

if (result.data) {
    // Parse the result of request
    result = JSON.parse(result.data);
    console.log(result)
}
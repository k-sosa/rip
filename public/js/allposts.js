$.ajax({
    url: 'https://developers.zomato.com/api/v2.1/locations?query=' + cityName,
    method: "GET",
    headers: {
        'user-key': 'b5075be7d6cf56502c175fb9e26c2396'
    }
}).then(function (response) {
    console.log(response);
})
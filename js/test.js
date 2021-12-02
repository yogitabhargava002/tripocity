// var cityName = prompt("Please enter City name", "<name goes here>");
function hotelDetails(cityName){
    if (cityName!= null) {
        const settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://hotels4.p.rapidapi.com/locations/v2/search?query="+cityName+"&locale=en_US&currency=INR",
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "hotels4.p.rapidapi.com",
                "x-rapidapi-key": "b0c2038476msh5eafbb3d1ee5b77p1accc4jsn6d571ee650a7"
            }
        };

        $.ajax(settings).done(function (response) {
            var hotels = response.suggestions[1].entities
            console.log(hotels);
            
            for (let i = 0; i < hotels.length; i++) {
                // console.log(i);
                $('#cityDetails').append(i+1,'. ',hotels[i].name,' ',hotels[i].destinationId,'<hr>');
            }
        });
    }
}


const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://hotels4.p.rapidapi.com/reviews/v2/list?hotelId=1081442560&reviewOrder=date_newest_first&tripTypeFilter=all",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "hotels4.p.rapidapi.com",
		"x-rapidapi-key": "b0c2038476msh5eafbb3d1ee5b77p1accc4jsn6d571ee650a7"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});

// const settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://hotels4.p.rapidapi.com/properties/get-details?id=1081442560&checkIn=2020-01-08&checkOut=2020-01-15&adults1=1&currency=USD&locale=en_US",
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "hotels4.p.rapidapi.com",
// 		"x-rapidapi-key": "b0c2038476msh5eafbb3d1ee5b77p1accc4jsn6d571ee650a7"
// 	}
// };

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });



// const settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://hotels-com-provider.p.rapidapi.com/v1/hotels/search?checkin_date=2022-03-26&checkout_date=2022-03-27&sort_order=STAR_RATING_LOWEST_FIRST&destination_id=1708350&adults_number=1&locale=en_US&currency=INR&children_ages=4%2C0%2C15&price_min=10&star_rating_ids=3%2C4%2C5&accommodation_ids=20%2C8%2C15%2C5%2C1&price_max=500&page_number=1&theme_ids=14%2C27%2C25&amenity_ids=527%2C2063&guest_rating_min=4",
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "hotels-com-provider.p.rapidapi.com",
// 		"x-rapidapi-key": "b0c2038476msh5eafbb3d1ee5b77p1accc4jsn6d571ee650a7"
// 	}
// };

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });


// JSON object
var rides = [{
    "id": 1,
    "name": "Roller Coaster",
    "price": 30,
    "openingDays": ["Mon","Tues","Fri"],
    "childAccess": true
},

 {
    "id": 2,
    "name": "Carousel",
    "price": 30,
    "openingDays": ["Fri", "Sat"],
    "childAccess": true
},

    {
        "id": 3,
        "name": "Drop",
        "price": 30,
        "openingDays": ["Wed", "Fri", "Sun"],
        "childAccess": false
    }
]

function doublePrices(rides){
    for (var ride in rides) {
        if (ride!=1) {
            rides[ride].price = rides[ride].price * 2;
        }
    }
    return rides;
}

var amusementRidesDouble = doublePrices(rides);

function debugAmusementRides(rides) {
    listOfRides=[];
    for (var ride in rides) {
        listOfRides[ride]=(rides[ride].name+ " "+ rides[ride].price)
    }
    return listOfRides;
}

var logAmusementRides= debugAmusementRides(amusementRidesDouble);

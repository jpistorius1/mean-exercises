// number 1

var newDataPieces = function(addName, addStreet, addCity, addZip) {
this.name = addName;
this.street = addStreet;
this.city = addCity;
zip = addZip; 
};

var customerInformation = new newDataPieces('John', '123 anywhere st', 'Sandy', '84020');
console.log(customerInformation);

// number 2

var peanuts = {
 name: 'Charlie Brown',
 type: 'blockhead',
 enemy: 'Kicking the football',
 
};

var enemyIs = peanuts.enemy;
console.log(enemyIs);

// number 3

var restarauntCount = {
  store1: "McDonalds",
  store2: "Wendys",
  store3: "Burger King",
}; 
Object.prototype.count = function () {
    var count = 0;
    for(var prop in this) {
        if(this.hasOwnProperty(prop))
            count = count + 1;
    }
    return count;
}

var objectCounter = restarauntCount.count();
console.log(objectCounter + restarauntCount) 

// number 4

var tournamentResults = function(name, place){
	this.name = name,
	this.place = place,
};

var tournamentTimes = new tournamentResults (
   'Aaron', 3;
    'Jaquelin', 4;
    'Denise', 7.6;
    'Blake:', 3.01;
    'O\'Shaughnessy', undefined;
    'Timothy', 11;
)
console.log tournamentResults();
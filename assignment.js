//feetToMile

function feetToMile(feet) {

    if (isNaN(feet) || feet == null || feet <= 0) {

        console.log("Please enter a valid number!");

    } else {
        var mile = feet * 0.00018939;
        return mile;
    }

}

var resultOfMile = feetToMile(50000);

console.log(resultOfMile);


///end of feetToMile 


//woodCalculator

function woodCalculator(chair, table, bed) {

    var amountOfChair = chair * 1;
    var amountOfTable = table * 3;
    var amountOfBed = bed * 5;

    var total = amountOfChair + amountOfTable + amountOfBed;

    return total;
}

var ResultOfWood = woodCalculator(1, 2, 5);

console.log(ResultOfWood);


//end of woodCalculator



//brickCalculator

function brickCalculator(floor) {



    if (isNaN(floor) || floor == null || floor <= 0) {

        console.log("Please enter a valid number!");

    } else {
        var totalbrick = 0;
        if (floor <= 10) {

            var totalbrick = floor * 15000;

        } else if (floor <= 20) {

            var totalbrick = 30000 + floor * 12000;

        } else {

            var totalbrick = 70000 + floor * 10000;
        }


        return totalbrick;
    }


}


var resultOfBrickCalculator = brickCalculator(12);

console.log(resultOfBrickCalculator);


// end of brickCalculator


//tinyFriend
function tinyFriend(name) {

    var smallestname = 0;
    var indexOfName = 0;

    for (var i = 0; i < name.length; i++) {

        var crantsmolestName = name[i].length


        if (smolestName > crantsmolestName) {

            smolestName = crantsmolestName;
            indexOfName = name[i];
        }

    }
    return name[indexOfName];
}

var rasult = tinyFriend(["rasel", "ta", "fosil"]);

console.log(rasult);
//feetToMile

function feetToMile(feet) {

    if (isNaN(feet) || feet == null || feet <= 0) {

        console.log("Please enter a valid number!");

    } else {
        var mile = feet * 0.00018939;
        return mile;
    }

}

var resultOfMile = feetToMile(6000);

console.log(resultOfMile);


///end of feetToMile 


//woodCalculator

function woodCalculator(chair, table, bed) {

    var amountOfChair = chair * 1;
    var amountOfTable = table * 3;
    var amountOfBed = bed * 5;

    var totalWood = amountOfChair + amountOfTable + amountOfBed;


    return totalWood;
}

var ResultOfWood = woodCalculator(2, 2, 5);

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


var resultOfBrickCalculator = brickCalculator(21);

console.log(resultOfBrickCalculator);


// end of brickCalculator


//tinyFriend
function tinyFriend(name) {

    var smallest = name[0].length;
    var smallestName = name[0];

    for (var i = 0; i < name.length; i++) {

        if (name[i].length <= 0 || undefined) {

            console.log("Your field is empty")

        } else {

            if (smallest > name[i].length) {

                smallest = name[i].length;
                smallestName = name[i];

            }

        }




    }
    return smallestName;
}

var rasult = tinyFriend(["re", "t", "fosi"]);

console.log(rasult);
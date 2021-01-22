


function kilometerToMeter(km) {
   var miter = km * 1000;
   return miter;
}

function budgetCalculator(watch, mobile, laptop) {
    watch = watch * 50;
    mobile = mobile * 100;
    laptop = laptop * 500;
    var totalBudget = watch + mobile + laptop;
    return totalBudget;
}

function hotelCost(night) {
    var cost = 0;
    if (night <= 10) {
        cost = night * 100;
    } else if (night <= 20) {
        var firstPart = 10 * 100;
        var remaining = night - 10;
        var secoundPart = remaining * 80;
        var cost = firstPart + secoundPart;
    } else {
        firstPart = 10 * 100;
        secoundPart = 10 * 80;
        remaining = night - 20;
       var thirdPart = remaining * 50;
       cost = firstPart + secoundPart + thirdPart;
    }
    return cost;
}

function megaFriend(arr) {
    var longestWord = "";
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length > longestWord.length) {
            longestWord = arr[i];
        }
    }
    return longestWord;
}

var beachList = ["Plage de la Beach", "Sunrise Beach", "Plage Lava", "Beach Paradise", "La Plage de Road"];
var monthList = ["May", "June", "July", "August", "September", "October", "November", "December", "January", "Febuary", "March", "April"];
var activeList = ["Hiking", "Snorkeling", "Dancing", "Surfing", "Wind-Sailing", "Fishing", "Many More"];

function leftSelectorBeaches() {
    var currentBeach = document.getElementById("beaches").innerHTML;
    for (i = beachList.length; i >= 0; i--) {
        if (beachList[i] == currentBeach) {

            if (i == 0) {
                document.getElementById("beaches").innerHTML = beachList[(beachList.length - 1)];
                break;
            } else {
                document.getElementById("beaches").innerHTML = beachList[i-1];
                break;
            }
        }
    }
}

function leftSelectorMonths() {
    var currentMonth = document.getElementById("months").innerHTML;
    for (i = monthList.length; i >= 0; i--) {
        if (monthList[i] == currentMonth) {

            if (i == 0) {
                document.getElementById("months").innerHTML = monthList[(monthList.length - 1)];
                break;
            } else {
                document.getElementById("months").innerHTML = monthList[i-1];
                break;
            }
        }
    }
}

function rightSelectorBeaches() {
    var currentBeach = document.getElementById("beaches").innerHTML;
    for (i = 0; i < beachList.length; i++) {
        if (beachList[i] == currentBeach) {
            if (i == (beachList.length - 1)) {
                document.getElementById("beaches").innerHTML = beachList[0];
                break;
            } else {
                document.getElementById("beaches").innerHTML = beachList[i+1];
                break;
            }
        }
    }
}

function rightSelectorMonths() {
    var currentMonth = document.getElementById("months").innerHTML;
    for (i = 0; i < monthList.length; i++) {
        if (monthList[i] == currentMonth) {
            if (i == (monthList.length - 1)) {
                document.getElementById("months").innerHTML = monthList[0];
                break;
            } else {
                document.getElementById("months").innerHTML = monthList[i+1];
                break;
            }
        }
    }
}

function leftSelectorActives() {
    var currentactive = document.getElementById("actives").innerHTML;
    for (i = activeList.length; i >= 0; i--) {
        if (activeList[i] == currentactive) {
            if (i == 0) {
                document.getElementById("actives").innerHTML = activeList[(activeList.length - 1)];
                break;
            } else {
                document.getElementById("actives").innerHTML = activeList[i-1];
                break;
            }
        }
    }
}

function rightSelectorActives() {
    var currentactive = document.getElementById("actives").innerHTML;
    for (i = 0; i < activeList.length; i++) {
        if (activeList[i] == currentactive) {
            if (i == (activeList.length - 1)) {
                document.getElementById("actives").innerHTML = activeList[0];
                break;
            } else {
                document.getElementById("actives").innerHTML = activeList[i+1];
                break;
            }
        }
    }
}

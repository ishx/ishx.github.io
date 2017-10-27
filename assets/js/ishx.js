// Display a Clock
function startTime() {
    var today = new Date();
    var year = today.getFullYear();
    var mon = today.getMonth();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('ishxClock').innerHTML =
    h + ":" + m;
    document.getElementById('ishxCalendar').innerHTML =
    mon2str(mon) + "," + year;
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

// turn number of month into string
function mon2str(i) {
    var monDict=[
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    return monDict[i];
}
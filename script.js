// Set target date 3 days from now
var target_mili_sec = new Date().getTime() + (3 * 24 * 60 * 60 * 1000);

function timer() {
    var now_mili_sec = new Date().getTime();
    var remaining_sec = Math.floor((target_mili_sec - now_mili_sec) / 1000);

    if (remaining_sec < 0) {
        document.querySelector("#day").innerHTML = "00";
        document.querySelector("#hour").innerHTML = "00";
        document.querySelector("#min").innerHTML = "00";
        document.querySelector("#sec").innerHTML = "00";
        return;
    }

    var day = Math.floor(remaining_sec / (3600 * 24));
    var hour = Math.floor((remaining_sec % (3600 * 24)) / 3600);
    var min = Math.floor((remaining_sec % 3600) / 60);
    var sec = Math.floor(remaining_sec % 60);

    document.querySelector("#day").innerHTML = day < 10 ? "0" + day : day;
    document.querySelector("#hour").innerHTML = hour < 10 ? "0" + hour : hour;
    document.querySelector("#min").innerHTML = min < 10 ? "0" + min : min;
    document.querySelector("#sec").innerHTML = sec < 10 ? "0" + sec : sec;
}

// Update every second
setInterval(timer, 1000);

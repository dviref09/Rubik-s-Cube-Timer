function convertMilliSecondsToTime(num_seconds, timeZone) {
    hours = (((num_seconds - (num_seconds % 3600000)) / 3600000)%24) + timeZone;
    minutes = ((num_seconds % 3600000) - (num_seconds % 60000)) / 60000;
    seconds =
        ((num_seconds % 3600000) - minutes * 60000 - (num_seconds % 1000)) /
        1000;
    milliseconds = ((num_seconds % 3600000) % 60000) % 1000;
    return hours + " : " + minutes + " : " + seconds + "." + milliseconds;
}

function time() {
    let time = new Date();
    const timeStars = time.getTime();
    if (start != 0){
        clearInterval(timer)
    }if (start == 0 || typeof start === "undefined") {
        var timer = setInterval(function () {
            var start = 1
            let time = new Date();
            document.getElementById("time").innerHTML = convertMilliSecondsToTime(
                time.getTime() - timeStars, 0
            );
        }, 1);
    }
}

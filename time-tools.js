function convertMilliSecondsToTime(num_seconds) {
    hours = (num_seconds - (num_seconds % 3600000)) / 3600000;
    minutes = ((num_seconds % 3600000) - (num_seconds % 60000)) / 60000;
    seconds =
        ((num_seconds % 3600000) - minutes * 60000 - (num_seconds % 1000)) /
        1000;
    milliseconds = ((num_seconds % 3600000) % 60000) % 1000;
    return hours + " : " + minutes + " : " + seconds + "." + milliseconds;
}

setInterval(function () {
    let time = new Date();
    document.getElementById("time").innerHTML = convertMilliSecondsToTime(
        time.getTime()
    );
}, 1);

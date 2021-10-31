function convertSecondsToTime(num_seconds) {
    hours = (num_seconds - (num_seconds % 3600)) / 3600;
    minutes = ((num_seconds % 3600) - (num_seconds % 60)) / 60;
    seconds = num_seconds - (hours * 3600 + minutes * 60);
    return hours + " : " + minutes + " : " + seconds;
}
document.write(convertSecondsToTime(3600 * 7 + 678));

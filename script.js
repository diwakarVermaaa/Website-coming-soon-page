
// Set the countdown date as 2 days from now
var countDownDate = new Date().getTime() + (2 * 24 * 60 * 60 * 1000);  // 2 days in milliseconds

// Update the countdown every 1 second
var x = setInterval(function () {
    // Get the current time
    var now = new Date().getTime();

    // Calculate the distance between now and the countdown date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the respective HTML elements using their IDs
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    // If the countdown is over, stop the timer and display a message
    if (distance < 0) {
        clearInterval(x);
        document.querySelector(".context").innerHTML = "<h1>Launch Time Reached!</h1>";
    }
}, 1000);

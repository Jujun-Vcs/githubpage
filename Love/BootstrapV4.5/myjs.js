window.onload = function name() {
    var username;
    username = prompt("What's your name?", "Jujun Junaedi");
    if (username != null && username != "" && username != " ") {
        document
            .getElementById("name")
            .innerHTML = username;
    } else if (username == "" || username == " ") {
        document
            .getElementById("name")
            .innerHTML = "Unknown";
    } else {
        name();
    }
}

var myDate = new Date();
var hrs = myDate.getHours();

var greet;

if (hrs < 12) {
    greet = "Good Morning";
} else if (hrs >= 12 && hrs <= 17) 
    greet = "Good Afternoon";
else if (hrs >= 17 && hrs <= 24) 
    greet = "Good Evening";

document
    .getElementById("sumping")
    .innerHTML = "Hello, " + greet;
// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function() {

    const flightStatus = document.getElementById("flightStatus");

    const flightScreen = document.getElementById("shuttleBackground");

    const takeOff = document.getElementById("takeoff");

    const image = document.getElementById("rocket");

    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");

    takeOff.addEventListener("click", event => {
        const response = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if(response) {
            //status changed to shuttle in flight

            flightStatus.innerHTML = "Shuttle in flight.";
            //changing background color

            flightScreen.style.backgroundColor = "blue";
            //increasing shuttle height - text

            let height = spaceShuttleHeight.innerHTML;
            let numberHeight = parseInt(height);
            numberHeight += 10000;
            spaceShuttleHeight.innerHTML = `${numberHeight}`;

            //increasing shuttle height - css


        }
    });

    const land = document.getElementById("landing");
    land.addEventListener("click", event => {
        window.alert("The shuttle is landing. Landing gear engaged.");

        flightStatus.innerHTML = "The shuttle has landed.";

        flightScreen.style.backgroundColor = "green";

        spaceShuttleHeight.innerHTML = "0";

    });

    const abort = document.getElementById("missionAbort");
    abort.addEventListener("click", event => {
        const response = window.confirm("Confirm that you want to abort the mission.");
        if(response) {

            flightStatus.innerHTML = "Mission aborted.";

            flightScreen.style.backgroundColor = "green";

            spaceShuttleHeight.innerHTML = "0";
        }
    });

    const up = document.getElementById("up");
    up.addEventListener("click", event => {

        rocket.style.position = "absolute";
        let current = rocket.style.bottom;
        let sliced = current.slice(0,-2);
        let numberSliced = parseInt(sliced);
        numberSliced += 10;
        rocket.style.bottom = `${numberSliced}px`;

    });

    const down = document.getElementById("down");
    down.addEventListener("click", event => {

        rocket.style.position = "absolute";
        let current = rocket.style.bottom;
        let sliced = current.slice(0,-2);
        let numberSliced = parseInt(sliced);
        numberSliced -= 10;
        rocket.style.bottom = `${numberSliced}px`;
    });

});

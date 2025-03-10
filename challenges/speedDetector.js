function speedDetector() {
    let speed = prompt("Enter the speed of the car:");
    speed = Number(speed);

    if (isNaN(speed) || speed < 0) {
        console.log("Invalid input! Please enter a valid speed.");
        return;
    }

    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < speedLimit) {
        console.log("Ok");
    } else {
        let points = Math.floor((speed - speedLimit) / kmPerPoint);
        if (points > 12) {
            console.log("License suspended");
        } else {
            console.log(`Points: ${points}`);
        }
    }
}

// Run function
speedDetector();

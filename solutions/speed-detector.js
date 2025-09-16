// Function to check car speed and assign demerit points
function speedDetector(speed) {
    const speedLimit = 70;     // allowed limit
    const kmPerPoint = 5;      // every 5km/s = 1 point

    if (speed < speedLimit) {
        console.log("Ok");     // under limit
    } else {
        // Calculate demerit points
        const points = Math.floor((speed - speedLimit) / kmPerPoint);
        if (points > 12) {
            console.log("License suspended");
        } else {
            console.log("Points:", points);
        }
    }
}

// Test cases
speedDetector(65);  // Ok
speedDetector(80);  // Points: 2
speedDetector(135); // License suspended

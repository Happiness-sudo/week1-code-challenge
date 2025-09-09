// Challenge 2: Speed Detector

function speedDetector(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < speedLimit) {
        console.log("Ok");
    } else {
        const points = Math.floor((speed - speedLimit) / kmPerPoint);
        if (points > 12) {
            console.log("License suspended");
        } else {
            console.log("Points:", points);
        }
    }
}

speedDetector(65);  
speedDetector(80);  
speedDetector(135); 

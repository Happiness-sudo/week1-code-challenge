// Function to determine grade based on marks
function studentGrade(marks) {
    // Validate input range
    if (marks < 0 || marks > 100) {
        return "Invalid input";
    }
    // Grade boundaries
    if (marks > 79) {
        return "A";
    } else if (marks >= 60) {
        return "B";
    } else if (marks >= 49) {
        return "C";
    } else if (marks >= 40) {
        return "D";
    } else {
        return "E";
    }
}

// Test cases
console.log(studentGrade(85)); // A
console.log(studentGrade(73)); // B
console.log(studentGrade(55)); // C
console.log(studentGrade(45)); // D
console.log(studentGrade(20)); // E

function getGrade(marks) {
    if (marks > 79) return 'A';
    else if (marks >= 60) return 'B';
    else if (marks >= 50) return 'C';
    else if (marks >= 40) return 'D';
    else return 'E';
}

// Example usage:
let marks = parseInt(prompt("Enter student marks (0-100): "));
console.log(`Grade: ${getGrade(marks)}`);

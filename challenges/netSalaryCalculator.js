function netSalaryCalculator() {
    let basicSalary = Number(prompt("Enter your basic salary:"));
    let benefits = Number(prompt("Enter your benefits:"));

    if (isNaN(basicSalary) || isNaN(benefits) || basicSalary < 0 || benefits < 0) {
        console.log("Invalid input! Enter valid numbers.");
        return;
    }

    let grossSalary = basicSalary + benefits;

    // PAYE Tax Calculation
    let tax;
    if (grossSalary <= 24000) {
        tax = grossSalary * 0.1;
    } else if (grossSalary <= 32333) {
        tax = grossSalary * 0.25;
    } else {
        tax = grossSalary * 0.3;
    }

    // NHIF Deduction
    let nhif = grossSalary <= 5999 ? 150 : grossSalary <= 7999 ? 300 : grossSalary <= 11999 ? 400 : 600;

    // NSSF Deduction
    let nssf = grossSalary * 0.06;

    let netSalary = grossSalary - (tax + nhif + nssf);

    console.log(`Gross Salary: ${grossSalary}`);
    console.log(`PAYE Tax: ${tax}`);
    console.log(`NHIF: ${nhif}`);
    console.log(`NSSF: ${nssf}`);
    console.log(`Net Salary: ${netSalary}`);
}

// Run function
netSalaryCalculator();

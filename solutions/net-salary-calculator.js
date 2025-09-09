function calculateNSSF(basicSalary) {
    return Math.min(basicSalary * 0.06, 1080);
}

function calculateNHIF(grossSalary) {
    if (grossSalary <= 5999) return 150;
    else if (grossSalary <= 7999) return 300;
    else if (grossSalary <= 11999) return 400;
    else if (grossSalary <= 14999) return 500;
    else if (grossSalary <= 19999) return 600;
    else if (grossSalary <= 24999) return 750;
    else if (grossSalary <= 29999) return 850;
    else if (grossSalary <= 34999) return 900;
    else if (grossSalary <= 39999) return 950;
    else if (grossSalary <= 44999) return 1000;
    else if (grossSalary <= 49999) return 1100;
    else if (grossSalary <= 59999) return 1200;
    else if (grossSalary <= 69999) return 1300;
    else if (grossSalary <= 79999) return 1400;
    else if (grossSalary <= 89999) return 1500;
    else if (grossSalary <= 99999) return 1600;
    else return 1700;
}

function calculatePAYE(taxableIncome) {
    if (taxableIncome <= 24000) return taxableIncome * 0.1;
    else if (taxableIncome <= 32333) return taxableIncome * 0.25;
    else return taxableIncome * 0.3;
}

function netSalaryCalculator(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    const nssf = calculateNSSF(basicSalary);
    const taxableIncome = grossSalary - nssf;
    const payee = calculatePAYE(taxableIncome);
    const nhif = calculateNHIF(grossSalary);
    const netSalary = grossSalary - (nssf + nhif + payee);

    console.log("Gross Salary:", grossSalary);
    console.log("NSSF Deduction:", nssf);
    console.log("NHIF Deduction:", nhif);
    console.log("PAYE (Tax):", payee);
    console.log("Net Salary:", netSalary);
}

netSalaryCalculator(50000, 10000);

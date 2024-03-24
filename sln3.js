const prompt=require('prompt-sync')({sigint:true})
//Function to calculate Payee (Tax) based on monthlypay
function calculateTax(monthlyPay) {
    if (monthlyPay <= 24000) {
        return 0.10;
    } else if (monthlyPay >= 24001 && monthlyPay <= 32333 ) {
        return  0.25;
    } else if (monthlyPay >= 32334 && monthlyPay <= 500000 ) {
        return 0.30;
    } else if (monthlyPay >= 500001 && monthlyPay <= 800000) {
        return 0.325;
    } else {
        return 0.35;
    }
}

// Function to calculate NHIF deductions based on gross salary
function calculateNHIFDeductions(grossSalary) {
    let nhifDeductions
    // Calculate NHIF deductions based on the provided rates
    // You can update these rates as needed
       if (grossSalary < 5999) {
    nhifDeductions = 150;
} else if (grossSalary <= 7999) {
    nhifDeductions = 300;
} else if (grossSalary <= 11999) {
    nhifDeductions = 400;
} else if (grossSalary <= 14999) {
    nhifDeductions = 500;
} else if (grossSalary <= 19999) {
    nhifDeductions = 600;
} else if (grossSalary <= 24999) {
    nhifDeductions = 750;
} else if (grossSalary <= 29999) {
    nhifDeductions = 850;
} else if (grossSalary <= 34999) {
    nhifDeductions = 900;
} else if (grossSalary <= 39999) {
    nhifDeductions = 950;
} else if (grossSalary <= 44999) {
    nhifDeductions = 1000;
} else if (grossSalary <= 49999) {
    nhifDeductions = 1100;
} else if (grossSalary <= 59999) {
    nhifDeductions = 1200;
} else if (grossSalary <= 69999) {
    nhifDeductions = 1300;
} else if (grossSalary <= 79999) {
    nhifDeductions = 1400;
} else if (grossSalary <= 89999) {
    nhifDeductions = 1500;
} else {
    nhifDeductions = 1700;
}
return nhifDeductions;
}

function calculateNSSF(grossSalary) {
    let NSSFContributionEmployee 
    let NSSFContributionEmployer  
 // Check if the gross salary is within Tier I (up to 7,000)
    if (grossSalary <= 7000) {
        NSSFContributionEmployee = grossSalary * 0.06;
        NSSFContributionEmployer = grossSalary * 0.06;
    }
    // Check if the gross salary is within Tier II (7,001 - 36,000
    else if (grossSalary <= 36000) {
        NSSFContributionEmployee = 420; // 6% of 7000
        NSSFContributionEmployer = 420; // 6% of 7000
    } 
    // If the gross salary is above Tier II, continue with the standard 6% contribution rate
    else {
        NSSFContributionEmployee = grossSalary * 0.06;
        NSSFContributionEmployer = grossSalary * 0.06;
    }  
return NSSFContributionEmployee
}
function calculateNetSalary(basicSalary, benefits) {

    const totalTax= calculateTax(basicSalary)* basicSalary
console.log(totalTax)
    const PAYE= totalTax-2400
    const grossSalary = basicSalary + benefits;
    // Calculate NHIF deduction


    const nhifDeduction =calculateNHIFDeductions(grossSalary);
    // Calculate calculateNSSF pay for NSSF contributions

    // Calculate NSSF for Tier I and Tier II
    const nssfContributions = calculateNSSF(basicSalary);
    
    // Calculate total deductions -NHIF + NSSF
    const totalDeductions = nhifDeduction + nssfContributions+ PAYE
    const netSalary = basicSalary - totalDeductions;

    return netSalary;
}
const benefits=parseInt(prompt("enter the benefits; "))
const basicSalary=parseInt(prompt("enter the basic salary; "))

console.log(calculateNetSalary(basicSalary,benefits))


let monthlyEmi = document.querySelector(".monthlyEmi");
// console.log(monthlyEmi);
let principalAmount = document.querySelector(".principalAmount");
let interestAmount = document.querySelector(".interestAmount");
let totalAmount = document.querySelector(".totalAmount");
//console.log(principalAmount);

let loanTenure = document.querySelector(".loanTenure");
let rateOfInterest = document.querySelector(".rateOfInterest");

//console.log(loanTenure);
let emiCalcButton = document.querySelector(".emiCalcBtn");


let loanAmount = document.querySelector(".loanAmount");

//rate of interest


function calculate() {
    principalAmount.innerHTML = loanAmount.value;

    //emi = p * r * ( 1 + r)^n / ( 1 + r)^n - 1
    /*   

    */
    //let ratePowerMonth = Math.pow((1 + rateOfInterest), loanTenure);
    let ratePowerMonthTop = Math.pow((1 + 0.0075), 60);
    let ratePowerMonthBottom = ratePowerMonthTop - 1;

    let ratePowerMonth = ratePowerMonthTop / ratePowerMonthBottom;

    console.log(ratePowerMonthTop);
    console.log(ratePowerMonthBottom);
    console.log(ratePowerMonth);

    //rateOfInterest
    rateOfInterest = rateOfInterest.value;
    rateOfInterest = (rateOfInterest / 12) / 100;
    //console.log(rateOfInterest);


    //emi per month
    let emi;
    emi = Math.floor((principalAmount.innerHTML) * rateOfInterest * ratePowerMonth);
    // console.log(emi);
    monthlyEmi.innerHTML = emi;

    //Total amount
    loanTenure = loanTenure.value;
    let totalamt = emi * loanTenure;
    totalAmount.innerHTML = totalamt;

    //Interest Amount


}
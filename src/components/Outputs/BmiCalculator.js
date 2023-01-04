const BMI = function(weight, height)  {
    const bmi = (weight / ((height/100)*(height/100))).toFixed(2);
    return bmi;
}

export default BMI;
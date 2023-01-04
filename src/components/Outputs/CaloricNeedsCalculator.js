const CaloricNeeds = function(gender, height, weight, age, lifeStyle)  {
    var PAL;
    if (lifeStyle === 'low') {
        PAL = 1.3;
    } else if (lifeStyle === 'medium') {
        PAL = 1.4;
    } else if (lifeStyle === 'high') {
        PAL = 1.5;
    } else if (lifeStyle === 'veryHigh') {
        PAL = 1.7;
    }
    console.log(PAL); 
    var PPM;
    var CPM;   
    if (gender === 'woman') {
        //Miffin's formula to calculate basic caloric needs for woman
        PPM = (10 * weight) + (6.25 * height) - (5 * age) - 161;
        CPM = (PPM * PAL).toFixed(2);
    } else if (gender === "man") {
        //Miffin's formula to calculate basic caloric needs for man
        PPM = (10 * weight) + (6.25 * height) - (5 * age) + 5;
        CPM = (PPM * PAL).toFixed(2);
    }
    return CPM;
}

export default CaloricNeeds;
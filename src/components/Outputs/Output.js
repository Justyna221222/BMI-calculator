//import { useState } from 'react';
import Card from '../UI/Card';
import BMI from './BmiCalculator';
import CaloricNeeds from './CaloricNeedsCalculator';
import style from './Output.module.css';

const Output = (props) => {
    const gender = props.person.gender;
    const height = props.person.height;
    const weight = props.person.weight;
    const age = props.person.age;
    const lifeStyle = props.person.lifeStyle;

    // CALCULATE BMI
    var calculatedBMI = null;
    if(height !== 0 || weight !== 0 ) {
      calculatedBMI = BMI(weight, height);       
    } else {
        calculatedBMI = null;
    }
    var BMIName = '';
    var description = '';
    if(calculatedBMI !== 0) {
        if(calculatedBMI < 18.50) {
            BMIName = 'Niedowaga';
            description = 'Masa ciała jest zbyt niska. Rozważ konsultację lekarską i wzbogać dietę w zdrowe tłuszcze roślinne, białko oraz węglowodany złożone.';
        } else if(calculatedBMI >= 18.50 && calculatedBMI <= 24.99 ) {
            BMIName = 'Prawidłowa masa ciała';
            description = 'Masa ciała jest prawidłowa. Dbaj o bogatą w warzywa i owoce dietę oraz codzienną dawkę sportu, aby utrzymać dobrą formę.';
        } else if ( calculatedBMI >= 25.00 && calculatedBMI <= 29.99) {
            BMIName = 'Nadwaga';
            description = 'Masa ciała jest zbyt wysoka. Rozważ konsultację lekarską i modyfikację stylu życia.';
        } else {
            BMIName = 'Otyłość';
            description = 'Masa ciała jest zbyt wysoka, wartości BMI wskazuje na rozwijającą się otyłość. Skontaktuj się ze swoim lekarzem, który zarekomenduje modyfikację diety i wprowadzenie codziennej dawki ruchu. '
        }        
    } else {
        BMIName = '';
        description = '';
    }
    console.log(calculatedBMI);
    console.log(gender);
    console.log(age);
    console.log(lifeStyle);

    //CALCULATE CALORIC NEEDS
    var calculatedCaloricNeeds = CaloricNeeds(gender, height, weight, age, lifeStyle);

    return (
        <Card> 
            <div className={style.header}>Twoje BMI: <span>{ calculatedBMI }</span> { BMIName } </div> 
            <div>{ description }</div>
            <div className={style.header}>Twoje dzienne zapotrzebowanie kaloryczne to:<span>{ calculatedCaloricNeeds }</span> </div>
        </Card>);
}

export default Output;
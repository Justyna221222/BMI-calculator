
import {useState} from 'react';
import genderImageWoman from '../../images/woman.png';
import genderImageMan from '../../images/man.png';
import Card from '../UI/Card';
import style from './GeneralInformation.module.css';

const GeneralInformation = (props) => {
    const [enteredGender, setGender] = useState('');
    const setGenderHandler = (event) => {
        setGender(event.target.value);
        console.log(enteredGender);
    }

    const [enteredHeight, setHeight] = useState('');
    const setHeightHandler = (event) => {
        setHeight(event.target.value);
    }

    const [enteredWeight, setWeight] = useState('');
    const setWeightHandler = (event) => {
        setWeight(event.target.value);
    }

    const [enteredAge, setAge] = useState('');
    const setAgeHandler = (event) => {
        setAge(event.target.value);
    }

    const [enteredlifeStyle, setlifeStyle] = useState('');
    const setLifestyleHandler = (event) => {
        setlifeStyle(event.target.value);
    }

    const [warningVisible, setWarningVisible] = useState(false);

    const setPersonInfoHandler = () => {
        if(enteredGender === "" || enteredHeight === "" || enteredWeight === "" || enteredAge === "" || enteredlifeStyle === "" || enteredAge < 10 || enteredHeight < 50 || enteredWeight < 10) {
            setWarningVisible(true);
            return;
        } else {
            setWarningVisible(false);
            props.onAddPersonalInfo(enteredGender, enteredHeight, enteredWeight, enteredAge, enteredlifeStyle);            
        }


    }

    let error = "";
    if(warningVisible) {
        error = (<div>Wprowadź poprawnie wszystkie informacje.</div>);
    }


    return (
    <Card>
        <div className={style.header}><p>KALKULATOR BMI I ZAPOTRZEBOWANIA KALORYCZNEGO</p></div>
        <div className={style.container}>
            <div className={style.containerItem}> 
                <div className={style.item}>
                    <label htmlFor="woman">
                        <input type="radio" id="woman" value="woman" name="gender" onClick={setGenderHandler}/>
                        <img src={genderImageWoman} alt="woman gender" width="73" height="73"/>  
                        <p className={style.gender}>Kobieta</p>
                    </label>   
                </div>
                <div className={style.item}>
                    <label htmlFor="man">
                        <input type="radio" id="man" value="man" name="gender" onClick={setGenderHandler}/>
                        <img src={genderImageMan} alt="man gender" width="73" height="73"/>  
                        <p className={style.gender}>Mężczyzna</p>
                    </label>   
                </div>
            </div>
            <div className={style.containerItem}>
                <div className={style.item}>
                    <label htmlFor="height">
                        <p className={style.desc}>Wzrost (w cm):</p><input type="number" id="height" name="height" onChange={setHeightHandler}/>
                    </label>   
                </div>
                <div className={style.item}>
                    <label htmlFor="weight">
                        <p className={style.desc}>Waga (w kg):</p><input type="number" id="weight" name="weight" onChange={setWeightHandler}/>
                    </label>   
                </div>
                <div className={style.item}>
                    <label htmlFor="age">
                        <p className={style.desc}>Wiek:</p><input type="number" id="age" name="age" onChange={setAgeHandler}/>
                    </label>   
                </div>
            </div>
            <div className={style.containerItem2}> 
                <p className={style.header2}>Poziom aktywności fizycznej: </p>
                <div className={style.lifeStyle}>
                    <div className={style.lifeStyleItem}><input type="radio" value="low" name="lifeStyle" id="low" onChange={setLifestyleHandler}/><label htmlFor='low'>Niski, brak ćwiczeń fizycznych</label></div>
                    <div className={style.lifeStyleItem}><input type="radio" value="medium" name="lifeStyle" id="medium" onChange={setLifestyleHandler}/><label htmlFor='medium'>Średni, aktywność fizyczna 1-2 razy w tygodniu</label></div>
                    <div className={style.lifeStyleItem}><input type="radio" value="high" name="lifeStyle" id="high" onChange={setLifestyleHandler}/><label htmlFor='high'>Wysoki, aktywność fizyczna 3-4 razy w tygodniu</label></div>
                    <div className={style.lifeStyleItem}><input type="radio" value="veryHigh" name="lifeStyle" id="veryHigh" onChange={setLifestyleHandler}/><label htmlFor='veryHigh'>Bardzo wysoki, aktywność fizyczna 5 i więcej razy w tygodniu</label></div>
                </div>
            </div>
        <div className={style.error}>{ error }</div>            
            <button className={style.buttonCalculate} onClick={setPersonInfoHandler}>OBLICZ</button>
        </div>

    </Card>
    );
};

export default GeneralInformation;
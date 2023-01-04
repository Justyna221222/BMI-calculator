import { useState } from 'react';
import './App.css';
import GeneralInformation from './components/Inputs/GeneralInformation';
import Output from './components/Outputs/Output';

function App() {
  const [personData, setPersonData] = useState([]);
  const [visibleOutput, setVisibleOutput] = useState(false);
  const setPersonalInformatation = (enteredGender, enteredHeight, enteredWeight, enteredAge, enteredlifeStyle) => {
    setPersonData(
      {gender:enteredGender, height: enteredHeight, weight: enteredWeight, age: enteredAge, lifeStyle: enteredlifeStyle}
      );
      setVisibleOutput(true);
  }

  let content = '';
  if(visibleOutput) {
    content = (<Output person = {personData}/>);
  }
  return (
    <div>
      <GeneralInformation onAddPersonalInfo={setPersonalInformatation}/>
      <div>{ content }</div>
    </div>
  );
}

export default App;

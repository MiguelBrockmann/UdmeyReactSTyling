import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid,setIsValid] = useState(true); // checken ob user  valider input

  const goalInputChangeHandler = event => { // was im inputfeldsteht steht nacher bei entered value
    if (event.target.value.trim().length > 0){ // ist valide soll also wieder true sein, damit farbchange nachher wieder geht
        setIsValid(true);
    }
      setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length ===0){ //trim entfern whitespace am anfang  und ende, wollen mit diesem if nichts return wenn user einfach so submittet ohne text
       setIsValid(false);
        return;
    }
    props.onAddGoal(enteredValue); // gibt info an app js, nach sub,mit
  };

  return (
    <form onSubmit={formSubmitHandler}>  {/*fkt wird aufgerufen wenn submitbutton gedrückt wird*/}
      <div className="form-control">
        <label style={{color: !isValid ? 'red' : 'black'}}>Course Goal</label> {/*jenachdem werlcher boolean isValid hat ändert sich farbe vom label*/}
        <input style={{borderColor: !isValid ? 'red' : 'black', backgroundColor: !isValid ? 'salmon' : 'transparent'}} type="text" onChange={goalInputChangeHandler} /> {/*jedes mal wenn char eingegebn wird, wird fkt aufgerufen*/}
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;

/*
alternative zu inlinestyle ist <div className=`form-control ${!isValid ? 'invalid' : ''} `}> falls   expresseion true hat formcontroll noch zusätzlich den invalid string was ihn dann eine andere css klasse gibt, kann auch mehr als 2 sein

und dann in css

.form-control.invalid {  alle classen die ein formcontroll haben und ein invalid
  border-color: red;
}

*/

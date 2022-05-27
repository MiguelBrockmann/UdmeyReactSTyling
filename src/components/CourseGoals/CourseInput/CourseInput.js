import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');

  const goalInputChangeHandler = event => { // was im inputfeldsteht steht nacher bei entered value
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    props.onAddGoal(enteredValue); // gibt info an app js, nach sub,mit
  };

  return (
    <form onSubmit={formSubmitHandler}>  {/*fkt wird aufgerufen wenn submitbutton gedrückt wird*/}
      <div className="form-control">
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} /> jedes mal wenn char eingegebn wird, wird fkt aufgerufen
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;

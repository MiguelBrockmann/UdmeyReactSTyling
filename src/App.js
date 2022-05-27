import React, { useState } from 'react';

import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';
import CourseInput from './components/CourseGoals/CourseInput/CourseInput';
import './App.css';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([  // course goals ein array aus objekten
    { text: 'Do all exercises!', id: 'g1' },
    { text: 'Finish the course!', id: 'g2' }
  ]);

  const addGoalHandler = enteredText => { // wird unten aufgerufen enteredText bekommt infos aus <CourseInput , ist praktisch was im inputfel geschrieben wurde nach submit
    setCourseGoals(prevGoals => { // addte alte und neue goals
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  const deleteItemHandler = goalId => {  //wird von CourseGoalList aufgerufen bekommt goalId wert von da
    console.log(goalId,"goal")
    setCourseGoals(prevGoals => {
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
  );

  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} /> /* items wird an CourseGoalList weitergeeben und app bekommt info aus COurseGoallist */
    );
  }

  return (
    <div>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />  {/*ruft fkt oben auf und app js bekommt info aus courseinput*/}
      </section>
      <section id="goals">
        {content}
      </section>
    </div>
  );
};

export default App;

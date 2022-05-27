import React from 'react';

import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';
import './CourseGoalList.css';

const CourseGoalList = props => {
  //console.log(props.onDeleteItem,"bluu")
  return (
    <ul className="goal-list">
      {props.items.map(goal => (  /* iterieren durch array objekt */
        <CourseGoalItem
          key={goal.id}
          id={goal.id}// geben id weiter
          onDelete={props.onDeleteItem} // geben on delete weiter, hier steht praktisch onDelete={ganze fkt von deleteItemHandler von apps}
        >
          {goal.text}
        </CourseGoalItem>
      ))}
    </ul>
  );
};

export default CourseGoalList;

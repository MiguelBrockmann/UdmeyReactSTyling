import React from 'react';

import './CourseGoalItem.css';

const CourseGoalItem = props => {

  const deleteHandler = () => {
    props.onDelete(props.id); // ruft fkt von papa auf mit der id von papa
    //olly fragen
  };

  return (
    <li className="goal-item" onClick={deleteHandler}>  {/*wenn geklickt rufen wir m oben auf achtung  das hat hier nicht mit prop zu eltren schicken zu tun*/}
      {props.children} {/*//goal.text von vater*/}
    </li>
  );
};

export default CourseGoalItem;

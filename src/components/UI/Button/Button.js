import React from 'react';
import styled from "styled-components"; // ging nur weil wir vorher npm install --save styled-components gemacht haben
import './Button.css';


//styled wurde importiert und styled kann butoon aufrufen, wird ein neuen button komponentn erschaffen,,, statt .button geht auch .p div usw ,,,,in ``kommen styles
const Button = styled.button`     

  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;
 

&:focus {                   //wenn dieser button  focus hat mach diesen style
  outline: none;
}

&:hover,
&:active {
  background: #ac0e77;
  border-color: #ac0e77;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
}

`;

// const Button = props => { brauchen dass nicht mehr haben jetzt styled komponent
//   return (
//     <button type={props.type} className="button" onClick={props.onClick}>
//       {props.children}
//     </button>
//   );
// };

export default Button;

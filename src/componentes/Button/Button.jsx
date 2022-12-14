import styles from "./Button.module.css";
import { useState } from "react";

function Button(props) {
  
  const [colorButton, setColorButton] = useState(props.color);

  const styleBtn = { backgroundColor: colorButton };

  function changeColor() {
    setColorButton(props.colorButton);
  }

  return (
    <button onClick={props.onbuttonTouch} style={styleBtn} className={styles.btn}>
      {props.children || props.text} </button>)
    ;
    
}

export default Button




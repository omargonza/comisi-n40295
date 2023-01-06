import styles from "./Button.module.css";
import { useState } from "react";

function Button(props) {
  
  const [colorButton, setColorButton] = useState(props.color);

  const styleBtn = { backgroundColor: colorButton };

  function changeColor() {
    setColorButton(props.colorButton);
  }

  return (
    <Button onClick={props.onButtonTouch} style={styleBtn} className={styles.btn}>
      {props.children || props.text} </Button>)
    ;
    
}

export default Button;




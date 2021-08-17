import styles from "./SideBar.module.css"
import { useState } from "react";

export default function TogglClass() {

  const [isActive, setActive] = useState(false);
  
  const [isClick, setIsClick] = useState(false);

  const [isClick1, setIsClick1] = useState(false);

  const sidebar = () => {
    setActive(!isActive); 
  }
  const click = () => {
    setIsClick(!isClick);
  }
  const click1 = () => {
    setIsClick1(!isClick1);
  }
  
  

  return (
      <div>
        <h1 onClick={click1} className={isClick1 ? styles.close : styles.open}>
        <button onClick={sidebar} className={isActive? styles.btn_2 : styles.btn_1}>Toggle class</button>  
        <div className={isClick1 ,isActive ? styles.active_1 : styles.active}>
          <div>
            <h2>close</h2>
            <h2 onClick={click}>menu1</h2>
            <ul className={isClick ? styles.click : styles.no}>
              <li>1</li>
              <li>2</li>
              <li>4</li>
              <li>5</li>
              <li>1</li>
            </ul>
          </div>
          <div>

          </div>
          <div>ggggg</div>
          <div>ggggg</div>
        </div>
        </h1>
      </div>


  )
}
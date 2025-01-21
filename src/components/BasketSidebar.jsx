import { BsPatchCheck } from "react-icons/bs";
import { FaHashtag } from "react-icons/fa";
import { TbChecklist } from "react-icons/tb";

import styles from "./BasketSidebar.module.css"

const BasketSidebar = ({ state,clickHandler }) => {
  const { itemsCounter, total, checkout } = state;
  return (
    <div className={styles.sidebar}>
      <div>
        <TbChecklist />
        <p>Total:</p>
        <span>${total}</span>
      </div>
      <div>
        <FaHashtag />
        <p>Quantity:</p>
        <span>{itemsCounter}</span>
      </div>
      <div>
        <BsPatchCheck />
        <p>Status:</p>
        <span>{!checkout && "pending..."}</span>
      </div>
      <button onClick={()=>clickHandler("CHECKOUT")} >Checkout</button>
    </div>
  );
};

export default BasketSidebar;

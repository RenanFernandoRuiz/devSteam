import CartMenu from "../cartMenu/cartMenu"
import styles from "./cartButton.module.css"
import logo from "../../assets/cart.svg";
import { useState } from "react";

import {useRecoilValue} from "recoil";
import {cartState} from "../../atoms/cart";

const CartButton = () => {
const [open, setOpen] = useState(false);
const cart = useRecoilValue(cartState);

  return (
    <div className={styles.cartButton} onClick={() => setOpen(!open)}>
     <img src={logo} alt="icone de carrinho de compra" width={"46"} />
     {cart.length > 0 && <div className={styles.number}>{cart.length}</div>}
      {open && <CartMenu isOpen={open} onClose={()=> setOpen(false)} />}
    </div>
    
    );
};

export default CartButton;
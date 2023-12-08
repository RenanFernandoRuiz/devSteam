import styles from "./Nav.module.css";
import logo from "../../assets/logo.svg";
import CartButton from "../cartButton/cartButton";

const Nav = () => {
  return (
    <div className={styles.bar}>
      <div className={styles.logo}>
        <img src={logo} alt="logo da devSteam" width={"72"} />
        DevSteam
      </div>
      <input type="text" placeholder="Buscar" />
     <CartButton />
    </div>
  );
};

export default Nav;

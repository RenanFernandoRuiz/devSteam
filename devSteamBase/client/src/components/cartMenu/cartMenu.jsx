import CartOption from '../cartOption/cartOption';
import Button from '../forms/button/button'
import styles from './cartMenu.module.css'

import { cartState } from '../../atoms/cart';
import { useRecoilState } from 'recoil';
import { useEffect, useRef } from 'react';

const CartMenu = ({ isOpen, onClose }) => {
    const [cart, setCart] = useRecoilState(cartState);

    const cartRef = useRef();


    useEffect(() => {
        const handleCloseCart = (e) => {
            if (isOpen && cartRef.current && !cartRef.current.contains(e.target)) {
                onClose();
            }
        }
        document.addEventListener("mousedown", handleCloseCart);

        return () => {
            document.removeEventListener("mousedown", handleCloseCart);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const handleRemoveProduct = (pos) => {
        setCart(cart.filter((obj, posObj) => posObj !== pos))
    }

    return (

        <div ref={cartRef} className={styles.menu} onClick={(e) => e.stopPropagation()}>
            <div className={styles.options}>
                {cart.length === 0 && <p>Nenhum produto no seu carrinho.</p>}
                {cart.map((cartInfo, pos) => (
                    <CartOption
                        img={cartInfo.img}
                        title={cartInfo.name}
                        price={cartInfo.price}
                        key={`cart-info-${pos}`}
                        onRemove={() => handleRemoveProduct(pos)}
                    />
                ))}
            </div>


            <div className={styles.priceLine}>
                <h2>Total</h2>
                <h2>R${cart.reduce((prev, current) => prev + current.price, 0).toFixed(2).replace(".", ",")}</h2>
            </div>
            <Button fullwidth>Finalizar Compra</Button>
        </div>
    );
};

export default CartMenu;
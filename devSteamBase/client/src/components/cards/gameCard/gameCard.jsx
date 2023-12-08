import styles from "./gameCard.module.css";
import Button from "../../forms/button/button"

const GameCard = ({ children, title, info, price, onAdd }) => {
    return (
        <div className={styles.gameCard}>
            <img src={`/src/assets/products/${title}.png`} alt={title} width={300} height={145} />
            <div className={styles.info}>
                <h3>{children}</h3>
                <p>{info}</p>
                <div className={styles.pricing}>
                    <h2>R$ {price.toFixed(2)} </h2>
                    {title != "gameOver" && <Button onClick={onAdd}>Adicionar ao Carrinho</Button>}


                </div>

            </div>
        </div>
    );
};

GameCard.defaultProps = {
    children: "jogo não encontrado",
    title: "gameOver",
    info: "Ação, estratégia, multijogador",
    price: "00.00"
}

export default GameCard;
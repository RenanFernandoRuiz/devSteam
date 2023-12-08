import Button from "../../forms/button/button";
import styles from "./saleCard.module.css";

const SaleCard = ({ discount, fullPrice, title, onAdd }) => {
    return (
        <div className={styles.saleCard}>
            <img src={`/src/assets/products/${title}.png`} alt="" width={250} height={300} />
            <div className={styles.info}>
                <h3>Oferta Exclusiva</h3>
                <div className={styles.priceCard}>
                    <div>-{discount}%</div>
                    <div>
                        <p>R${fullPrice.toFixed(2).replace(".",",")}</p>
                        <h4>R${(fullPrice - fullPrice * (discount / 100)).toFixed(2)}</h4>
                    </div>
                </div>
                <Button onClick={onAdd}>Adicionar ao carrinho</Button>
            </div>
        </div>
    );
};

SaleCard.defaultProps = {
    discount: "50",
    fullPrice: "199.90",
    title: "League of Legends"
};


export default SaleCard;
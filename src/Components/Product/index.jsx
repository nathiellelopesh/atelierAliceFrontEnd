import { FaWhatsapp } from "react-icons/fa";
import styles from './style.module.css'

export default function Product(props) {
    return (
        <div className={styles.productItem}>
            <img src={props.image}/>
            <div className={styles.productItemDescription}>
                <div className={styles.productItemDescriptionTitle}>
                    <span className={styles.productItemTitle}>{props.title}</span>
                    <span>Tam {props.category}</span>
                </div>
                
                <p>R$ {props.price}</p>
            </div>
            <button><FaWhatsapp />Comprar</button>
        </div>
    )
}
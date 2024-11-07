import { BsBoxSeam } from "react-icons/bs";
import { BsCart2 } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { FaRegCalendarAlt } from "react-icons/fa";
import styles from './style.module.css'

export default function AsideAdmin({allProducts, soldProducts, orders, schedule}) {
    return (
        <aside>
                <div className={styles.optionContainer}>
                    <BsBoxSeam onClick={allProducts} color="#fff" size={"2.4rem"}/>
                    <p>Gerenciar Produtos</p>
                </div>
                <div className={styles.optionContainer}>
                    <BsCart2 onClick={soldProducts} color="#fff" size={"2.4rem"}/>
                    <p>Vendidos</p>
                </div>
                <div className={styles.optionContainer}>
                    <FiEdit onClick={orders} color="#fff" size={"2.4rem"}/>
                    <p>Pedidos</p>
                </div>
                <div className={styles.optionContainer}>
                    <FaRegCalendarAlt onClick={schedule} color="#fff" size={"2.4rem"}/>
                    <p>Agenda</p>
                </div>
            </aside>
    )
}
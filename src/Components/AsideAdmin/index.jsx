import { BsBoxSeam } from "react-icons/bs";
import { BsCart2 } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { FaRegCalendarAlt } from "react-icons/fa";
import styles from './aside.module.css'
import { useNavigate } from "react-router-dom";

export default function AsideAdmin({allProducts, soldProducts, orders, schedule}) {
    const navigate = useNavigate()
    return (
        <aside>
                <div className={styles.optionContainer} onClick={() => navigate('/admin')}>
                    <BsBoxSeam onClick={allProducts} color="#fff" size={"2.4rem"}/>
                    <p>Gerenciar Produtos</p>
                </div>
                <div className={styles.optionContainer} onClick={() => navigate('/admin/sold')}>
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
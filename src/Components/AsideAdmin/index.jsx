import { BsBoxSeam } from "react-icons/bs";
import { BsCart2 } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { PiSignOutBold } from "react-icons/pi";
import styles from './aside.module.css'
import { useNavigate } from "react-router-dom";
import { signOut } from 'firebase/auth';
import { auth } from '../../services/firebase';
import { useAppContext } from "../../context";

export default function AsideAdmin({allProducts, soldProducts, orders, schedule}) {
    const navigate = useNavigate();

    const {showAlertMessage, user} = useAppContext()

    const signout = async () => {
        try {
          await signOut(auth);
          console.log("Usuário desconectado com sucesso!");
          
          navigate('/admin/signin');
        } catch (error) {
          console.error("Erro ao deslogar:", error);
          showAlertMessage('Não foi possível deslogar usuário', 'error', 'filled')
        }
    };

    return (
        <aside>
            <div className={styles.containerItems}>
                <div className={styles.optionContainer} onClick={() => navigate('/admin')}>
                    <BsBoxSeam onClick={allProducts} color="#fff" size={"2.4rem"}/>
                    <p>Gerenciar Produtos</p>
                </div>
                <div className={styles.optionContainer} onClick={() => navigate('/admin/sold')}>
                    <BsCart2 onClick={soldProducts} color="#fff" size={"2.4rem"}/>
                    <p>Vendidos</p>
                </div>
                <div className={styles.optionContainer} onClick={() => navigate('/admin/contacts')}>
                    <FiEdit onClick={orders} color="#fff" size={"2.4rem"}/>
                    <p>Pedidos</p>
                </div>
                <div className={styles.optionContainer}>
                    <FaRegCalendarAlt onClick={schedule} color="#fff" size={"2.4rem"}/>
                    <p>Agenda</p>
                </div>
            </div>
            <div  className={styles.optionContainer}>
                <PiSignOutBold onClick={signout} color="#fff" size={"1.5rem"}/>
                <p>Sair</p>
                <p className={styles.email}>{user.email}</p>
            </div>
        </aside>
    )
}
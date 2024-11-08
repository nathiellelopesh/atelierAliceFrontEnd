import { Link } from 'react-router-dom';
import manequim from '../../img/logo.png';
import styles from './style.module.css'

export default function Header() {
    return (
        <header>
            <div className={styles.headerTitle}>
                <img src={manequim}/>
                <p>ATELIER ALICE</p>
            </div>
            <div>
                <nav className={styles.headerNav}>
                    <Link to={"/"}>HOME</Link>
                    <Link to={"/"}>CATALOGO DE VESTIDOS</Link>
                    <Link to={"/"}>ORÇAMENTO</Link>
                    <Link to={"/"}>CONTATO</Link>
                    <Link to={"/"}>AGENDAR ATENDIMENTO</Link>
                </nav>
            </div>
        </header>
    )
}
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
                    <a href="#form-contact">ORÇAMENTO</a>
                    <a href='#location'>LOCALIZAÇÃO</a>
                    <a href='#location'>CONTATO</a>
                </nav>
            </div>
        </header>
    )
}
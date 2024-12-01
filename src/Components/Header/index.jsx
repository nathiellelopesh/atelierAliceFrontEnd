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
                    <a href='#home'>HOME</a>
                    <a href='#colecoes'>COLEÇÕES</a>
                    <a href="#form-contact">ORÇAMENTO</a>
                    <a href='#location'>LOCALIZAÇÃO</a>
                    <a href='#location'>CONTATO</a>
                </nav>
            </div>
        </header>
    )
}
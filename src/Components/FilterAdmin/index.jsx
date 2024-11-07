import { IoIosSearch } from "react-icons/io";
import styles from './style.module.css'

export default function FilterAdmin() {
    return (
        <section className={styles.filterAdminContainer}>
            <input placeholder="Pesquisar"/>
            <IoIosSearch size="1.5rem"/>
        </section>
    )
}
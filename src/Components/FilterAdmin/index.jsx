import { IoIosSearch } from "react-icons/io";
import styles from './style.module.css'

export default function FilterAdmin({filter, setFilter, handleFilter}) {

    return (
        <section className={styles.filterAdminContainer}>
            <input
                placeholder="Pesquisar"
                value={filter}
                onChange={(ev) => setFilter(ev.target.value)}
            />
            <IoIosSearch size="1.5rem" onClick={handleFilter}/>
        </section>
    )
}
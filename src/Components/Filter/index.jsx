import { Checkbox, FormGroup, FormControlLabel  } from '@mui/material';
import styles from './style.module.css'

export default function Filter() {
    return (
        <section className={styles.filterContainer}>
            <p>Filtros</p>
            <div className={styles.filterItem}>
                <label>Categoria</label>
                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="Cetim" />
                    <FormControlLabel control={<Checkbox />} label="Crepe" />
                    <FormControlLabel control={<Checkbox />} label="Paête" />
                    <FormControlLabel control={<Checkbox />} label="Viscose" />
                </FormGroup>
            </div>
            <div className={styles.filterItem}>
                <label>Tamanho</label>
                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="P" />
                    <FormControlLabel control={<Checkbox />} label="M" />
                    <FormControlLabel control={<Checkbox />} label="G" />
                    <FormControlLabel control={<Checkbox />} label="GG" />
                </FormGroup>
            </div>
        </section>
    )
}
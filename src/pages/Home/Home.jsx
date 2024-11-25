import { useState } from 'react'
import Filter from '../../Components/Filter'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import ProductList from '../../Components/ProductList'
import Title from '../../Components/Title'
import styles from './home.module.css'
import FormContact from '../../Components/FormContact'
import Location from '../../Components/Location'

export default function Home() {
    const [filterPrice, setFilterPrice] = useState('');
    const [filterSize, setFilterSize] = useState('');

    const handleFilterProducts = (price, size) => {
        setFilterPrice(price);
        setFilterSize(size);
    };
      
    return (
        <>
        
        <Header/>
        <section className={styles.homeBannerContainer}>
            <div className={styles.homeBanner}>
                <h2>Encontre aqui seu vestido de Alta Costura</h2>
            </div>
        </section>
        <section className={styles.productsContainer}>
                <Title titulo={"COLEÇÕES"}/>
                <Filter filterProducts={handleFilterProducts}/>
                <ProductList filterPrice={filterPrice} filterSize={filterSize}/>
        </section>
        <section id="form-contact" className={styles.formSection}>
            <FormContact/>
        </section>
        <section id="location" className={styles.locationSection}>
            <Location/>
        </section>
        <Footer/>
        </>
    )
}
//
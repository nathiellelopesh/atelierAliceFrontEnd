import { useState, useEffect } from 'react'
import Filter from '../../Components/Filter'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import ProductList from '../../Components/ProductList'
import Title from '../../Components/Title'
import styles from './home.module.css'
import FormContact from '../../Components/FormContact'
import Location from '../../Components/Location'
import Home1 from '../../img/home1.jpeg'
import Home2 from '../../img/home2.jpeg'
import Home3 from '../../img/home3.jpeg'

export default function Home() {
    const [filterPrice, setFilterPrice] = useState('');
    const [filterSize, setFilterSize] = useState('');

    const handleFilterProducts = (price, size) => {
        setFilterPrice(price);
        setFilterSize(size);
    };

    const services = [
        'Costura Sob Medida',
        'Confecção de Vestidos de Noiva, Madrinhas e 15 anos',
        'Confecção de Vestidos de festa',
        'Confecção de Uniformes',
        'Ajustes e Barra de Vestidos',
        'Reparos e consertos'
    ]

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      
    return (
        <>
        
        <Header/>
        <section className={styles.homeBannerContainer} id='home'>
            <div className={styles.imageContainer}>
                <div className={styles.image1}>
                    <img src={Home1}/>
                </div>
                <div className={styles.image2}>
                    <img src={Home2}/>
                </div>
                <div className={styles.image3}>
                    <img src={Home3}/>
                </div>
            </div>
            <div className={styles.servicesList}>
                <p>Serviços</p>
                <ul>
                    {services.map((item, i) => {
                        return <li key={i}>{item}</li>
                    })}
                </ul>
            </div>
        </section>
        <section className={styles.productsContainer} id='colecoes'>
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
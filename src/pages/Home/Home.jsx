import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import ProductList from '../../Components/ProductList'
import Quotation from '../../Components/Quotation'
import styles from './style.module.css'

export default function Home() {
    return (
        <>
        
        <Header />
        <section className={styles.homeBannerContainer}>
            <div className={styles.homeBanner}>
                <h2>Encontre aqui seu vestido de Alta Costura</h2>
            </div>
        </section>
        <section className={styles.homeProductList}>
            <h3>Disponíveis para venda</h3>
            <ProductList/>
        </section>
        <Quotation/>
        <Footer/>
        </>
    )
}
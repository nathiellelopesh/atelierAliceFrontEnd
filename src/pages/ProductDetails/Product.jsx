import { useParams } from 'react-router-dom'
import axios from 'axios'
import styles from './style.module.css'
import { useEffect, useState } from 'react'
import { FaWhatsapp } from "react-icons/fa";
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';


export default function ProductDetails() {
    const { id } = useParams()

    const [productInfo, setProductInfo] = useState(null)
    const [picture, setPicture] = useState("")
    

    async function getItem() {
        try {
            const response = await axios.get(`http://localhost:3000/atelier/${id}`);
            setProductInfo(response.data)
            console.log(response.data)
        } catch (error) {
            console.log("erro ao carregar produto")
        }
    }

    useEffect(() => {
        getItem();
        
    }, []);

    if (!productInfo) {
        return <div className={styles.loading}>Carregando...</div>;
    }

    const { title, price, description, images } = productInfo;

    const pixPayment = Math.floor(price * 0.85);

    const message = `Olá! Gostaria de saber mais sobre o vestido: *${productInfo.title}*.\nPreço: R$ ${productInfo.price},00.`
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/5545999462126?text=${encodedMessage}`;

    return (
        <>
            <Header/>
            <div className={styles.ProductInformation}>
                
                <div className={styles.imagesProduct}>
                    <div className={styles.smallImg}>
                        {images.map((image,i) => (
                            <img key={i} src={image} onClick={() => setPicture(image)}/>
                        ))}
                    </div>
                    <img src={picture ? picture : images[0]} className={styles.bigImg}/>
                </div>

                <div className={styles.details}>
                    <h1 className={styles.title}>{title}</h1>
                    <p className={styles.description}>{description}</p>
                    <p className={styles.price}>R$ {price}</p>
                    
                    <p className={styles.paymentMethod}>à vista no Pix ou Dinheiro com 15% off: R$ <span className={styles.pix}>{pixPayment},00</span></p>
                    <button onClick={() => window.open(whatsappLink, "_blank")}><FaWhatsapp />Comprar</button>
                </div>

            </div>

            <Footer/>
        </>
    )
}


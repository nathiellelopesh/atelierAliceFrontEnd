import { useParams } from 'react-router-dom'
import axios from 'axios'
import styles from './productDetails.module.css'
import { useEffect, useState } from 'react'
import { FaWhatsapp } from "react-icons/fa";
import Footer from '../../Components/Footer';
import BasicButtons from '../../Components/Button';
import manequim from '../../img/logo.png';
import { Link } from 'react-router-dom';
import { IoArrowBack } from "react-icons/io5";


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
            <header>
                <div className={styles.headerTitle}>
                    <img src={manequim}/>
                    <p>ATELIER ALICE</p>
                </div>
                <Link to={"/"} className={styles.headerNav}>
                    <IoArrowBack color='#fff' size={'1.8rem'}/>
                    <a>Voltar</a>
                </Link>
            </header>
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
                    <p  className={styles.paymentMethod}>Pagamentos no cartão em até 3x sem juros</p>
                    <p className={styles.paymentMethod}>à vista no Pix ou Dinheiro com 15% off: R$ <span className={styles.pix}>{pixPayment},00</span></p>
                    <BasicButtons
                        sx={{
                            width: 150,
                            display: 'flex',
                            gap: '5px',
                            padding: '8px 16px',
                            borderRadius: '8px', 
                            boxShadow: 3, 
                            transition: '0.3s', 
                            '&:hover': {
                              backgroundColor: '#25D366',  
                              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', 
                            },
                            fontSize: '16px',
                          }}
                        color='success'
                        onClick={() => window.open(whatsappLink, "_blank")}
                    >
                        <FaWhatsapp /> Comprar
                    </BasicButtons>
                    
                </div>

            </div>

            <Footer/>
        </>
    )
}


import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";


import Title from "../Title";

export default function Location() {

    const instaLink = "https://www.instagram.com/atelier_costura_alice/"

    const whatsappLink = `https://wa.me/5545999462126`;

    return (
        <>
            <Title titulo={"LOCALIZAÇÃO E CONTATO"}/>
            <section style={styles.locationContainer}>
            
                <section>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3599.9586474811567!2d-54.587848224943585!3d-25.539754337242744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f691f6803628bf%3A0xd572e893880b0d91!2sAtelier%20de%20Costura%20Alice!5e0!3m2!1spt-PT!2sbr!4v1732568553269!5m2!1spt-PT!2sbr"
                        width="400"
                        height="300"
                        style={{ border: 0 }}
                        allowfullscreen
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                </section>
                <section style={styles.contactInfo}>
                    <div style={styles.contactItem}>
                        <IoLocationOutline size={"1.8em"} color="#0b3874"/>
                        <p>Rua Bartolomeu de Gusmão 760, centro - Foz do Iguaçu - PR</p>
                    </div>
                    
                    <div style={styles.contactItem}>
                        <a onClick={() => window.open(whatsappLink, "_blank")} style={styles.a}>
                            <FaWhatsapp size={"1.5em"} color="#0b3874"/>
                        </a>
                        
                        <p>(45) 99946-2126</p>
                    </div>
                    <div style={styles.contactItem}>
                        <a onClick={() => window.open(instaLink, "_blank")} style={styles.a}>
                            <FaInstagram size={"1.5em"} color="#0b3874"/>
                        </a>
                        
                        <p >@atelier_costura_alice</p>
                    </div>
                </section>
            </section>
        </>
    )
}

const styles = {
    locationContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        color: 'black',
    },
    contactInfo: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'center',
    },
    contactItem: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px',
        gap: '15px',
        fontSize: '18px',
    },
    a: {
        cursor: 'pointer'
    }

}
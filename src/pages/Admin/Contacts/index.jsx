import AsideAdmin from "../../../Components/AsideAdmin";
import axios from "axios"
import { useEffect, useState } from "react"
import AccordionUsage from "../../../Components/Accordion";

export default function Contacts() {
    const [data, setData] = useState([])

    async function getContacts() {
        try {
            const contacts = await axios.get("http://localhost:3000/atelier/admin/contact")
            setData(contacts.data)
            //console.log(contacts.data)
        } catch (error) {
            console.log("erro ao carregar produtos para a página de admin")
        }
    }

    useEffect(() => {
        getContacts()
    }, []);



    return (
        <section style={styles.adminContainer}>
            <AsideAdmin/>
            <section style={styles.adminContent}>
                <h2>Formulários para contato/orçamento</h2>
                <AccordionUsage items={data}/>
            </section>
        </section>
    )
}

const styles = {
    adminContainer: {
        display: 'flex',
        height: '100vh'
    },
    adminContent: {
        overflow: 'auto',
        flex: 1,
        padding: '50px'
    },
    
}
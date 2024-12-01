import AsideAdmin from "../../../Components/AsideAdmin";
import axios from "axios"
import { useEffect, useState } from "react"
import AccordionUsage from "../../../Components/Accordion";
import { useAppContext } from "../../../context";
import AlertDialog from "../../../Components/Dialog";

export default function Contacts() {
    const [data, setData] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [contactToDelete, setContactToDelete] = useState(null);

    const {showAlertMessage} = useAppContext()

    async function getContacts() {
        try {
            const contacts = await axios.get("http://localhost:3000/atelier/admin/contact")
            setData(contacts.data)
            //console.log(contacts.data)
        } catch (error) {
            console.log("erro ao carregar produtos para a página de admin")
        }
    }

    function handleDeleteContact(id) {
        setContactToDelete(id);
        setOpenDialog(true);
    }

    async function confirmDelete(isConfirmed) {
        if (isConfirmed && contactToDelete) {
            try {
                await axios.delete(`http://localhost:3000/atelier/admin/contact/${contactToDelete}`)
                showAlertMessage('Mensagem apagada com sucesso', 'success', 'filled')
                getContacts();
            } catch (error) {
                showAlertMessage('Não foi possível Deletar mensagem', 'error', 'filled')
            }
        }
        setOpenDialog(false); 
        setContactToDelete(null);
    }


    useEffect(() => {
        getContacts()
    }, []);



    return (
        <section style={styles.adminContainer}>
            <AsideAdmin/>
            <section style={styles.adminContent}>
                <h2>Formulários para contato/orçamento</h2>
                <AccordionUsage items={data} handleDeleteContact={handleDeleteContact}/>
            </section>
            <AlertDialog
                open={openDialog}
                onClose={() => setOpenDialog(false)}
                message={"Deseja apagar mensagem?"}
                onConfirm={confirmDelete}
            />
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
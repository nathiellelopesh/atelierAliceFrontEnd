import AsideAdmin from "../../../Components/AsideAdmin";
import axios from "axios"
import { useEffect, useState } from "react"

export default function Sold() {
    const [data, setData] = useState([])

    async function getProducts() {
        try {
            const products = await axios.get("http://localhost:3000/atelier")
            const isSold = products.data.filter((item) => item.is_sold === true)

            setData(isSold);
            console.log(isSold);
            
        } catch (error) {
            console.log("erro ao carregar produtos para a página de admin")
        }
    }

    useEffect(() => {
        getProducts()
    }, []);


    return (
        <section style={styles.adminContainer}>
            <AsideAdmin/>
            <section style={styles.adminContent}>
                <h2>Vendidos</h2>
            {data.length > 0 ? (
                <table style={styles.table}>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Nome</th>
                            <th>Preço (R$)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <h2>Nenhum produto vendido</h2>
            )}
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
        flex: 1
    },
    table: {
        width: '60%',
        margin: '50px auto'
    }
    
}
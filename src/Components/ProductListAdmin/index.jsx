import axios from "axios"
import { useEffect, useState } from "react"
import { CiEdit } from "react-icons/ci";
import styles from './style.module.css'

export default function ProductListAdmin() {
    const [data, setData] = useState([])

    async function getProducts() {
        try {
            const products = await axios.get("http://localhost:3000/atelier")
            setData(products.data)
        } catch (error) {
            console.log("erro ao carregar produtos para a página de admin")
        }
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <section className={styles.container}>
            {data.length > 0 ? (
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Nome</th>
                            <th>Preço (R$)</th>
                            <th>Editar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td  className={styles.editColumn}>
                                    <CiEdit className={styles.editIcon} size="2rem"/>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <h2>NÃO HÁ PRODUTOS</h2>
            )}
        </section>
    )
}
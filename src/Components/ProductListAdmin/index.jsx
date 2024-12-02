import axios from "axios"
import { useEffect, useState } from "react"
import { CiEdit } from "react-icons/ci";
import styles from './style.module.css'

export default function ProductListAdmin({updateProduct, data, filteredData}) {

    const handleEdit = ( id ) => {
        updateProduct(id);
    };

    return (
        <section className={styles.container}>
            {filteredData.length > 0 ? (
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
                    {filteredData.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.price}</td>
                            <td  className={styles.editColumn}>
                                <CiEdit className={styles.editIcon} size="2rem" onClick={() => handleEdit(item.id)}/>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            ) : (
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
                                    <CiEdit className={styles.editIcon} size="2rem" onClick={() => handleEdit(item.id)}/>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </section>
    )
}
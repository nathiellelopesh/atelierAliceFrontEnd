import { useEffect, useState } from "react";
import AsideAdmin from "../../Components/AsideAdmin/AsideAdmin";
import FilterAdmin from "../../Components/FilterAdmin";
import ProductListAdmin from "../../Components/ProductListAdmin";
import styles from './style.module.css'
import { IoAddCircle } from "react-icons/io5";
import CreateProduct from "../../Components/CreateProduct";
import { IoCloseCircle } from "react-icons/io5";
import axios from "axios";
import AlertComponent from "../../Components/Alert";

export default function Admin() {
    const [isOpenForm, setIsOpenForm] = useState(false);
    const [alert, setAlert] = useState(null);  

    const postnewProduct = async (newProduct) => {
        try {
            await axios.post("http://localhost:3000/atelier/admin/createProduct", newProduct)
            setAlert({ severity: "success", message: "Produto Salvo com sucesso!" });
        } catch (error) {
            console.log(error)
            setAlert({ severity: "error", message: "Erro ao cadastrar novo Produto" });
        } 
    }


    return (
        <section className={styles.adminContainer}>
            <AsideAdmin className={styles.adminOptions}/>
            <section className={styles.adminContent}>
                <FilterAdmin/>
                <div  className={styles.icon} onClick={() => setIsOpenForm(!isOpenForm)}>
                    {isOpenForm ? <IoCloseCircle size="4rem" color="#0b3874"/> : <IoAddCircle size="4rem" color="#0b3874"/>}
                    
                </div>

                {isOpenForm ? (
                    <div className={styles.createNewProductConatiner}>
                        <CreateProduct saveProduct={postnewProduct}/>
                    </div>
                ) : (
                    <ProductListAdmin className={styles.products}/>
                )}

                {alert && <AlertComponent severity={alert.severity} message={alert.message} />}
                
            </section>
        </section>
    )
}
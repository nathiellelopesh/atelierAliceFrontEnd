import { useEffect, useState } from "react";
import AsideAdmin from "../../Components/AsideAdmin";
import FilterAdmin from "../../Components/FilterAdmin";
import ProductListAdmin from "../../Components/ProductListAdmin";
import styles from './style.module.css'
import { IoAddCircle } from "react-icons/io5";
import FormProduct from "../../Components/FormProduct";
import { IoCloseCircle } from "react-icons/io5";
import axios from "axios";
import AlertComponent from "../../Components/Alert";

export default function Admin() {
    const [isOpenForm, setIsOpenForm] = useState(false);
    const [isUpdateForm, setIsUpdateForm] = useState(false);
    
    const [alert, setAlert] = useState(null);  

    const postnewProduct = async (newProduct) => {
        try {
            await axios.post("http://localhost:3000/atelier/admin/createProduct", newProduct)
            setAlert({ severity: "success", message: "Produto salvo com sucesso!" });
        } catch (error) {
            console.log(error)
            setAlert({ severity: "error", message: "Erro ao cadastrar novo Produto" });
        }
    }

    const updateProduct = async (product, id) => {
        try {
            await axios.put(`http://localhost:3000/atelier/admin/updateProduct/${id}`, product)
            setAlert({ severity: "success", message: "Produto atualizado com sucesso!" });
        } catch (error) {
            console.log(error)
            setAlert({ severity: "error", message: "Erro ao atualizar Produto" });
        }
    }


    return (
        <section className={styles.adminContainer}>
            <AsideAdmin className={styles.adminOptions}/>
            <section className={styles.adminContent}>
                
                <div  className={styles.icon} onClick={() => setIsOpenForm(!isOpenForm)}>
                    {isOpenForm ? <IoCloseCircle size="4rem" color="#0b3874"/> : <IoAddCircle size="4rem" color="#0b3874"/>}
                    
                </div>

                {isOpenForm ? (
                    <div className={styles.createNewProductConatiner}>
                        <FormProduct title={'Novo Produto'} buttonSubmit={'Cadastrar Produto'} saveProduct={postnewProduct}/>
                    </div>
                ) : (
                    <div>
                        <FilterAdmin/>
                        <ProductListAdmin className={styles.products}/>
                    </div>
                    
                )}

                {alert && <AlertComponent severity={alert.severity} message={alert.message} />}
                
            </section>
        </section>
    )
}
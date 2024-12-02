import { useEffect, useState } from "react";
import AsideAdmin from "../../../Components/AsideAdmin";
import FilterAdmin from "../../../Components/FilterAdmin";
import ProductListAdmin from "../../../Components/ProductListAdmin";
import { IoAddCircle } from "react-icons/io5";
import {useNavigate} from 'react-router-dom';
import axios from "axios";

export default function Admin() {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState('');
    const [filteredData, setFilteredData] = useState([])

    async function getProducts() {
        try {
            const products = await axios.get("http://localhost:3000/atelier");
            setData(products.data);
        } catch (error) {
            console.log("erro ao carregar produtos para a página de admin");
        }
    }

    useEffect(() => {
        getProducts()
    }, []);

    function handleFilter() {
        const filtered = data.filter((item) => 
            item.title.toLowerCase().includes(filter.toLowerCase())
        );
        setFilteredData(filtered)
        console.log(filtered)
    }

    const navigate = useNavigate();

    const updateProduct = (id) => {
        navigate(`/admin/update/${id}`)
    }

    const saveNewProduct = () => {
        navigate('/admin/newProduct')
    }

    return (
        <section style={styles.adminContainer}>
            <AsideAdmin/>
            <section style={styles.adminContent}>
            
                <div style={styles.adminHeader}>
                    <div style={styles.filter}>
                    <h2>Produtos Disponiveis</h2>
                        <FilterAdmin filter={filter} setFilter={setFilter} handleFilter={handleFilter} />
                    </div>
                    <div  style={styles.icon} onClick={saveNewProduct}>
                        <IoAddCircle size="4rem" color="#0b3874" style={{cursor: 'pointer'}}/>
                    </div>
                </div>
                <ProductListAdmin style={styles.products} updateProduct={updateProduct} data={data} filteredData={filteredData}/>  
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
    adminHeader: {
        display: 'flex'
    },
    filter: {
        flex: 1
    },
    icon: {
        justifyContent: 'flex-end',
        margin: '25px'
    },
}
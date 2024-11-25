import Product from '../Product'
import axios from 'axios'
import styles from './style.module.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function ProductList({ filterPrice, filterSize }) {
    const [productsList, setProductsList] = useState([]);
    const [filteredList, setFilteredList] = useState([])

    async function getProducts() {
        try {
            const response = await axios.get("http://localhost:3000/atelier");
            console.log(response.data)
            setProductsList(response.data);
            
          } catch (error) {
            alert("Erro ao buscar dados");
          }
    }

    useEffect(() => {
        getProducts();
    }, []);

    function filterProducts(products) {
        let filtered = [...products];
        if(filterPrice) {
            filtered = filtered.filter(item => item.price <= filterPrice);
        }
        if (filterSize === 'Todos') {
            return filtered
        }else if (filterSize) {
            filtered = filtered.filter(item => item.size === filterSize);
        }
        return filtered;
    }

    useEffect(() => {
        if (productsList.length > 0) {
            const filtered = filterProducts(productsList);
            setFilteredList(filtered);
        }
    }, [filterPrice, filterSize, productsList]);
    
    return (
        <section className={styles.productListContainer}>
            
            <div className={styles.productListItems}>
            {filteredList.length > 0 ? filteredList.map((product) => (
                <Link key={product.id} to={`/produto/${product.id}`}>
                    <Product image={product.images[0]} title={product.title} price={product.price} category={product.size}/>
                </Link>
            )) : <span className={styles.filterSpan}>Não há produtos com o filtro aplicado</span>}
            </div>
            
        </section>
    )
}
//
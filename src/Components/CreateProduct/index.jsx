import { useState } from 'react'
import styles from './style.module.css'

export default function CreateProduct({saveProduct}) {
    const [formData, setFormData] = useState({title: "", description: "", price: 0, images: [], size: "", promotion: false, filter: []})
    
    const handleSubmit = (event) => {
        event.preventDefault();  
        saveProduct(formData);
    };

    return (
        <section className={styles.createProductContainer}>
            <h2>Novo Produto</h2>

            <form onSubmit={handleSubmit}>
                <label>Título:</label>
                <input value={formData.title} onChange={(ev) => setFormData({...formData, title: ev.target.value})} required/>
                
                <label>Descrição:</label>
                <textarea value={formData.description} onChange={(ev) => setFormData({...formData, description: ev.target.value})} required/>
                
                <label>Preço:</label>
                <input type="number" value={formData.price} onChange={(ev) => setFormData({...formData, price: ev.target.value})} required/>
                
                <label>Imagens (URLs separados por vírgula):</label>
                <input value={formData.images} onChange={(ev) => setFormData({...formData, images: ev.target.value.split(',')})} required/>

                <label>Tamanho:</label>
                <input value={formData.size} onChange={(ev) => setFormData({...formData, size: ev.target.value})} required/>

                <div>
                    <label>Em promoção?</label>
                    <input type="checkbox" checked={formData.promotion} onChange={(ev) => setFormData({...formData, promotion: ev.target.checked})}/>
                </div>

                <label>Filtros (separados por vírgula):</label>
                <input value={formData.filter} onChange={(ev) => setFormData({...formData, filter: ev.target.value.split(',')})}/>

                <button type='submit'>Cadastrar Produto</button>
            </form>
        </section>
    )
}
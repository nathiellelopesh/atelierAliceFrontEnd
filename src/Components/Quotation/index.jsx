import { useState } from "react"

export default function Quotation () {
    const [formDataQUotation, setFormDataQUotation] = useState({name: '', phone: '', message: '', image: ''});

    return (
        <section>
            <h3>Orçamento</h3>
            <p>Gostaria de ter uma peça feita sob medida para você? Faça um orçamento!</p>
            <form>
                <label>Nome</label>
                <input value={formDataQUotation.name} onChange={(ev) => setFormDataQUotation({...formDataQUotation, name: ev.target.value})} required/>

                <label>Telefone</label>
                <input value={formDataQUotation.phone} onChange={(ev) => setFormDataQUotation({...formDataQUotation, phone: ev.target.value})} required/>

                <label>Mensagem</label>
                <textarea value={formDataQUotation.message} onChange={(ev) => setFormDataQUotation({...formDataQUotation, message: ev.target.value})} required/>

                <label>Imagem de referência</label>
                <input value={formDataQUotation.image} onChange={(ev) => setFormDataQUotation({...formDataQUotation, image: ev.target.value})} required/>

                <button type="submit">Enviar</button>
            </form>
        </section>
    )
}
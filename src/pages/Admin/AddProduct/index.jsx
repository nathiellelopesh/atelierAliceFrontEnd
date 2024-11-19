import { useState, useEffect } from 'react'
import AsideAdmin from "../../../Components/AsideAdmin";
import axios from 'axios';
import BasicTextFields from '../../../Components/Input';
import CheckboxLabel from '../../../Components/CheckBox';
import BasicButtons from '../../../Components/Button';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../../context';

export default function AddProduct() {

    const [formData, setFormData] = useState({
        title: '',
        price: '',
        size: '',
        filter: [],
        description: '',
        images: [],
        promotion: false,
    });

    const navigate = useNavigate()

    const { showAlertMessage } = useAppContext()

    const postnewProduct = async () => {
        try {
            await axios.post("http://localhost:3000/atelier/admin/createProduct", formData)
            showAlertMessage("Produto Cadastrado com sucesso!", "success");
            navigate('/admin')
        } catch (error) {
            console.log(error)
            showAlertMessage("Não foi possível cadastrar novo produto", "error");
        }
        
    }

    return (
        <section style={styles.page}>
            <AsideAdmin/>
            <section style={styles.formContent}>
               
        
                <h2 style={styles.h2}>Cadastrar novo Produto</h2>

                <form onSubmit={(e) => e.preventDefault()} style={styles.form}>
                    <div style={styles.InputContainer}>
                        <BasicTextFields
                            label={"Título"}
                            value={formData.title}
                            onChange={(ev) => setFormData({...formData, title: ev.target.value})}
                            required
                        />
                        <BasicTextFields
                            label={"Preço"}
                            type="number"
                            value={formData.price}
                            onChange={(ev) => setFormData({...formData, price: ev.target.value})}
                            required
                        />
                    </div>

                    <div style={styles.InputContainer}>
                        <BasicTextFields
                            label={"Tamanho"}
                            value={formData.size}
                            onChange={(ev) => setFormData({...formData, size: ev.target.value})}
                            required
                        />
                        <BasicTextFields
                            label={"Filtros (separados por vírgula)"}
                            multiline maxRows={5}
                            value={formData.filter}
                            onChange={(ev) => setFormData({...formData, filter: ev.target.value.split(',')})}
                        />
                    </div>

                    <div style={styles.InputContainer}>
                        <BasicTextFields
                            label={"Descrição"}
                            multiline maxRows={8}
                            sx={{
                                '& .MuiInputBase-root': {
                                  height: '200px',
                                }
                              }}
                            value={formData.description}
                            onChange={(ev) => setFormData({...formData, description: ev.target.value})}
                            required
                        />
                        <BasicTextFields
                            label={"Imagens (URLs separados por vírgula)"}
                            multiline maxRows={8}
                            sx={{
                                '& .MuiInputBase-root': {
                                  height: '200px',
                                }
                              }}
                            value={formData.images}
                            onChange={(ev) => setFormData({...formData, images: ev.target.value.split(',')})}
                            required
                        />
                    </div>
                    
                   
                    <CheckboxLabel
                        label={"Em promoção?"}
                        checked={formData.promotion}
                        onChange={(ev) => setFormData({...formData, promotion: ev.target.checked})}
                    />
                    
                    <BasicButtons color={"primary"} onClick={postnewProduct}>Salvar</BasicButtons>
                    
                </form>

            </section>
        </section>
    )
}

const styles = {
    page: {
        display: 'flex',
        height: '100vh'
    },
    InputContainer: {
        display: 'flex'
    },
    formContent: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        overflowY: 'auto',
        height: '100%'
    },
    h2: {
        padding: '15px',
        color: 'black'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },

}
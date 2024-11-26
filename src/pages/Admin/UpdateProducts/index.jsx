import { useState, useEffect } from 'react'
import AsideAdmin from "../../../Components/AsideAdmin";
import axios from 'axios';
import BasicTextFields from '../../../Components/Input';
import CheckboxLabel from '../../../Components/CheckBox';
import BasicButtons from '../../../Components/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppContext } from '../../../context';
import AlertDialog from '../../../Components/Dialog';

export default function UpdateProductsScreen() {

    const [formData, setFormData] = useState({
        title: '',
        price: '',
        size: '',
        description: '',
        images: [],
        is_promotion: false,
        is_sold: false
    });

    const [openDialog, setOpenDialog] = useState(false);
    const [message, setMessage] = useState('');
    const [actionType, setActionType] = useState('');

    const navigate = useNavigate()

    const { showAlertMessage } = useAppContext()

    const { id } = useParams();

    const getCurrentProduct = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/atelier/${id}`);
            setFormData(response.data);
            console.log(response.data)
        } catch (error) {
            console.error("Erro ao buscar produto:", error);
        }
    }
    
    useEffect(() => {
        getCurrentProduct();
    }, []);

    const saveProduct = () => {
        setOpenDialog(true);
        setMessage("Tem certeza que deseja MODIFICAR este produto?");
        setActionType('save');
    };

    const deleteProduct = () => {
        setOpenDialog(true);
        setMessage("Tem certeza que deseja EXCLUIR este produto?");
        setActionType('delete')
    }

    const handleDialogClose = async (confirmed) => {
        setOpenDialog(false);

        if (confirmed) {
            try {
                if (actionType === 'save') {
                    await axios.put(`http://localhost:3000/atelier/admin/updateProduct/${id}`, formData);
                    showAlertMessage("Produto atualizado com sucesso!", "success");
                    navigate('/admin')
                } else if (actionType === 'delete') {
                    await axios.delete(`http://localhost:3000/atelier/admin/updateProduct/${id}`)
                    showAlertMessage("Produto deletado com sucesso!", "success");
                    navigate('/admin')
                }
                
            } catch (error) {
                console.error("Erro em update:", error);
                setAlert({ severity: "error", message: "Erro ao salvar ou excluir produto." });
            }
        }
        
    }

    useEffect(() => {
        console.log(formData)
    }, [formData])
    

    return (
        <section style={styles.page}>
            <AsideAdmin/>
            <section style={styles.formContent}>
               
        
                <h2 style={styles.h2}>Atualizar Produto</h2>

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
                    
                   <div style={styles.InputContainer}>
                        <CheckboxLabel
                            sx={{paddingRight: '15px'}}
                            label="Em promoção"
                            checked={formData.is_promotion}
                            onChange={(ev) => setFormData({...formData, is_promotion: ev.target.checked})}
                        />

                        <CheckboxLabel
                            label={"Vendido"}
                            checked={formData.is_sold}
                            onChange={(ev) => setFormData({...formData, is_sold: ev.target.checked})}
                        />
                    </div>
                    <div style={styles.buttons}>
                        <BasicButtons color={"primary"} onClick={saveProduct}>Salvar</BasicButtons>
                        <BasicButtons color={"error"} onClick={deleteProduct}>Deletar</BasicButtons>
                    </div>
                    
                    
                </form>

                <AlertDialog 
                    open={openDialog}
                    onClose={() => setOpenDialog(false)}
                    message={message}
                    onConfirm={handleDialogClose}
                />
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
    buttons: {
        display: 'flex',
        gap: '30px'
    }

}

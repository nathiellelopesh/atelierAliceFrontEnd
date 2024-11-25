//
import { useState } from "react"
import Title from "../Title";
import BasicButtons from "../Button";
import BasicTextFields from "../Input";
import InputFileUpload from "../InputFile";
import axios from "axios";
import { useAppContext } from "../../context";

export default function FormContact () {
    const [formData, setFormData] = useState({name: '', phone: '', message: '', image: null});
    const [isValidPhone, setIsValidPhone] = useState(true);

    const phoneRegexBr = /^(\+55|55)\s?(\d{2})\s?9\d{4}-?\d{4}$|^\(\d{2}\)\s?9\d{4}-?\d{4}$/;
    const phoneRegexPy = /^(\+595|595)\s?9\d{3}\s?\d{4}$|^\(0\d{3}\)\s?\d{3}\s?\d{3}$/;
    const phoneRegexArg = /^(\+54|54)\s?9(\d{1})\s?(\d{2})\s?\d{4}-?\d{4}$|^\(\d{3}\)\s?\d{4}-?\d{4}$/; 

    const { showAlertMessage } = useAppContext()

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (formData.phone && !isValidPhone) {
            showAlertMessage("Telefone inválido", "error");
            return;
        }

        try {
            
            await axios.post("http://localhost:3000/atelier/", formData);
            showAlertMessage("Mensagem enviada com sucesso!", "success");
            setFormData({ name: '', phone: '', message: '', image: null });
        } catch (error) {
            showAlertMessage("Não foi possível enviar a mensagem", "error");
        }
        console.log("Formulário enviado:", formData);

    }

    const handleChange = (event) => {
        const value = event.target.value;
        setFormData((prev) => ({ ...prev, phone: value }));

        setIsValidPhone(phoneRegexBr.test(value) || phoneRegexPy.test(value) || phoneRegexArg.test(value));
    };

    return (
        <section>
            <Title titulo={"ORÇAMENTO"}/>
            <form onSubmit={handleSubmit} style={styles.formContainer}>
                <BasicTextFields
                    label={"Nome"}
                    value={formData.name}
                    onChange={(ev) => setFormData({...formData, name: ev.target.value})}
                    required
                />

                <BasicTextFields
                    label={"Telefone"}
                    value={formData.phone}
                    onChange={handleChange}
                    type="text"
                    error={!isValidPhone}
                    helperText={isValidPhone ? '' : 'Br (00) 00000-0000 / Arg (000) 0000-0000 / Py (0000) 000 000'}
                    required
                />

                <BasicTextFields
                    label={"Mensagem"}
                    multiline maxRows={5}
                    value={formData.message}
                    onChange={(ev) => setFormData({...formData, message: ev.target.value})}
                    required
                />

                <InputFileUpload
                    message={"Imagem de Referência"}
                    onChange={(ev) => setFormData({...formData, image: ev.target.files[0]})}
                />

                {formData.image && <span>{formData.image.name}</span>}
                <BasicButtons type='submit'>Enviar</BasicButtons>
            </form>
        </section>
    )
}

const styles = {
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
        marginBottom: '40px',
    }
}
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import BasicButtons from "../../Components/Button";
import BasicTextFields from "../../Components/Input";
import { useAppContext } from "../../context";
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';

const auth = getAuth();

export default function SignIn() {
    const [login, setLogin] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const {user, showAlertMessage} = useAppContext()

    useEffect(() => {
        if (user) {
            navigate('/admin');
        }
    }, [user, navigate]);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, login.email, login.password);
            navigate('/admin');
        } catch (erro) {
            console.error('Erro ao logar: ', erro);
            showAlertMessage('Não foi possível logar usuário', 'error', 'filled');
        }
    };


    return (
        <section style={styles.container}>
            <h2>Login</h2>
            <BasicTextFields
                    label={"Email"}
                    type="email"
                    value={login.message}
                    onChange={(ev) => setLogin({ ...login, email: ev.target.value })}
                    required
            />
            <BasicTextFields
                    label={"Senha"}
                    value={login.password}
                    type="password"
                    onChange={(ev) => setLogin({ ...login, password: ev.target.value })}
                    required
            />
            <BasicButtons onClick={handleLogin}>Entrar</BasicButtons>
        </section>
    )
}

const styles = {
    container: {
        marginTop:'30px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
}

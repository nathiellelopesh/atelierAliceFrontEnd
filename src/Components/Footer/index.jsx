export default function Footer() {
    return (
        <footer style={styles.footer}>
            <p>Rua Bartolomeu de Gusmão, 760 - Foz do Iguaçu - PR</p>
            <p>Telefone: (45) 99946-2126</p>
            <p>© 2024, feito com ❤ por Atelier Alice.</p>
        </footer>
    )
}

const styles = {
    footer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '15px',
        backgroundColor: 'var(--mainColor)',
        fontFamily: 'var(--fontFamilyPrincipal)',
        padding: '30px 0',
        color: 'white',
    }
}
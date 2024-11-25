
export default function Title({titulo}) {
    return (
        <div style={styles.title}>
            <h2 style={styles.h2}>{titulo}</h2>
            <hr  style={styles.hr}/>
        </div>
    )
}

const styles = {
    title: {
        textAlign: 'center',
    },
    h2: {
        color: 'black',
        fontFamily: 'var(--fontFamilyPrincipal)',
        marginBottom: '20px',
        fontSize: '2rem',
    },
    hr: {
        border: '0',
        height: '2px',
        width: '300px',
        backgroundColor: '#000000',
        margin: '35px auto',
    }
}
function Letra({letra, status}) {
const cores = {
    certo: '#538d4e',
    existe: '#b59f3b',
    errado: '#3a3a3c',
    '': '#121213'
}

    return (
        <div style={{
            width: '62px',
            height: '62px',
            border: '2px solid #3a3a3c',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '32px',
            fontWeight: 'bold',
            color: '#fff',
            backgroundColor: cores[status] || cores[''],
            textTransfom: 'uppercase'
        }}>
            {letra}
        </div>
    )
}

export default Letra
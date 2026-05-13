import Letra from "./Letra"

function Linha ({ letras, avaliada, palavra }) {
    const celulas = Array(5).fill(null).map((_, i) => ({
        letra: letras[i] || '',
        status: avaliada ? getStatus(letras[i], i, palavra) :''
    }))

    function getStatus(letra, index, palavra) {
        if (!letra) return ''
        if (palavra[index] === letra) return 'certo'
        if (palavra.includes(letra)) return 'existe'
        return 'errado'
    
    }

    return (
        <div style={{ display: 'flex', gap: '8px', marginBottom: '8px'}}>
            {celulas.map((celula, i) => (
                <Letra key={i} letra={celula.letra} status={celula.status}/>
            ))}
        </div>
    )
}

export default Linha
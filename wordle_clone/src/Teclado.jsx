function Teclado({ onTecla }) {
  const linhas = [
    ['Q','W','E','R','T','Y','U','I','O','P'],
    ['A','S','D','F','G','H','J','K','L'],
    ['ENTER','Z','X','C','V','B','N','M','⌫']
  ]

  return (
    <div style={{ marginTop: '24px' }}>
      {linhas.map((linha, i) => (
        <div key={i} style={{ display: 'flex', gap: '6px', justifyContent: 'center', marginBottom: '6px' }}>
          {linha.map(tecla => (
            <button
              key={tecla}
              onClick={() => onTecla(tecla === '⌫' ? 'BACKSPACE' : tecla)}
              style={{
                padding: '14px 8px',
                minWidth: tecla === 'ENTER' ? '65px' : '43px',
                backgroundColor: '#818384',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                fontSize: tecla === 'ENTER' ? '12px' : '16px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              {tecla}
            </button>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Teclado
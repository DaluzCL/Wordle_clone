import {useState, useEffect, useCallback} from 'react'
import Grade from './Grade'
import palavras from './Palavras'
import Teclado from './Teclado'


function App() {
 const [palavra, setPalavra] = useState(() => {
  return palavras[Math.floor(Math.random() * palavras.length)]
 })
 const [tentativas, setTentativas] = useState([])
 const [tentativaAtual, setTentativaAtual] = useState("")
 const [jogoAcabou, setJogoAcabou] = useState(false)


    const handleTecla = useCallback((tecla) => {
        if (jogoAcabou) return

        const t = tecla.toUpperCase()

       
        if (t === 'ENTER') {
        if (tentativaAtual.length === 5) {
        const novasTentativas = [...tentativas, { letras: tentativaAtual.split(''), avaliada: true }]
        setTentativas(novasTentativas)
        setTentativaAtual("")
        if (tentativaAtual === palavra) setJogoAcabou(true)
        if (novasTentativas.length === 6) setJogoAcabou(true)
    }
       }else if (t === 'BACKSPACE') {
            setTentativaAtual(prev => prev.slice(0, -1))
          }else if (/^[A-ZÁÉÍÓÚÀÂÊÔÃÕÇ]$/.test(t) && tentativaAtual.length < 5) {
            setTentativaAtual(prev => prev + t)
          }
        }, [tentativaAtual, tentativas, jogoAcabou, palavra])

        useEffect(() => {
        function handleKeyDown(e) {
          handleTecla(e.key)
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
      }, [handleTecla])
  
  return (
    <div style={{ display:'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#121213', minHeight: '100vh', color: '#fff', paddingTop: '40px'}}>
    <h1 style={{ fontSize: '48px', letterSpacing: '4px', borderBottom: '1px solid #3a3a3c', paddingBottom: '16px', marginBottom: '24px'}}>Wordle Clone</h1>
    <Grade tentativas={tentativas} tentativaAtual={tentativaAtual} palavra={palavra}/>   
    
    {jogoAcabou && tentativas[tentativas.length - 1].letras.join('') === palavra && (
      <p style={{marginTop: '24px', fontSize: '24px', color: '#538d4e', fontWeight: 'bold' }}>Parabéns! Você acertou a palavra!</p>
    )}

    {jogoAcabou && tentativas[tentativas.length - 1]?.letras.join('') !== palavra && (
      <p style={{marginTop: '24px', fontSize: '18px', color: '#ff4444', fontWeight: 'bold' }}>Fim de jogo! A palavra era: {palavra}</p>
    )}      

    <Teclado onTecla={handleTecla}/>
    </div>
  )
}

export default App


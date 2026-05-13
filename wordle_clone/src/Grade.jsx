import Linha from './Linha'

function Grade({ tentativas, tentativaAtual, palavra }) {
    const linhas = [...tentativas]

    //adiciona a tentativa atual se o jogo não tiver acabado
    if (tentativas.length < 6) {
        linhas.push({ letras: tentativaAtual.split(''), avaliada: false})
    }

    //completa as linhas restantes com linhas vazias
    while (linhas.length < 6) {
        linhas.push({ letras: [], avaliada: false})
    }


    return (
        <div>
{linhas.map((linha, i) =>( 
    <Linha key={i} letras={linha.letras} avaliada={linha.avaliada} palavra={palavra}/>
          ))}
        </div>
    )
}

export default Grade
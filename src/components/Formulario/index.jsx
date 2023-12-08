import { useState, useEffect } from "react"




const Formulario = () => {
    let [materiaA, setMateriaA] = useState();
    let [materiaB, setMateriaB] = useState();
    let [materiaC, setMateriaC] = useState();
    let [nome, setNome] = useState('');

    useEffect(() => {
        console.log('O componente iniciou');

        return () => {
            console.log('O componente finalizou')
        }
    }, [nome]);

    let alteraNome = (evento) => {
        // console.log(evento.target.value)
        // setNome(evento.target.value)

        setNome(estadoAnterior => {

            // estadoAnterior = valoroso

            return evento.target.value;
        })
    }
    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if (media >= 7) {
            return (
                <p>Olá {nome}, você foi aprovado</p>
            )
        } else {
            return (
                <p> Olá {nome}, você está reprovado</p>
            )
        }
    }

    return (
        <form>
            <ul>
                {[1, 2, 3, 4, 5].map(item => (
                    <li key={item}>{item}</li>              
                ))} 
            </ul>

            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota matéria A" onChange={({target}) => setMateriaA(parseInt(target.value))} /> 
            <input type="number" placeholder="Nota matéria B" onChange={evento => setMateriaB(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota matéria C" onChange={evento => setMateriaC(parseInt(evento.target.value))} />
            {renderizaResultado()}
        </form>
    )
}

export default Formulario
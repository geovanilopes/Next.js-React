export default function Repeticao1() {
    const listaAprovados = [
        'Ana', 'Bia', 'Carlos', 'Daniel', 'Eduardo', 'Geraldo',
        'Helena', 'Igor', 'Jorge', 'Lucas', 'Matheus', 'Natalia', 'Otávio', 'Paulo',
    ]

    function renderizarLista() {
        return listaAprovados.map((item, index) => {
            return <li key={index}>{item}</li>
        })
    }
  

    return (
        <ul>
            {renderizarLista()}
        </ul>
    )
}

// function renderrizarLista() {
//     const itens =[]

//     for (let i = 0; i < listaAprovados.length; i++) {
//         itens.push(
//             <li key={listaAprovados[i]}>{listaAprovados[i]}</li>
//         )
//     }

//     return (itens         
//     )
// }

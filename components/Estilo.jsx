export default function Estilo(props) {

    const classeAplicada = props.numero >= 0 ? "azul" : "vermelha"

    return (
        <div>
            <h1 style={ {backgroundColor: props.numero >= 0 ? "#2D2" : "#D22"} }>
                Estilo qualquer</h1>
            <h2 className= {classeAplicada}  >textinho</h2>
        </div>
    )
}
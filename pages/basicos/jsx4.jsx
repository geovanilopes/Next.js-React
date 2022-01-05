export default function jsx4() {
    const Subtitulo = "Estou no JavaScript!!!!"
    return (
        <div>
            <h1>Integracao Js and Jsx</h1>
            <h2>{Subtitulo}</h2>
            <h3>{3 * 3 }</h3>
            <h4>{Math.max(13, 39)}</h4>
            <h5>{entre(5, 1, 10)}</h5>
        </div>
    )
}

function entre(valor , min, max) {
    if (valor >= min && valor <= max) {
        return "Sim.."
    } else {
        return "Nao.."
    }
}
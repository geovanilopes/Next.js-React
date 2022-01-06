import Titulo from "../../components/Titulo"

export default function usandoTitulo() {
    return (
        <div>
            <Titulo principal="pagina decadastro"
                secundario="incluir, alterar e excluir coisas!" 
                pequno={true}
                />
            <Titulo />
        </div>
    )
}

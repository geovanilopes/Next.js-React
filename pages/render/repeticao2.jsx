import listaProdutos from '../../data/listaProdutos'
export default function Repeticao2() {

    function renderizarLista() {
        return listaProdutos.map((produto => {
            return (
                <tr key={produto.id}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>{produto.preco}</td>
                </tr>
            )
        }))
    }

    const comBorda = {
        border: '1px solid #000',
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Codigo</th>
                        <th>Nome</th>
                        <th>Preco</th>
                    </tr>
                </thead>
                <tbody>
                    {renderizarLista()}
                </tbody>
            </table>
        </div>
    )
}
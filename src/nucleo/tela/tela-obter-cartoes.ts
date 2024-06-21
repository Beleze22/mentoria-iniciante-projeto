import ObterCartoes from "../fluxos/obter-cartoes"

export default class TelaObterCartoes {
    exibir() {
        console.log("Lista de Cartões: ")
        console.log("---------------------")

        const cartoes = new ObterCartoes().executar()
        for (const cartao of cartoes) {
            console.log(`${cartao.id} - ${cartao.nome}`)
        }
    }
}
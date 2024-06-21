import { Cartao } from "../dados/cartao";
import CartaoBD from "../infra/cartao-bd";

export class CadastrarCartao {
    executar(nome: string) {
        const novoCartao = new Cartao(nome)
        CartaoBD.salvar(novoCartao)
    }
}
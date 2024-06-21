import { Cartao } from "../dados/cartao";
import CartaoBD from "../infra/cartao-bd";

export default class ObterCartoes {
    executar(): Cartao[] {
        return CartaoBD.obter()
    }
}
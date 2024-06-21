import { Cartao } from "../dados/cartao";

export default class CartaoBD {
    private static lista: Cartao[] = []

    static salvar(cartao: Cartao): void {
        this.lista.push(cartao)
    }

    static obter(): Cartao[] {
        return this.lista
    }
}
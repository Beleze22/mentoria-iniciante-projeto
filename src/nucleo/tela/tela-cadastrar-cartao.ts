import Prompt from "prompt-sync"
import { CadastrarCartao } from "../fluxos/cadastrar-cartao"

export default class TelaCadastrarCartao {
    private prompt = Prompt()

    exibir() {
        console.log("Novo Cartão")
        console.log("---------------------------\n")

        const nomeCartao = this.prompt("Insira o nome do cartão: ")
        new CadastrarCartao().executar(nomeCartao)

        console.log("Cartão cadastrado com sucesso!")
    }
}
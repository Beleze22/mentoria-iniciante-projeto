import Prompt from "prompt-sync"
import { CadastrarCartao } from "../fluxos/cadastrar-cartao"
import TelaCadastrarCartao from "./tela-cadastrar-cartao"
import TelaObterCartoes from "./tela-obter-cartoes"

export default class TelaPrincipal {
    private prompt = Prompt()

    exibir() {
        console.log("Menu Principal!")
        console.log("-------------------")
        console.log("1 - Novo Cartão")
        console.log("2 - Lista de Cartões")
        console.log("3 - Sair")

        const opcao = this.prompt("Escolha uma opção: ")

        switch (opcao) {
            case "1":
                new TelaCadastrarCartao().exibir()
                break;
            case "2":
                new TelaObterCartoes().exibir()
                break;
            case "3":
                console.log("Sair!\n")
                process.exit(0)
                break;
            default:
                console.log("Escolha inválida!\n")
                break;
        }

        console.log("\n\n")

        this.exibir()
    }
}
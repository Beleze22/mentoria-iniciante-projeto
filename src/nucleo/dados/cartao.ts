import { Id } from "./id";

export class Cartao {
    constructor(readonly nome: string, readonly id: string = Id.novo() ) {
    }
}


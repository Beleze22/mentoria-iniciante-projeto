export class Id {
    static novo() {
        return `${this.parte()}-${this.parte()}-${this.parte()}`
    }

    private static parte() {
        return Math.random().toString(36).substring(2, 15)
    }
}
class Rumble {
    constructor(nome, levelAtual, progresso, raridade, imagem){
        this.nome = nome;
        this.levelAtual = levelAtual;
        this.raridade = raridade;
        this.progresso = progresso;
        this.imagem = imagem;

        this.criarJSON();
    }

    criarJSON(){

        let json = {}

        json.nome = this.nome;
        json.levelAtual = this.levelAtual;
        json.raridade = this.raridade;
        json.progresso = this.progresso;
        json.imagem = this.imagem;

        console.log(json);

        return json

    }
}
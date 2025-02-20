const vingadores = [
    {
        nome: "Steve Rogers",
        codinome: "Capitão América",
        armaPrincipal: "Escudo americano",
        armaSecundaria: "",
        velocidade: 85,
        forca: 75,
        resistencia: 80,
        descricao: function () {
            return `Nome: ${this.nome}\nCodinome: ${this.codinome}\nArma Principal: ${this.armaPrincipal}\nArma Secundária: ${this.armaSecundaria}\nForça: ${this.forca}\nVelocidade: ${this.velocidade}\nResistência: ${this.resistencia}`;
        }
    },
    {
        nome: "Tony Stark",
        codinome: "Homem de Ferro",
        armaPrincipal: "Armadura Tecnológica",
        armaSecundaria: "Raio Repulsor",
        velocidade: 90,
        forca: 85,
        resistencia: 70,
        descricao: function () {
            return `Nome: ${this.nome}\nCodinome: ${this.codinome}\nArma Principal: ${this.armaPrincipal}\nArma Secundária: ${this.armaSecundaria}\nForça: ${this.forca}\nVelocidade: ${this.velocidade}\nResistência: ${this.resistencia}`;
        }
    },
    {
        nome: "Thor Odinson",
        codinome: "Thor",
        armaPrincipal: "Mjolnir",
        armaSecundaria: "Stormbreaker",
        velocidade: 80,
        forca: 100,
        resistencia: 95,
        descricao: function () {
            return `Nome: ${this.nome}\nCodinome: ${this.codinome}\nArma Principal: ${this.armaPrincipal}\nArma Secundária: ${this.armaSecundaria}\nForça: ${this.forca}\nVelocidade: ${this.velocidade}\nResistência: ${this.resistencia}`;
        }
    },
    {
        nome: "Bruce Banner",
        codinome: "Hulk",
        armaPrincipal: "Força Bruta",
        armaSecundaria: "Salto Gigante",
        velocidade: 60,
        forca: 100,
        resistencia: 100,
        descricao: function () {
            return `Nome: ${this.nome}\nCodinome: ${this.codinome}\nArma Principal: ${this.armaPrincipal}\nArma Secundária: ${this.armaSecundaria}\nForça: ${this.forca}\nVelocidade: ${this.velocidade}\nResistência: ${this.resistencia}`;
        }
    },
    {
        nome: "Natasha Romanoff",
        codinome: "Viúva Negra",
        armaPrincipal: "Habilidade em Combate",
        armaSecundaria: "Armas de fogo",
        velocidade: 85,
        forca: 70,
        resistencia: 75,
        descricao: function () {
            return `Nome: ${this.nome}\nCodinome: ${this.codinome}\nArma Principal: ${this.armaPrincipal}\nArma Secundária: ${this.armaSecundaria}\nForça: ${this.forca}\nVelocidade: ${this.velocidade}\nResistência: ${this.resistencia}`;
        }
    },
    {
        nome: "Thanos",
        codinome: "Titã Louco",
        armaPrincipal: "Manopla do Infinito",
        armaSecundaria: "Força sobre-humana",
        velocidade: 75,
        forca: 100,
        resistencia: 100,
        descricao: function () {
            return `Nome: ${this.nome}\nCodinome: ${this.codinome}\nArma Principal: ${this.armaPrincipal}\nArma Secundária: ${this.armaSecundaria}\nForça: ${this.forca}\nVelocidade: ${this.velocidade}\nResistência: ${this.resistencia}`;
        }
    }
];

console.log("=== Descrição dos Personagens ===");
vingadores.forEach(heroi => console.log(heroi.descricao() + "\n"));

const vencedores = {};
['forca', 'velocidade', 'resistencia'].forEach(atributo => {
    let vencedor = vingadores.reduce((max, heroi) => (heroi[atributo] > max[atributo] ? heroi : max));
    vencedores[atributo] = vencedor;
    console.log(`O personagem com maior ${atributo} é ${vencedor.nome} (${vencedor.codinome}) com ${vencedor[atributo]}.`);
});

const ranking = {};
vingadores.forEach(heroi => ranking[heroi.nome] = 0);

Object.values(vencedores).forEach(vencedor => ranking[vencedor.nome]++);

const melhorPersonagem = Object.keys(ranking).reduce((max, nome) => ranking[nome] > ranking[max] ? nome : max);
console.log(`\nO melhor personagem de todos é: ${melhorPersonagem}!`);

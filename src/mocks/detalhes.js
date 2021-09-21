import pocaoAzul from "../../mochila/blue-potion.png";
import pocaoVermelha from "../../mochila/red-potion.png";
import armaduraFogo from "../../mochila/armor-fire.png";
import armaduraVortex from "../../mochila/armor.png";
import arco from "../../mochila/bow.png";
import EspadaMeow from "../../mochila/sword-purple.png";
import EspadaNoite from "../../mochila/sword-blue.png";
import foiceInfernal from "../../mochila/scythe-red.png";
import foiceMorte from "../../mochila/scythe-purple.png";

const detalhes = {
    tema: {
        nome: "Carrinho de Compras",
        nomeLoja: "Shop of Warrior",
        descricao: "Um lugar pra guardar todos seus pertences favoritos!",
        preco: "$100,00",
        botao: "Comprar",
    },
    itens: {
        titulo: "Itens",
        lista: [{
            nome: "Poção de Mana",
            imagem: pocaoAzul,
        }, {
            nome: "Poção de Vida",
            imagem: pocaoVermelha,
        }, {
            nome: "Armadura Solar",
            imagem: armaduraFogo,
        }, {
            nome: "Armadura do Vortex",
            imagem: armaduraVortex,
        }, {
            nome: "Arco Demoníaco",
            imagem: arco,
        }, {
            nome: "Espada do Meow",
            imagem: EspadaMeow,
        }, {
            nome: "Espada da Noite",
            imagem: EspadaNoite,
        },
        {
            nome: "Foice Infernal",
            imagem: foiceInfernal,
        }, {
            nome: "Foice da Morte",
            imagem: foiceMorte,
        }
        ]
    }
}
export default detalhes;
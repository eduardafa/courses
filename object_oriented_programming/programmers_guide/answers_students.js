// student_01
class Produtos {
    constructor() {
        this.tipo = '';

        this.marca = '';

        this.modelo = '';

        this.preço = '';

        this.peso = '';

        this.foto = '';
    }

    Estoque() {
        console.log('Pesquisando estoque...');
    }

    Frete() {
        console.log('Calculando o frete...');
    }

    Valores() {
        console.log('Valor total com entrega...');
    }

    Cliente() {
        console.log('Informe seu dados...');
    }

    Pagamento() {
        console.log('Processar pagamento...');
    }
}

class Carrinho {
    constructor() {
        this.produto = '';

        this.quantidade = '';

        this.preço = '';

        this.foto = '';

        this.peso = '';
    }

    Estoque() {
        console.log('Pesquisando estoque...');
    }

    Frete() {
        console.log('Calculando o frete...');
    }

    Valores() {
        console.log('Valor total com entrega...');
    }

    Cliente() {
        console.log('Informe seu dados...');
    }

    Pagamento() {
        console.log('Processar pagamento...');
    }
}

class Cardápio {
    constructor() {
        this.prato = '';

        this.preço = '';

        this.ingredientes = [];
    }

    Prepara() {
        console.log('Preparando...');
    }
}

class Personagem {
    constructor() {
        this.nome = '';

        this.força = '';

        this.poder = '';
    }

    Anda() {
        console.log('Caminha para frente...');
    }

    Corre() {
        console.log('Corre para frente...');
    }

    Salta() {
        console.log('Salta para frente...');
    }
}

class Carro {
    constructor() {
        this.marca = '';

        this.modelo = '';

        this.ano = '';

        this.foto = '';
    }

    Ignite() {
        console.log('Car engines starting...');
    }

    Move() {
        console.log('Car starts to move...');
    }

    Park() {
        console.log('Car starts to park...');
    }
}

class User {
    constructor() {
        this.name = '';

        this.photo = '';

        this.age = '';

        this.city = '';
    }

    Profile() {
        console.log('User data is being processed');
    }
}

class Cart {
    constructor() {
        this.title = '';

        this.lengthen = '';

        this.visualisation = '';

        this.views = '';

        this.classification = '';
    }

    Play() {
        console.log('Video plays...');
    }

    Pause() {
        console.log('Video pause...');
    }

    Rewind() {
        console.log('Video rewind...');
    }

    FastForward() {
        console.log('Video fast forward...');
    }
}

class Student {
    constructor() {
        this.name = '';

        this.age = '';

        this.nationality = '';

        this.level = '';

        this.email = '';

        this.phone = '';
    }

    Enrolment() {
        console.log('Student is enrolled...');
    }

    Start() {
        console.log('Student start date is set...');
    }

    Finish() {
        console.log('Student finish date is set');
    }

    Payment() {
        console.log('Student payment processed...');
    }
}

// student_02
class Produto {
    constructor() {
        this.codigo = 0;

        this.nome = '';

        this.quantidade = 0;

        this.descricao = '';

        this.marca = '';

        this.modelo = '';

        this.preco = '';
    }

    // métodos
}

class CarrinhoDeCompras {
    constructor() {
        this.codigo = 0;

        this.quantidade = 0;

        this.categoria = 0;

        this.preco = 0;
    }

    InformarPreço() {
        console.log('Preço: R$ ' + this.preco);
    }

    InformarQuantidade() {
        console.log('Preço: R$ ' + this.quantidade);
    }
}

class Menu {
    constructor() {
        this.codigo = 0;

        this.nome = '';

        this.descricao = '';

        this.categoria = '';

        this.preco = '';
    }

    Exibir() {
        console.log('Exibi os atributos de determinado prato');
    }
}

class Personagem {
    constructor() {
        this.nome = '';

        this.descricao = '';

        this.categoria = '';

        this.estilo = '';

        this.forca = '';

        this.velocidade = '';
    }

    Ataque() {
        console.log('Ataca o opononete');
    }

    Defesa() {
        console.log('Se defente do oponente');
    }
}

// student_03
//comida para um sistema de cardápio

class menu {
    constructor() {
        this.Pratos = '';

        this.Bebidas = '';

        this.Entradas = '';

        this.Adicionais = '';

        this.Valor = '';
    }

    Anotar() {
        console.log('anotar');
    }

    Encaminhar() {
        console.log('encaminhar');
    }

    Preparar() {
        console.log('preparar');
    }

    Entregar() {
        console.log('entregar');
    }
}

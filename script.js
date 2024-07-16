/*
let imc = {
    nome : "Victor",
    peso : 70,
    altura : 1.73
}

let imcCalc = imc.peso / imc.altura ** 2;

console.log(`${imc.nome}, seu imc é ${imcCalc} `)*/


/*
let quadrado = {
    lado: 5
}

quadrado.area =  quadrado.lado ** 2 ;
quadrado.perimetro = quadrado.lado * 4;

console.log(quadrado);*/

/*
let agenda = {
    fernanda: '85 8888-8888',
    diego: '85 9999-9999'
}

localStorage.setItem('agenda', JSON.stringify(agenda))

const contatos = localStorage.getItem('agenda');

console.log(JSON.parse(contatos))*/

let livros = JSON.parse(localStorage.getItem('livros')) || []
console.log(livros)

function saveBooks() {
   localStorage.setItem('livros', JSON.stringify(livros))
}

function addBook(){
    const titulo = document.querySelector('#titulo');
    const autor = document.querySelector('#autor');
    const genero = document.querySelector('#genero');
    const ano = document.querySelector('#ano');
    
    const book = {
        titulo: titulo.value,
        autor: autor.value,
        genero: genero.value,
        ano: Number(ano.value)
    }

    livros.push(book)

    saveBooks()
}

function listaLivros(arraysLivros){

    const catalogo = document.querySelector("#catalogo");
    catalogo.innerHTML = '';

    for(const livros of arraysLivros) {
    const div = document.createElement('div');
    div.classList.add('book')
    div.innerHTML = `<h3>Titulo:${livros.titulo}</h3>
                     <p>Autor: ${livros.autor}</p>
                     <p>Genero: ${livros.genero}</p>
                     <p>Ano: ${livros.ano}</p> `

       catalogo.append(div)
    }
}

function searchBook(){
   const termo = document.querySelector('#termo').value;
   const resultados = livros.filter((book) => {
    return book.autor === termo || book.titulo === termo || book.genero === termo
   })
   listaLivros(resultados)
}

listaLivros(livros)
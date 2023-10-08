import chalk from 'chalk';
import { error } from 'console';
import { text } from 'express';
import fs from 'fs';

const textoTeste = "São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.)."

function extraiLinks(texto){
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = regex.exec(texto)
    console.log(capturas)
}

extraiLinks(textoTeste)

function trataErro(erro) {
    //literalmente lancar (erro) para fora do programa
    console.log(erro)
    throw new Error(chalk.red(erro.code, 'não há arquivo no diretorio'))
}

//async e await

async function pegaArquivo(caminhoDoArquivo) {
    try{
        const enconding = 'utf-8'
        const texto = await fs.promises.readFile(caminhoDoArquivo, enconding)
        console.log(chalk.green(texto))
    }catch(erro){
        trataErro(erro)
    }

}

//pegaArquivo("./arquivos/texto.md")

// \[([^[\]]*?)\]\((https?:\/\/[^\s?# . ] . [^\s]*)\)

interface curso {
    titulo: string;
    descricao: string;
    aulas: number;
    maxAlunos?: number;
    iniciarCurso?(teste:string): void;
}

interface cursoProgramacao extends curso{
    aulas:number;
    maxAlunos?:number;
    
}

interface cursoArtes extends curso{
    aulas:number;
    maxAlunos?:number;
    
}

let curso1:cursoProgramacao;
let curso2:cursoProgramacao;
let curso3:cursoArtes;

curso1 = {
    titulo: "Typescript",
    descricao: "Curso de Typescript",
    aulas: 100,
    maxAlunos: 50

};

curso2 = {
    titulo: "Javascript",
    descricao: "Curso de Javascript",
    aulas: 200
 
};

curso3 = {
    titulo: "Pintura",
    descricao: "Aula de Pintura Rupestre",
    aulas:500
}




console.log(curso1)
console.log(curso2)

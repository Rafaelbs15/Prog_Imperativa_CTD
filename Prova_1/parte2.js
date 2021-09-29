let curso = require('./construtorCurso');
let estudantes = require('./estudantes');

let curso1=new curso('Javascript',8,2,['Silvia','Sandro']);

//objeto foi trocado de "aluno" para "estudante"
for (let i=0; i<estudantes.length; i++) {
    if(curso1.verificaAprovacao(estudantes[i])==true) {
        console.log('Aluno',estudantes[i].nome,'está APROVADO!');
    }
    else
    {
        console.log('Aluno',estudantes[i].nome,'está REPROVADO!');
    }
}





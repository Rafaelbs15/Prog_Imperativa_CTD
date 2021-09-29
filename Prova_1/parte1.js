
// let aluno = require('./construtorAluno');
let curso = require('./construtorCurso');
let aluno = require('./construtorAluno');


let aluno1= new aluno ('José',9,[10,8,9.5,2]);
console.log('Faltas:',aluno1.faltas);
console.log('Faltas atualizadas: ',aluno1.atualizaFaltas());
console.log('Faltas atualizadas: ',aluno1.atualizaFaltas());
console.log('Faltas:',aluno1.faltas);
console.log('Média: ',aluno1.calcularMedia());


let curso1=new curso('Javascript',8,2,['Cristina','Sandro']);
curso1.adicionaAlunos(['Mateus','Natália','Giulia']);
console.log('Lista de alunos: ',curso1.listaEstudantes);




  




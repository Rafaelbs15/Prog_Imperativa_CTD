
function Curso (nomeCurso, notaAprovacao, faltasMaximas, listaEstudantes)
{

    this.nomeCurso=nomeCurso;
    this.notaAprovacao=notaAprovacao;
    this.faltasMaximas=faltasMaximas;
    this.listaEstudantes=listaEstudantes;   //array

    //    ...argumento                  ..adiciona no final do array

    //                                                spread operator
    this.adicionaAlunos=(array)=>this.listaEstudantes.push(...array);
    
   
    this.verificaAprovacao=(aluno)=>{
          console.log(aluno);
          console.log(aluno.calcularMedia());
         if (aluno.calcularMedia()>=this.notaAprovacao && aluno.faltas<this.faltasMaximas)
        {
            return true;
        }
        else if (aluno.calcularMedia()>=this.notaAprovacao*1.1 && aluno.faltas===this.faltasMaximas)
        {
            return true;
        }
        else {
            return false;
        }
    }
}
        
module.exports=Curso;
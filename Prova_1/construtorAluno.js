
function Alunos(nome, faltas, notas) {
    //notas =array
    this.nome = nome;
    this.faltas = faltas;
    this.notas = notas;   //receber como array 

    this.atualizaFaltas=()=>this.faltas+=1;   //this.faltas=this.faltas+1
    this.calcularMedia=()=>((this.notas.reduce((total,el)=>total+el))/this.notas.length).toFixed(1);
               
}
module.exports=Alunos;

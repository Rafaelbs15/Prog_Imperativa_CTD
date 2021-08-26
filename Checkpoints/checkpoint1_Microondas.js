// Microondas Super Veloz - Checkpoint1 

//- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.

let tempoDoPrato = [pipoca = 10, macarrao = 8, carne = 15, feijao = 12 , brigadeiro = 8];

function microondas (escolhaOPrato, escolhaOTempo){
  
    if(escolhaOTempo < tempoDoPrato){
           return "tempo insuficiente";
        } else if(escolhaOTempo >=3*tempoDoPrato) {
            return "kabummm";
        } else if(escolhaOTempo >= 2*tempoDoPrato){
            return "sua comida queimou";
        } else if(escolhaOPrato !== "pipoca" && escolhaOPrato !== "macarrao" || "macarrão" && escolhaOPrato !== "carne" && escolhaOPrato !== "feijao" || "jeijão" && escolhaOPrato !== "brigadeiro") {
            return "prato inexistente";
        } else {
            return "prato pronto, bom apetite!!!";
        }

    }

    console.log(microondas("pipoca", 30)); 



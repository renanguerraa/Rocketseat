// Exercício 1

var buttonElement = document.querySelector("#exer1 #confirmar1");

buttonElement.onclick = function() {
    var textInputIdade = document.querySelector("#exer1 #valIdade");
    var idade = parseInt(textInputIdade.value);

    if(idade < 0 || isNaN(idade)){
        alert("Complete o campo com um número inteiro positivo!");

        textInputIdade.value = "";
    } else {

        function checarIdade(idade){
            return new Promise(function(resolve, reject){
                window.setTimeout(2000);
                if(idade >= 18){
                    resolve("Maior que 18 anos!");
                } else {
                    reject("Menor que 18 anos!");
                }
            })
        }
        
        setTimeout(() => {
            checarIdade(idade)
            .then(function(response) {
                alert(response);
            })
            .catch(function(error){
                alert(error);
            });
        }, 2000);
    }
}

// Exercício 2

var buttonElement2 = document.querySelector("#exer2 #confirmar2");

buttonElement2.onclick = function () {
    var textInputUser = document.querySelector("#exer2 #valUser");

    var lista = document.querySelector("#exer2 #repos");

    if(textInputUser.value !== ""){
        while(lista.firstChild){
            lista.removeChild(lista.firstChild);
        }

        axios.get('https://api.github.com/users/'+ textInputUser.value +'/repos')
            .then(function(response){
                for(const value of response.data){
                    var novoItem = document.createElement("li");
                    novoItem.setAttribute("class", "list-group-item");
                    novoItem.appendChild(document.createTextNode("● " + value.name + ": "+ value.description));
                    lista.appendChild(novoItem);
                }
            })
            .catch(function(error){
                alert(error);
                alert("Provavelmente o usuário não existe!");
            });
    } else {
        alert("Complete o campo!");
    }
}
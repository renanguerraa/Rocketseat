// Exercicio 1

class Usuario {
    constructor(){
        this.email = [];
        this.senha = [];

    }

    add(){                                                              
        let inputEmail = document.querySelector("#exer1 #valEmail");
        let inputSenha = document.querySelector("#exer1 #valSenha");

        if(inputEmail.value !== "" && inputSenha.value !== ""){
            if(this.email.indexOf(inputEmail.value) === -1){
                this.email.push(inputEmail.value);
                this.senha.push(inputSenha.value);

            } else {
                alert("Email já cadastrado para esse tipo de usuário!");

            }
        } else {
            alert("Complete todos os campos!");

        }
        
        inputEmail.value = "";
        inputSenha.value = "";

    }

    exibirEmail(){
        return this.email;

    }

    exibirSenha(){
        return this.senha;

    }
}

class Adm extends Usuario {

}

const Usuarios = new Usuario();
const Adms = new Adm();

document.querySelector("#exer1 #cadastrar").onclick = () => {

    if(document.querySelector("#exer1 #valAdm").checked){   
        Adms.add();
        document.querySelector("#exer1 #valAdm").checked = false;

    } else {
        Usuarios.add();
        
    }
}

document.querySelector("#exer1 #checar").onclick = () => {
    let inputEmail = document.querySelector("#exer1 #valEmail2");
    let inputSenha = document.querySelector("#exer1 #valSenha2");

    if(inputEmail.value !== "" && inputSenha.value !== ""){
        let email = Adms.exibirEmail();
        let senha = Adms.exibirSenha();

        if(email.indexOf(inputEmail.value) === -1){
            let email = Usuarios.exibirEmail();
            let senha = Usuarios.exibirSenha();

            if(email.indexOf(inputEmail.value) === -1){
                alert("Email não cadastrado!");

            } else {
                if(senha[email.indexOf(inputEmail.value)] === inputSenha.value){
                    alert("E-mail cadastrado para um Usuário!");

                } else {
                    alert("Email cadastrado, mas indique a senha correta para saber o tipo de usuário!")
                    
                }
            }
        } else {
            if(senha[email.indexOf(inputEmail.value)] === inputSenha.value){
                alert("E-mail cadastrado para um Administrador!");

            } else {
                alert("Email cadastrado, mas indique a senha correta para saber o tipo de usuário!")

            }
        }
    } else {
        alert("Complete todos os campos!");

    }
}

// Exercício 2, 7

const usuarios = []

document.querySelector("#exer2 #cadastrar2").onclick = () => {
    
    let inputNome = document.querySelector("#exer2 #valNome");
    let inputIdade = document.querySelector("#exer2 #valIdade");
    let inputEmpresa = document.querySelector("#exer2 #valEmpresa");

    let nome = inputNome.value;
    let idade = parseInt(inputIdade.value);
    let empresa = inputEmpresa.value;

    if(nome !== "" && idade !== "" && empresa !== ""){
        usuarios.push({nome, idade, empresa});
        
        document.querySelector("#exer2 #filtros").removeAttribute("hidden");

        inputNome.value = "";
        inputIdade.value = "";
        inputEmpresa.value = "";

        alert("Usuário Cadastrado!");

        document.querySelector("#exer2 #filtrar1").onclick = () => {
            let inputIdadeMin = document.querySelector("#exer2 #valIdadeMin");
            let inputIdadeMax = document.querySelector("#exer2 #valIdadeMax");

            let idadeMin = parseInt(inputIdadeMin.value);
            let idadeMax = parseInt(inputIdadeMax.value);

            if(!isNaN(idadeMin) || !isNaN(idadeMax)){

                let resultFiltro1 = [];

                resultFiltro1 = usuarios.filter((item) => {
                    if(item.idade >= idadeMin && item.idade <= idadeMax){
                        let nome = item.nome;
                        let idade = item.idade;

                        return {nome, idade};
                    }
                });
                
                let lista = document.querySelector("#exer2 #lista1");

                while(lista.firstChild){
                    lista.removeChild(lista.firstChild);
                }

                if(resultFiltro1[0] !== undefined){
                    for(value of resultFiltro1){
                        let novoItem = document.createElement("li");
                        novoItem.setAttribute("class", "list-group-item");
                        novoItem.appendChild(document.createTextNode(`● Nome: ${value.nome} | Idade: ${value.idade}`));
                        lista.appendChild(novoItem);

                    }
                } else {
                    alert("Nenhum usuário filtrado!");

                }
            } else {
                alert("Complete todos os campos!");

            }
        }

        document.querySelector("#exer2 #filtrar2").onclick = () => {
            let inputEmpresa = document.querySelector("#exer2 #valEmpresa2");

            let empresa = inputEmpresa.value;

            if(empresa !== ""){

                let resultFiltro2 = [];

                resultFiltro2 = usuarios.filter((item) => {
                    if(item.empresa === empresa){
                        let nome = item.nome;
                        let empresa = item.empresa;

                        return {nome, empresa};
                    }
                });
                
                let lista = document.querySelector("#exer2 #lista2");

                while(lista.firstChild){
                    lista.removeChild(lista.firstChild);
                }

                if(resultFiltro2[0] !== undefined){
                    for(value of resultFiltro2){
                        let novoItem = document.createElement("li");
                        novoItem.setAttribute("class", "list-group-item");
                        novoItem.appendChild(document.createTextNode(`● Nome: ${value.nome} | Empresa: ${value.empresa}`));
                        lista.appendChild(novoItem);

                    }   
                } else {
                    alert("Nenhum usuário filtrado!");

                }
            } else {
                alert("Complete todos os campos!");

            }
        }

        document.querySelector("#exer2 #filtrar3").onclick = () => {
            let inputEmpresa = document.querySelector("#exer2 #valEmpresa3");
            let inputIdade = document.querySelector("#exer2 #valIdade3");

            let empresa = inputEmpresa.value;
            let idade = inputIdade.value;

            if(empresa !== "" && idade !== ""){

                let resultFiltro3 = [];

                resultFiltro3 = usuarios.filter((item) => {
                    if(item.empresa === empresa && item.idade >= idade){
                        let nome = item.nome;
                        let empresa = item.empresa;
                        let idade = item.idade;

                        return {nome, idade, empresa};
                    }
                });
                
                let lista = document.querySelector("#exer2 #lista3");

                while(lista.firstChild){
                    lista.removeChild(lista.firstChild);
                }

                if(resultFiltro3[0] !== undefined){
                    for(value of resultFiltro3){
                        let novoItem = document.createElement("li");
                        novoItem.setAttribute("class", "list-group-item");
                        novoItem.appendChild(document.createTextNode(`● Nome: ${value.nome} | Idade: ${value.idade} | Empresa: ${value.empresa}`));
                        lista.appendChild(novoItem);

                    }   
                } else {
                    alert("Nenhum usuário filtrado!");

                }
            } else {
                alert("Complete todos os campos!");

            }
            
        }
    } else {
        alert("Complete todos os campos!");

    }
}

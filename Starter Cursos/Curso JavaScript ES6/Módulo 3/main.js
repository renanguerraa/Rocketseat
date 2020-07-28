class Api {
    static async getUser(username) {
        let link = document.querySelector("#result #linkUser");

        while(link.firstChild){
            link.removeChild(link.firstChild);

        }

        try {
            const response = await axios.get(`https://api.github.com/users/${username}`);

            link.setAttribute("href", response.data.html_url);
            
            link.appendChild(document.createTextNode(username));

        } catch (err) {
            alert("Usuário não existe");

        }
    }

    static async getRepo(username, repo) {
        let link = document.querySelector("#result2 #linkUser");

        while(link.firstChild){
            link.removeChild(link.firstChild);

        }

        try {
            const response = await axios.get(`https://api.github.com/repos/${username}/${repo}`);

            link.setAttribute("href", response.data.html_url);

            link.appendChild(document.createTextNode(repo));

        } catch {
            alert("Este usuário não possui esse repositório");

        }
    }
}


document.querySelector("#exer1 #gerar1").onclick = () => {
    let textInput = document.querySelector("#exer1 #valUser");
    let usuario = textInput.value; 

    if(usuario !== ""){
        Api.getUser(usuario);

        document.querySelector("#exer1 #repo").removeAttribute("hidden");

        document.querySelector("#exer1 #gerar2").onclick = () => {
            let textInput = document.querySelector("#exer1 #valRepo");
            let repositorio = textInput.value;
        
            if(repositorio !== ""){
                Api.getRepo(usuario, repositorio);
        
            } else {
                alert("Complete o campo!");
        
            }
            textInput.value = "";

        }
    } else {
        alert("Complete o campo!");

    }
    textInput.value = "";

}
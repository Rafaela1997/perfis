const root = document.getElementById("root")
const authors = document.createElement('div');
authors.setAttribute('class', 'authors');
root.appendChild(authors)

/*const request = new XMLHttpRequest();
request.open('GET', 'https://randomuser.me/api/?results=10', true);
request.onload = function () {
    const data = JSON.parse(this.response);
    console.log(data)*/

    fetch('https:randomuser.me/api/?results=10')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log("sucesso")
        console.log(data)
    })
    .catch(function(erro){
        console.log(erro)
    })

    data.results.forEach(funcionario => {
        let card = document.createElement("div");
        card.setAttribute("class", "card");
        authors.appendChild(card);

        let name = document.createElement("h1");
        name.innerHTML = funcionario.name.first + " " + funcionario.name.last;
        card.appendChild(name);

        let image = document.createElement('img');
        image.src = funcionario.picture.medium;
        card.appendChild(image);

        let email = document.createElement("h2");
        email.innerHTML = funcionario.email;
        card.appendChild(email);

        let telefone = document.createElement("h2");
        telefone.innerHTML = funcionario.phone + "/" + funcionario.cell;
        card.appendChild(telefone);

        let location = document.createElement("h3");
        location.innerHTML = funcionario.location.city + ", " + funcionario.location.state;
        card.appendChild(location);


    }
    )
//}
request.send()
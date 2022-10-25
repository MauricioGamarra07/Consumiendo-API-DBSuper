
const contenedorPersonajes = document.querySelector(".section-personajes");

ejecutar()
function ejecutar() {
    peticion = fetch("https://dragon-ball-super-api.herokuapp.com/api/characters");
    peticion
        .then(res => res.json())
        .then((resultado) => {
            mostrarDatos(resultado);
        })
}

function mostrarDatos(data){
    console.log(data);
    /* console.log(data.length); */
    for (let i = 0; i < data.length; i++) {
        const div = document.createElement('div');
        div.classList.add('card');
        div.classList.add('card-personaje');
        div.innerHTML = `
            <img src="${data[i].imageUrl}" class="card-img-top">
            <div class="card-body">
                <h3 class="text-center">Nombre: ${data[i].name}</h3>
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">Especie: ${data[i].specie}</li>
            <li class="list-group-item">Rol: ${data[i].role}</li>
            <li class="list-group-item">Universo: ${data[i].universe}</li>
            </ul>
       `;
        contenedorPersonajes.appendChild(div);
    }

    ejecutarse(data)
}
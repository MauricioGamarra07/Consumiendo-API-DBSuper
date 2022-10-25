const buscar = document.querySelector(".icono-buscar");
const input = document.querySelector(".txtNombre");
const universo = document.querySelector(".nombre-universo");

function ejecutarse(data) {

    buscar.addEventListener('click', () => {
        buscarNombre(input.value, data);
    });

    input.addEventListener('change', () => {
        buscarNombre(input.value, data);
    })

    universo.addEventListener('change', () => {
        /* console.log(universo.value); */
        buscarporUniverso(universo.value, data);
    });

}

function buscarNombre(nombre, data) {
    /* console.log(`Buscar nombre: ${nombre}`); */
    /* console.log(data); */

    let personaje = data.find(pers => pers.name == nombre);
    console.log(personaje);

    if (personaje !== undefined) {
        console.log("Todo salió bien");

        contenedorPersonajes.innerHTML = ""; //Limpiamos el contenedor
        const div = document.createElement('div');
        div.classList.add('card');
        div.classList.add('card-personaje');
        div.innerHTML = `
            <img src="${personaje.imageUrl}" class="card-img-top">
            <div class="card-body">
                <h3 class="text-center">Nombre: ${personaje.name}</h3>
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">Especie: ${personaje.specie}</li>
            <li class="list-group-item">Tipo: ${personaje.role}</li>
            <li class="list-group-item">Universo: ${personaje.universe}</li>
            </ul>
       `;
        contenedorPersonajes.appendChild(div);
    }
    else {
        alert("El personaje especificado no existe");

        contenedorPersonajes.innerHTML = "";
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
                <li class="list-group-item">Tipo: ${data[i].role}</li>
                <li class="list-group-item">Universo: ${data[i].universe}</li>
                </ul>
           `;
            contenedorPersonajes.appendChild(div);
        }
    }

}

function buscarporUniverso(universo, data) {

    console.log(universo);

    let id = "0";

    switch (universo) {
        case "Universo 1":
            id = "1";
            break;
        case "Universo 2":
            id = "2";
            break;
        case "Universo 3":
            id = "3";
            break;
        case "Universo 4":
            id = "4";
            break;
        case "Universo 5":
            id = "5";
            break;
        case "Universo 6":
            id = "6";
            break;
        case "Universo 7":
            id = "7";
            break;
        case "Universo 8":
            id = "8";
            break;
        case "Universo 9":
            id = "9";
            break;
        case "Universo 10":
            id = "10";
            break;
        case "Universo 11":
            id = "11";
            break;
        case "Universo 12":
            id = "12";
            break;
        default:
            id = "0";
            break;
    }
    console.log("Id de Universo: " + id);

    contenedorPersonajes.innerHTML = "";
    for (let i = 0; i < data.length; i++) {
        if (data[i].universe == id) {
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
                <li class="list-group-item">Tipo: ${data[i].role}</li>
                <li class="list-group-item">Universo: ${data[i].universe}</li>
                </ul>
           `;
            contenedorPersonajes.appendChild(div);
        }

    }

}
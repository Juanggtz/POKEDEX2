const fetchPokemon = () => {
    const pokename = document.getElementById("nombre_pokemon");
    let pokeinput = pokename.value;
    pokeinput = pokeinput.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeinput}`;
    fetch(url).then((res) => {
        if (res.status != "200") {

            pokeImage("./img/pokeError.gif");

            const pokeName = document.getElementById("pokeName");
            let className = pokeName.classList.item(0);
            pokeName.classList.remove(className);
            pokeName.innerHTML = "ERROR";

            const pokeWeight = document.getElementById("pokeWeight");
            const pokeHeight = document.getElementById("pokeHeight");
            const Estadisticas = document.getElementById("estadistica");
            const peso = document.getElementById("peso");
            const altura = document.getElementById("altura");
            const tipo = document.getElementById("pokeType");

            tipo.innerHTML = "";
            pokeWeight.innerHTML = "";
            pokeHeight.innerHTML = "";
            Estadisticas.innerHTML = "";
            peso.innerHTML = "";
            altura.innerHTML = "";

            const pokeList = document.getElementById("pokeList");
            pokeList.replaceChildren();

            const clase = document.getElementById("clase1");

            let class1 = clase.classList.item(0);
            let clase2 = clase.classList.item(1);

            clase.classList.remove(class1);
            clase.classList.remove(clase2);

            pokeWeight.classList.remove("stat");
            pokeHeight.classList.remove("stat");

            const clasestat = document.getElementById("clase2")

            class1 = clasestat.classList.item(0);

            clasestat.classList.remove(class1);



        } else {
            return res.json();
        }
    }).then((data) => {

        let pokeImg = data.sprites.other.home.front_default;
        let Name = data.name;
        let pokeTypes = data.types;
        let weight = data.weight;
        let height = data.height;
        let stats = data.stats;

        pokeImage(pokeImg);

        const pokeName = document.getElementById("pokeName");
        pokeName.innerHTML = Name.toUpperCase();

        const pokeType = document.getElementById("pokeType");
        let tipo = pokeTypes[0].type.name;
        pokeType.innerHTML = `Tipo:\n${pokeTypes[0].type.name.toUpperCase()}`;


        const clase = document.getElementById("clase1")

        let class1 = clase.classList.item(0);
        let clase2 = clase.classList.item(1);

        clase.classList.remove(class1);
        clase.classList.remove(clase2);
        clase.classList.add(tipo);
        clase.classList.add("item_pokemon1");

        const clasestat = document.getElementById("clase2")

        class1 = clasestat.classList.item(0);

        clasestat.classList.remove(class1);
        clasestat.classList.add(tipo);

        const pokeWeight = document.getElementById("pokeWeight");
        pokeWeight.innerHTML = weight;
        class1 = pokeWeight.classList.item(0);
        pokeWeight.classList.remove(class1);
        pokeWeight.classList.add("stat");

        const pokeHeight = document.getElementById("pokeHeight");
        pokeHeight.innerHTML = height;
        class1 = pokeHeight.classList.item(0);
        pokeHeight.classList.remove(class1);
        pokeHeight.classList.add("stat");

        const peso = document.getElementById("peso");
        peso.innerHTML = "PESO";
        const altura = document.getElementById("altura");
        altura.innerHTML = "ALTURA";


        const estadistica = document.getElementById("estadistica");
        estadistica.innerHTML = "ESTADISTICA";

        document.getElementById("pokeList").replaceChildren();


        for (let i = 0; i < stats.length; i++) {
            const node = document.createElement("li");
            const textnode = document.createTextNode(`${stats[i].stat.name.toUpperCase()} : ${stats[i].base_stat}`);
            node.appendChild(textnode);
            document.getElementById("pokeList").appendChild(node);
        }
    })
}

const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}
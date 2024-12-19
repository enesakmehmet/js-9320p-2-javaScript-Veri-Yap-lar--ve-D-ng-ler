const characters = [
    { id: 1, name: "Luke Skywalker", pic: "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg", homeworld: "tatooine" },
    { id: 2, name: "C-3PO", pic: "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png", homeworld: "tatooine" },
    { id: 3, name: "R2-D2", pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png", homeworld: "naboo" },
    { id: 4, name: "Darth Vader", pic: "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg", homeworld: "tatooine" },
    { id: 5, name: "Leia Organa", pic: "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png", homeworld: "alderaan" },
    { id: 6, name: "Owen Lars", pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png", homeworld: "tatooine" },
    { id: 7, name: "Beru Whitesun lars", pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png", homeworld: "tatooine" },
    { id: 8, name: "R5-D4", pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png", homeworld: "tatooine" },
    { id: 9, name: "Biggs Darklighter", pic: "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png", homeworld: "tatooine" },
    { id: 10, name: "Obi-Wan Kenobi", pic: "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg", homeworld: "stewjon" },
    { id: 11, name: "Anakin Skywalker", pic: "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png", homeworld: "tatooine" },
    { id: 12, name: "Wilhuff Tarkin", pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg","homeworld": "eriadu" },
    { id: 13, name: "Chewbacca", pic: "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png","homeworld": "kashyyyk" },
    { id: 14, name: "Han Solo", pic: "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png","homeworld":"corellia" },
    { id: 15, name: "Greedo", pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg","homeworld": "rodia" },
    { id: 16, name: "Jabba Desilijic Tiure", pic: "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png", "homeworld": "tatooine" },
    { id: 18, name: "Wedge Antilles", pic: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ffrpnet.net%2Fhaberler%2Fsinema-haberleri%2Fyeni-star-wars-filminde-baska-eski-karakter-olacak-mi%2Fattachment%2Fwedge-antilles&psig=AOvVaw0_6da7d1GR2Ih942PUI3d3&ust=1732182139016000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMCz_rzP6okDFQAAAAAdAAAAABAI","homeworld": "corellia" },
    { id: 19, name: "Jek Tono Porkins", pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png","homeworld": "bestine" },
    { id: 20, name: "Yoda", pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png", },
    { id: 21, name: "Palpatine", pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png","homeworld": "naboo" },
];

function displayCharacters(filter = "all") {
    const characterList = document.getElementById("characterList");
    characterList.innerHTML = "";

    const filteredCharacters = characters.filter(character =>
        filter === "all" || character.homeworld === filter
    );

    filteredCharacters.forEach(character => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
        <img src="${character.pic}" alt="${character.name}">
        <div class="card-body">
          <h3>${character.name}</h3>
          <p>${character.homeworld}</p>
        </div>
      `;

        characterList.appendChild(card);
    });
}

document.getElementById("homeworldFilter").addEventListener("change", event => {
    displayCharacters(event.target.value);
});

window.onload = () => {
    displayCharacters();
};

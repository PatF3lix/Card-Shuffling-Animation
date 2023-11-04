// src"https://www.youtube.com/watch?v=LxXWTXOny3A"
// src"www.youtube.com/watch?v=JSePZ82OLaw"

const SUITS = [
  {
    icon: "♦",
    couleur: "rouge",
  },
  {
    icon: "♣",
    couleur: "noir",
  },
  {
    icon: "♥",
    couleur: "rouge",
  },
  {
    icon: "♠",
    couleur: "noir",
  },
];

const ESPACEMENT = 10;
const VALEURS = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];
let positions = [];
// element html div
const container = document.getElementById("container");
// element html boutton
const brasser_cartes = document.getElementById("brasserCartes");

function créé_carte({ valeur, suit, index_suit, index_valeur }) {
  // crée une carte comme un element div
  const carte = document.createElement("div");
  // ajouter l'attribut carte a l'objet carte
  carte.classList.add("carte");
  // ajout d'attribut couleur
  if (suit.couleur == "rouge") {
    carte.classList.add("rouge");
  } else {
    carte.classList.add("noir");
  }

  TOP = index_suit * 150 + ESPACEMENT * index_suit + "px";
  LEFT = index_valeur * 100 + ESPACEMENT * index_valeur + "px";
  carte.style.top = TOP;
  carte.style.left = LEFT;
  // inséré les positionnements des cartes dans une liste
  positions.push([TOP, LEFT]);
  carte.innerHTML = `
        <span class="numero top">${valeur}</span>
        <p class="suit">${suit.icon}</p>
        <span class="numero bottom">${valeur}</span>`;
  //inséré la carte dans le container
  container.appendChild(carte);
}

// Créé le paquet de 52 carte
SUITS.forEach((suit, index_suit) => {
  VALEURS.forEach((valeur, index_valeur) => {
    const Detailscarte = {
      valeur,
      suit,
      index_suit,
      index_valeur,
    };
    créé_carte(Detailscarte);
  });
});
// crée une liste de toutes les cartes
cartes = document.querySelectorAll(".carte");

brasser_cartes.addEventListener("click", () => {
  cartes.forEach((carte, index) => {
    setTimeout(() => {
      carte.styleZindex = 52 - index;
      carte.style.top = "92%";
      carte.style.left = "36%";
      // temps d'execution entre chaque appel pour que il y est une fluidité
    }, index * 50);
  });

  setTimeout(mise_en_place, 3000);
});
// replacer toutes les cartes a leur positionnement après avoir brasser
function mise_en_place() {
  brassage();
  cartes.forEach((carte, index) => {
    setTimeout(() => {
      carte.styleZindex = 52 - index;
      carte.style.top = positions[index][0];
      carte.style.left = positions[index][1];
    }, index * 50);
  });
}
// brassage inter-coupé
/**
 * ! text in front of exclamation mark will be red
 * TODO text after a todo will come out orange
 * if you clink on the link it will brings you to the function it refers to.
 * {@link créé_carte}
 */
function brassage() {
  moitié1 = [];
  moitié2 = [];
  paquet_brassé = [];
  const MOITIÉ = 26;
  for (let index = 0; index < MOITIÉ; index++) {
    moitié1.push(cartes[index]);
    moitié2.push(cartes[index + 26]);
  }

  for (let index = 0; index < 26; index++) {
    paquet_brassé.push(moitié1[index]);
    paquet_brassé.push(moitié2[index]);
  }
  cartes = paquet_brassé;
}

//     ecrire_au_fichier() {
//         // with open('Deck_of_cards.txt', 'w', encoding="utf-8") as f:
//         // f.write(str(objDeck))
//     }

// }

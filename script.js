// =========================
// ENTER WESTEROS BUTTON
// =========================

const enterBtn = document.getElementById("enterBtn");

if (enterBtn) {

    enterBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 800,
            behavior: "smooth"
        });

    });

}

// =========================
// CHARACTER SEARCH
// =========================

const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("keyup", () => {

        let filter = searchInput.value.toLowerCase();

        let cards =
        document.querySelectorAll(".character-card");

        cards.forEach(card => {

            let text =
            card.innerText.toLowerCase();

            if (text.includes(filter)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

}

// =========================
// HOUSE SORTING PORTAL
// =========================

const houseBtn =
document.getElementById("houseBtn");

const houseResult =
document.getElementById("houseResult");

if (houseBtn) {

    const houses = [

        {
            name:"House Stark",
            motto:"Winter Is Coming",
            color:"#7f8c8d"
        },

        {
            name:"House Lannister",
            motto:"Hear Me Roar",
            color:"#c0392b"
        },

        {
            name:"House Targaryen",
            motto:"Fire and Blood",
            color:"#8e0000"
        },

        {
            name:"House Baratheon",
            motto:"Ours Is The Fury",
            color:"#f1c40f"
        }

    ];

    houseBtn.addEventListener("click", () => {

        let randomHouse =
        houses[Math.floor(
        Math.random() * houses.length)];

        houseResult.innerHTML = `

        <div class="card p-4 text-center">

            <h2>${randomHouse.name}</h2>

            <p>${randomHouse.motto}</p>

        </div>

        `;

        document.documentElement.style.setProperty(
        "--gold",
        randomHouse.color);

    });

}

// =========================
// NAVBAR SCROLL EFFECT
// =========================

const navbar =
document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.style.background =
        "#000";

        navbar.style.boxShadow =
        "0 0 20px rgba(176,141,87,.3)";

    }

    else {

        navbar.style.background =
        "rgba(0,0,0,.8)";

        navbar.style.boxShadow =
        "none";

    }

});

// =========================
// CARD FADE-IN ANIMATION
// =========================

const cards =
document.querySelectorAll(".card");

const observer =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";

            entry.target.style.transform =
            "translateY(0)";
        }

    });

});

cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform =
    "translateY(40px)";

    card.style.transition =
    ".7s";

    observer.observe(card);

});
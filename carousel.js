const track = document.getElementById("track");
const slides = document.querySelectorAll(".slide");
const dotsContainer = document.getElementById("dots");

let index = 0;

function jumlahTerlihat() {
    return window.innerWidth <= 600 ? 1 : 3;
}

function totalPosisi() {
    return Math.max(1, slides.length - jumlahTerlihat() + 1);
}

// Membuat indikator titik
function buatDots() {
    dotsContainer.innerHTML = "";

    for (let i = 0; i < totalPosisi(); i++) {
        const dot = document.createElement("button");

        dot.classList.add("dot");

        dot.onclick = () => {
            index = i;
            updateCarousel();
        };

        dotsContainer.appendChild(dot);
    }
}

// Menggeser carousel
function updateCarousel() {
    const jarak = slides[1]
        ? slides[1].offsetLeft - slides[0].offsetLeft
        : 0;

    track.style.transform = `translateX(-${index * jarak}px)`;

    document.querySelectorAll(".dot").forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
    });
}

// Tombol panah
function geser(arah) {
    index += arah;

    if (index >= totalPosisi()) {
        index = 0;
    }

    if (index < 0) {
        index = totalPosisi() - 1;
    }

    updateCarousel();
}

buatDots();
updateCarousel();

window.addEventListener("resize", () => {
    index = 0;
    buatDots();
    updateCarousel();
});
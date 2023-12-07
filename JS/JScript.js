
function scrollToTop() {
    document.body.scrollTop = 0; // Per i browser pi� vecchi
    document.documentElement.scrollTop = 0; // Per browser moderni
}

// Mostra o nasconde il bottone in base alla posizione dello scroll
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    var btn = document.getElementById("scrollToTopBtn");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}


document.addEventListener('DOMContentLoaded', function() {
    // Il tuo codice JavaScript qui...
    var paragrafo = document.getElementById('p_description');

    function cambiaContenuto() {
        if (window.innerWidth <= 576) {
            paragrafo.textContent = `
            Sono un ragazzo determinato, preciso e tranquillo.
            Attualmente vivo a Novara e sono nato nel 1999.
            Dopo il diploma in informatica ho deciso di
            focalizzarmi sullo UX/UI Design, ho quindi seguito il
            master di Start2impact University che mi ha
            permesso di acquisire e mettere in pratica tutte le
            competenze necessarie.
            Mi piace navigare sul web per andare alla ricerca
            delle ultime tendenze, approfondire la materia e
            rimanere sempre aggiornato su quello che
            succede nel mondo digitale.
        `;
        } else {
            paragrafo.textContent = `
                Sono un ragazzo determinato, preciso e tranquillo.
                Attualmente vivo a Novara e sono nato nel 1999.
                Dopo il diploma in informatica ho deciso di
                focalizzarmi sullo UX/UI Design, ho quindi seguito il
                master di Start2impact University che mi ha
                permesso di acquisire e mettere in pratica tutte le
                competenze necessarie.
                Mi piace navigare sul web per andare alla ricerca
                delle ultime tendenze, approfondire la materia e
                rimanere sempre aggiornato su quello che
                succede nel mondo digitale.
            `;
        }
    }

    cambiaContenuto();

    window.addEventListener('resize', cambiaContenuto);
});
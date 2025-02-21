document.addEventListener("DOMContentLoaded", function() {
    const languageToggle = document.getElementById("language-toggle");
    const langImg = languageToggle.querySelector("img");

    let lang = localStorage.getItem("lang") || "en";

    function updateLanguage() {
        if (lang === "pl") {
            document.documentElement.lang = "pl";
            document.getElementById("home").innerText = "Start";
            document.getElementById("about-link").innerText = "O mnie";
            document.getElementById("portfolio").innerText = "Prace";
            document.getElementById("contact").innerText = "Kontakt";
            document.getElementById("hello").innerHTML = 'Jeśli chcesz <span class="name">pogadajmy :)</span>';
            document.getElementById("footer-text").innerText = "Copyright © 2025 Mikołaj Polecki. Wszelkie prawa zastrzeżone.";

            langImg.src = "assets/images/en.png";
            langImg.alt = "Change language to English";
        } else {
            document.documentElement.lang = "en";
            document.getElementById("home").innerText = "Home";
            document.getElementById("about-link").innerText = "About Me";
            document.getElementById("portfolio").innerText = "Portfolio";
            document.getElementById("contact").innerText = "Contact";
            document.getElementById("hello").innerHTML = 'If you\'d like, <span class="name">let\'s chat :)</span>';
            document.getElementById("footer-text").innerText = "Copyright © 2025 Mikołaj Polecki. All rights reserved.";

            langImg.src = "assets/images/pl.png";
            langImg.alt = "Zmień język na polski";
        }
    }

    languageToggle.addEventListener("click", function() {
        lang = lang === "en" ? "pl" : "en";
        localStorage.setItem("lang", lang);
        updateLanguage();
    });

    updateLanguage();
});

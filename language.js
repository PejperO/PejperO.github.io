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
            document.getElementById("scroll-text").innerText = "Przewiń";
            document.getElementById("hello").innerText = "Hello World!";
            document.getElementById("intro").innerHTML = 'Nazywam się <span class="name">Mikołaj Polecki</span>';
            document.getElementById("about-text").innerText = "Pracowity programista z Pasją";
            document.getElementById("specialization").innerText = "Programista Java";
            document.getElementById("footer-text").innerText = "Copyright © 2025 Mikołaj Polecki. Wszelkie prawa zastrzeżone.";

            // Tłumaczenie pól klasy
            document.getElementById("this-name").innerText = "this.imie";
            document.getElementById("this-specialization").innerText = "this.specjalizacja";
            document.getElementById("languages").innerText = "jezyki";
            document.getElementById("skills").innerText = "umiejetnosci";
            document.getElementById("education").innerText = "edukacja";
            document.getElementById("experience").innerText = "doswiadczenie";

            // Tłumaczenie treści edukacji i doświadczenia
            document.getElementById("edu-text").innerText = "2021-2025 : Polsko-Japońska Akademia Technik Komputerowych";
            document.getElementById("degree").innerText = "Tytuł inżynierski (inż.)";
            document.getElementById("exp1").innerText = "06.2024 – OBECNIE : Trener Programowania | Giganci Programowania";
            document.getElementById("exp2").innerText = "08.2020 – OBECNIE : Programista Freelancer";
            document.getElementById("exp3").innerText = "10.2023 – 06.2024 : Nauczyciel informatyki | Liceum";
            document.getElementById("exp4").innerText = "03.2021 – 05.2024 : Prywatne lekcje programowania";
            document.getElementById("exp5").innerText = "09.2020 – 06.2024 : IT Support | Liceum Pawła z Tarsu";

            langImg.src = "images/languages/en.png";
            langImg.alt = "Change language to English";
        } else {
            document.documentElement.lang = "en";
            document.getElementById("home").innerText = "Home";
            document.getElementById("about-link").innerText = "About Me";
            document.getElementById("portfolio").innerText = "Portfolio";
            document.getElementById("contact").innerText = "Contact";
            document.getElementById("scroll-text").innerText = "Scroll";
            document.getElementById("hello").innerText = "Hello World!";
            document.getElementById("intro").innerHTML = 'My name is <span class="name">Mikołaj Polecki</span>';
            document.getElementById("about-text").innerText = "A hardworking programmer with passion";
            document.getElementById("specialization").innerText = "Java Developer";
            document.getElementById("footer-text").innerText = "Copyright © 2025 Mikołaj Polecki. All rights reserved.";

            // Angielskie nazwy pól klasy
            document.getElementById("this-name").innerText = "this.name";
            document.getElementById("this-specialization").innerText = "this.specialization";
            document.getElementById("languages").innerText = "languages";
            document.getElementById("skills").innerText = "skills";
            document.getElementById("education").innerText = "education";
            document.getElementById("experience").innerText = "experience";

            // Angielskie treści edukacji i doświadczenia
            document.getElementById("edu-text").innerText = "2021-2025 : Polish-Japanese Academy of Information Technology";
            document.getElementById("degree").innerText = "Bachelor of Engineering (B.Eng.)";
            document.getElementById("exp1").innerText = "06.2024 – PRESENT : Programming trainer | Coding Giants";
            document.getElementById("exp2").innerText = "08.2020 – PRESENT : Freelance Programmer";
            document.getElementById("exp3").innerText = "10.2023 – 06.2024 : IT Teacher | High School";
            document.getElementById("exp4").innerText = "03.2021 – 05.2024 : Private Programming Lessons";
            document.getElementById("exp5").innerText = "09.2020 – 06.2024 : IT Support | High School of St. Paul";

            langImg.src = "images/languages/pl.png";
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

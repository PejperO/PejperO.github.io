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
            document.getElementById("hello").innerHTML = 'Wszystkie prace, zrobione dla zabawy, są na moim <span class="name"><a href="https://github.com/PejperO" target="_blank">GitHub</a></span>';
            document.getElementById("intro").innerHTML = "To są moje ulubione:";
            document.getElementById("footer-text").innerText = "Copyright © 2025 Mikołaj Polecki. Wszelkie prawa zastrzeżone.";

            document.getElementById("project1-title").innerText = "Aplikacja szachowa ze zdolnością do współpracy z innymi urządzeniami w sieci lokalnej";
            document.getElementById("project1-desc").innerHTML = "<p><span>Projekt wykonany na dyplom inżynierski (Inż.)</span></p><p><span>Przegląd:</span></p><p>Ten projekt obejmuje opracowanie aplikacji szachowej opartej na Javie z interfejsem graficznym. Obsługuje ona lokalną i sieciową rozgrywkę (localhost), analizę gry oraz zapisywanie/ładowanie partii z bazy danych. Zainspirowany platformami takimi jak Chess.com i Lichess.org, prototyp zawiera podstawowe funkcje, takie jak resetowanie gry, obrót planszy i analiza, prezentując potencjał Javy pomimo jej ograniczeń w zakresie tworzenia gier.</p>";

            document.getElementById("project2-title").innerText = "Strona internetowa dla biura architektonicznego";
            document.getElementById("project2-desc").innerHTML = `
                <p><span>Przegląd:</span></p>
                <p>Zaprojektowałem stronę internetową dla biura architektonicznego, przestrzegając zasad minimalizmu i konkretnych wytycznych właściciela. Strona zawiera dobraną paletę kolorów odzwierciedlającą wizję i preferencje.</p>
                <p>Stworzyłem również nowe logo od podstaw, dostosowując identyfikację wizualną studia do nowoczesnych trendów, jednocześnie zachowując unikalny styl i preferencje właściciela.</p>
                <p><span>Funkcje:</span></p>
                <ul>
                    <li><strong>Portfolio:</strong> Galeria prezentująca różne projekty.</li>
                    <li><strong>Usługi:</strong> Szczegółowy opis oferty firmy.</li>
                    <li><strong>O nas:</strong> Wgląd w podejście architekta do projektowania.</li>
                </ul>
                <a href="https://applus.pl" target="_blank">Zobacz Projekt</a>
            `;

            document.getElementById("project3-title").innerText = "Głębokie uczenie i zaawansowane modele";
            document.getElementById("project3-desc").innerHTML = `
                <p><span>Przegląd:</span></p>
                <p>Projekty w tym obszarze koncentrują się na stosowaniu technik głębokiego uczenia się do złożonych problemów, wykorzystując nowoczesne architektury:</p>
                <ul>
                   <li><p><span>Prognozowanie kursu wymiany walut przy użyciu LSTM</span></p>
                   Implementacja sieci LSTM w celu przewidywania kursu wymiany EUR/PLN na podstawie danych historycznych, skupiając się na prognozowaniu kursu.</li>
                   <a href="https://github.com/PejperO/EUR_to_PLN_Exchange_Rate_Prediction" target="_blank">Zobacz Projekt</a>
                   <li><p><span>Klasyfikacja obrazów przy użyciu CNN</span> </p>
                   Wykorzystanie splotowych sieci neuronowych (CNN) do klasyfikacji obrazów CIFAR-10 i optymalizacja architektury w celu uzyskania dokładności.</li>
                   <a href="https://github.com/PejperO/CIFAR-10_Image_Classification" target="_blank">Zobacz Projekt</a>
                   <li><p><span>Regresja i klasyfikacja za pomocą sieci neuronowych</span> </p>
                   Analiza porównawcza wykorzystująca sieci zbudowane na zamówienie i oparte na Keras, służąca do rozwiązywania problemów regresji i klasyfikacji.</li>
                   <a href="https://github.com/PejperO/Neural_Network_Regression_and_Classification" target="_blank">Zobacz Projekt</a>
                </ul>
            `;

            document.getElementById("project4-title").innerText = "Klasyczne uczenie maszynowe i podstawowe metody";
            document.getElementById("project4-desc").innerHTML = `
                <p><span>Przegląd:</span></p>
                <p>Te projekty badają tradycyjne podejścia do uczenia maszynowego, kładąc nacisk na podstawowe koncepcje i ręczną implementację:</p>

                <ul>
                   <li><p><span>Uczenie maszynowe z scikit-learn</span></p>
                   Kompleksowe przepływy pracy obejmują generowanie syntetycznych danych, szkolenie modeli, metody zespołowe i porównania regresji.</li>
                   <a href="https://github.com/PejperO/Machine_Learning" target="_blank">Zobacz Projekt</a>
                   <li><p><span>Klasyfikacja wieloklasowa z perceptronem i regresją logistyczną</span> </p>
                   Ręczna implementacja algorytmów perceptronu i regresji logistycznej w celu zrozumienia ich podstaw matematycznych i zastosowania w problemach wieloklasowych.</li>
                   <a href="https://github.com/PejperO/Multi-class_Classifier" target="_blank">Zobacz Projekt</a>
                </ul>
            `;

            document.getElementById("project5-title").innerText = "Poker Calculator (Projekt Edukacyjny)";
            document.getElementById("project5-desc").innerHTML = `
                <p><span>Zastrzeżenie:</span> Ten projekt jest przeznaczony wyłącznie do celów edukacyjnych. Nie zachęca do hazardu i nie powinien być używany do celów hazardowych.</p>

                <p><span>Przegląd:</span></p>
                <p>Ta aplikacja Poker Calculator to oparta na Kotlinie aplikacja na Androida zaprojektowana do obliczania i zarządzania saldami graczy pokerowych. Posiada prosty interfejs do dodawania graczy i śledzenia ich wyników, w tym obsługi rebuyów.</p>

                <p><span>Cechy:</span></p>
                <ul>
                  <li>Dodaj nowych graczy z ich nazwami.</li>
                  <li>Automatycznie ustaw saldo początkowe i rebuy na 0.</li>
                  <li>Oblicz saldo końcowe gracza, biorąc pod uwagę rebuy.</li>
                  <li>Wyświetl informacje o graczu w RecyclerView.</li>
                  <li>Nowoczesny i responsywny projekt interfejsu użytkownika.</li>
                </ul>
                <a href="https://github.com/PejperO/PokerCalculator" target="_blank">Zobacz Projekt</a>
            `;

            document.getElementById("project6-title").innerText = "Weather Wiki";
            document.getElementById("project6-desc").innerHTML = `
                <p><span>Przegląd:</span></p>
                <p>Projekt, wykorzystując OpenWeatherMap i exchangerate.host, zwraca informacje o wybranym mieście. Pokazuje aktualną pogodę w mieście, a także wyświetla stronę Wikipedii poświęconą temu miastu. Ponadto program pokazuje aktualny kurs wymiany między wybraną walutą a PLN.</p>
                <p><span>Parametry wejściowe:</span></p>
                <ul>
                  <li>Miasto</li>
                  <li>Kraj</li>
                  <li>Waluta</li>
                </ul>
                <a href="https://github.com/PejperO/Get_Weather-Wiki" target="_blank">Zobacz Projekt</a>
            `;

            document.getElementById("project7-title").innerText = "Pizzeria Manager";
            document.getElementById("project7-desc").innerHTML = `
                <p><span>Przegląd:</span></p>
                <p>Kompleksowy system do zarządzania pizzerią, obejmujący zarządzanie menu, śledzenie składników, planowanie pracy personelu, zamówienia klientów i śledzenie zamówień w czasie rzeczywistym.</p>
                <p><span>Cechy:</span></p>
                <ul>
                  <li><strong>Zarządzanie menu:</strong> Twórz, aktualizuj i organizuj pozycje menu restauracji.</li>
                  <li><strong>Zarządzanie składnikami:</strong> Śledź dostępne składniki i poziomy zapasów.</li>
                  <li><strong>Zarządzanie pracownikami:</strong> Zarządzaj harmonogramami, rolami i obowiązkami pracowników.</li>
                  <li><strong>Zarządzanie klientami:</strong> Rejestruj zamówienia i preferencje klientów w celu zapewnienia spersonalizowanej obsługi.</li>
                  <li><strong>Śledzenie zamówień:</strong> Śledź status zamówień w czasie rzeczywistym od początku do dostawy.</li>
                </ul>
                <a href="https://github.com/PejperO/PizzeriaManager" target="_blank">Zobacz Projekt</a>
            `;

            document.getElementById("project8-title").innerText = "Strona do zamawiania pizzy";
            document.getElementById("project8-desc").innerHTML = `
                <p><span>Przegląd:</span></p>
                <p>Statyczna witryna portfolio zaprojektowana w celu zaprezentowania moich umiejętności, projektów i danych kontaktowych. Witryna jest zbudowana przy użyciu HTML, CSS i JavaScript, z biblioteką particles.js do animacji tła.</p>
                <p>Strona składa się z trzech głównych sekcji: strony głównej, portfolio oraz strony kontaktowej, zapewniając czyste i interaktywne doświadczenia.</p>
                <p><span>Cechy:</span></p>
                <ul>
                  <li><strong>Responsywność:</strong> Dostosowanie do różnych rozdzielczości ekranów i motywów systemowych (ciemny/jasny).</li>
                  <li><strong>Płynne przewijanie:</strong> Intuicyjna nawigacja między sekcjami.</li>
                  <li><strong>Zmiana języka:</strong> Obsługa dwóch języków z zapisywaniem wyboru użytkownika.</li>
                  <li><strong>Niestandardowy kursor:</strong> Biała kropka z poświatą zastępująca domyślny kursor myszki.</li>
                  <li><strong>Animacje cząsteczek:</strong> Dynamiczne tło reagujące na ruch myszki.</li>
                </ul>
                <a href="https://github.com/PejperO/PejperO.github.io" target="_blank">Zobacz Projekt</a>
            `;

            langImg.src = "assets/images/en.png";
            langImg.alt = "Change language to English";
        } else {
            document.documentElement.lang = "en";
            document.getElementById("home").innerText = "Home";
            document.getElementById("about-link").innerText = "About Me";
            document.getElementById("portfolio").innerText = "Portfolio";
            document.getElementById("contact").innerText = "Contact";
            document.getElementById("hello").innerHTML = 'All my personal projects are available on my <span class="name"><a href="https://github.com/PejperO" target="_blank">GitHub</a></span>';
            document.getElementById("intro").innerHTML = "Here are my favorites:";
            document.getElementById("footer-text").innerText = "Copyright © 2025 Mikołaj Polecki. All rights reserved.";

            document.getElementById("project1-title").innerText = "A chess application with the ability to collaborate with other devices on a local network";
            document.getElementById("project1-desc").innerHTML = "<p><span>Project for Engineering Degree (B.Eng.)</span></p><p><span>Overview:</span></p><p>This project focuses on developing a chess application in Java with a graphical interface. It supports local and networked gameplay (localhost), game analysis, and saving/loading games from a database. Inspired by platforms like Chess.com and Lichess.org, the prototype showcases Java’s capabilities in implementing fundamental features such as game resetting, board flipping, and analysis.</p>";

            document.getElementById("project2-title").innerText = "Website and Logo Design for an Architecture Studio";
            document.getElementById("project2-desc").innerHTML = `
                <p><span>Overview:</span></p>
                <p>I designed a website for an architecture studio, adhering to principles of minimalism and the owner's specific guidelines. The site features a carefully curated color palette reflecting the architect's vision and preferences.</p>
                <p>I also created a new logo from scratch, aligning the studio's visual identity with modern trends while maintaining the unique style and preferences of the owner.</p>
                <p><span>Features:</span></p>
                <ul>
                  <li><strong>Portfolio:</strong> A gallery showcasing various projects.</li>
                  <li><strong>Services:</strong> A detailed description of the firm's offerings.</li>
                  <li><strong>About Us:</strong> Insights into the architect's approach to design.</li>
                </ul>
                <a href="https://applus.pl" target="_blank">View Project</a>
            `;

            document.getElementById("project3-title").innerText = "Deep Learning and Advanced Models";
            document.getElementById("project3-desc").innerHTML = `
                <p><span>Overview:</span></p>
                <p>These projects focus on applying deep learning techniques to complex problems using modern neural network architectures:</p>
                <ul>
                  <li><p><span>Currency Exchange Rate Prediction with LSTM:</span></p> Using LSTM networks to predict the EUR/PLN exchange rate based on historical data, emphasizing next-day opening rate predictions.</li>
                  <a href="https://github.com/PejperO/EUR_to_PLN_Exchange_Rate_Prediction" target="_blank">View Project</a>
                  <li><p><span>Image Classification with CNN:</span></p> Leveraging convolutional neural networks (CNNs) to classify CIFAR-10 images, optimizing architecture for accuracy.</li>
                  <a href="https://github.com/PejperO/CIFAR-10_Image_Classification" target="_blank">View Project</a>
                  <li><p><span>Regression and Classification with Neural Networks:</span></p> Comparative analysis using custom-built and Keras-based networks to tackle regression and classification tasks.</li>
                  <a href="https://github.com/PejperO/Neural_Network_Regression_and_Classification" target="_blank">View Project</a>
                </ul>
            `;

            document.getElementById("project4-title").innerText = "Classic Machine Learning and Core Techniques";
            document.getElementById("project4-desc").innerHTML = `
                <p><span>Overview:</span></p>
                <p>These projects explore traditional machine learning approaches, emphasizing fundamental concepts and manual implementations:</p>

                <ul>
                  <li><p><span>Machine Learning with scikit-learn:</span></p> Comprehensive workflows include synthetic data generation, model training, ensemble methods, and regression comparisons.</li>
                  <a href="https://github.com/PejperO/Machine_Learning" target="_blank">View Project</a>
                  <li><p><span>Multi-class Classification with Perceptron and Logistic Regression:</span></p> Hands-on implementation to understand the mathematical foundations and applications of these algorithms.</li>
                  <a href="https://github.com/PejperO/Multi-class_Classifier" target="_blank">View Project</a>
                </ul>
            `;

            document.getElementById("project5-title").innerText = "Poker Calculator (Educational Project)";
            document.getElementById("project5-desc").innerHTML = `
                <p><span>Disclaimer:</span> This project is for educational purposes only and does not encourage gambling.</p>
                <p><span>Overview:</span></p>
                <p>An Android app built with Kotlin for calculating and managing poker players' balances. Features include player management, rebuy tracking, and modern UI design.</p>
                <p><span>Features:</span></p>
                <ul>
                  <li>Add new players with their names.</li>
                  <li>Automatically set the starting balance and rebuy to 0.</li>
                  <li>Calculate the player's final balance, taking into account the rebuy.</li>
                  <li>Display player information in a RecyclerView.</li>
                  <li>Modern and responsive user interface design.</li>
                </ul>
                <a href="https://github.com/PejperO/PokerCalculator" target="_blank">View Project</a>
            `;

            document.getElementById("project6-title").innerText = "Weather Wiki";
            document.getElementById("project6-desc").innerHTML = `
                <p><span>Overview:</span></p>
                <p>Utilizing OpenWeatherMap and exchangerate.host APIs, this app provides weather data, Wikipedia info, and currency exchange rates for selected cities.</p>
                <p><span>Input Parameters:</span></p>
                <ul>
                  <li>City</li>
                  <li>Country</li>
                  <li>Currency</li>
                </ul>
                <a href="https://github.com/PejperO/Get_Weather-Wiki" target="_blank">View Project</a>
            `;

            document.getElementById("project7-title").innerText = "Pizzeria Manager";
            document.getElementById("project7-desc").innerHTML = `
                <p><span>Overview:</span></p>
                <p>A comprehensive system for managing pizzerias, covering menu management, ingredient tracking, staff scheduling, customer orders, and real-time order tracking.</p>
                <p><span>Features:</span></p>
                <ul>
                  <li><strong>Menu Management:</strong> Create, update, and organize restaurant menu items.</li>
                  <li><strong>Ingredient Management:</strong> Track available ingredients and inventory levels.</li>
                  <li><strong>Employee Management:</strong> Manage schedules, roles, and employee responsibilities.</li>
                  <li><strong>Customer Management:</strong> Record customer orders and preferences to provide personalized service.</li>
                  <li><strong>Order Tracking:</strong> Monitor order statuses in real-time from initiation to delivery.</li>
                </ul>
                <a href="https://github.com/PejperO/PizzeriaManager" target="_blank">View Project</a>
            `;

            document.getElementById("project8-title").innerText = "portfolio website";
            document.getElementById("project8-desc").innerHTML = `
                <p><span>Overview:</span></p>
                <p>This project is a static portfolio website designed to showcase my skills, projects, and contact information. The site is built using HTML, CSS, and JavaScript, with the particles.js library for background animations.</p>
                <p>The website consists of three main sections: a homepage, a portfolio, and a contact page, providing a clean and interactive user experience.</p>
                <p><span>Features:</span></p>
                <ul>
                  <li><strong>Responsiveness:</strong> Adapts to different screen resolutions and system themes (dark/light).</li>
                  <li><strong>Smooth Scrolling:</strong> Intuitive navigation between sections.</li>
                  <li><strong>Language Switching:</strong> Supports two languages (English and Polish) with user preference saved.</li>
                  <li><strong>Custom Cursor:</strong> A glowing white dot replaces the default mouse cursor.</li>
                  <li><strong>Particle Animations:</strong> Dynamic background that reacts to mouse movement.</li>
                </ul>
                <a href="https://github.com/PejperO/PejperO.github.io" target="_blank">View Project</a>
            `;

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

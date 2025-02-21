function updateFavicon() {
    // Sprawdź, czy użytkownik ma ciemny czy jasny motyw
    const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

    // Poprawiona ścieżka do favicony
    const faviconPath = darkMode ? "assets/icons/icon-black.png" : "assets/icons/icon-white.png";

    setFavicon(faviconPath);
}

function setFavicon(iconPath) {
    // Usuwanie wszystkich istniejących favicon
    document.querySelectorAll("link[rel='icon'], link[rel='shortcut icon']").forEach(el => el.remove());

    // Tworzenie nowego linku do favicony
    let newFavicon = document.createElement("link");
    newFavicon.rel = "icon";
    newFavicon.type = "image/png";
    newFavicon.href = iconPath + "?v=" + new Date().getTime(); // Dodajemy timestamp
    document.head.appendChild(newFavicon);
}

// Nasłuchuj zmian motywu systemowego
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", updateFavicon);

// Aktualizacja favicony po powrocie do karty (Chrome fix)
document.addEventListener("visibilitychange", function () {
    if (!document.hidden) {
        updateFavicon();
    }
});

// Poczekaj na załadowanie DOM przed ustawieniem favicony
document.addEventListener("DOMContentLoaded", updateFavicon);

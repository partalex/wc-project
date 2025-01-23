messageAboutUs = () => {
    alert("Welcome to Radionica Vasilic");
}

setLocalStorage = (key, value) => {
    localStorage.setItem(key, value);
}

getLocalStorage = (key) => {
    return localStorage.getItem(key);
}

changeLanguage = (language) => {
    setLocalStorage("language", language);
    setActiveLanguage(language);
}

function getLanguage() {
    var language = getLocalStorage("language");
    if (language) {
        document.getElementById("language").value = language;
    } else {
        document.getElementById("language").value = "en";
        setLocalStorage("language", "en");
    }
}

function setActiveLanguage(language) {
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(item => {
        if (item.getAttribute('onclick').includes(language)) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const language = getLocalStorage("language") || "en";
    setActiveLanguage(language);
});
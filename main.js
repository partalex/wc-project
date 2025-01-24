setLocalStorage = (key, value) => {
    localStorage.setItem(key, value);
}

setLocalStorageJson = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}


getLocalStorageJson = (key) => {
    try {
        return JSON.parse(localStorage.getItem(key));
    } catch (e) {
        return ""
    }
}

getLocalStorage = (key) => {
    return localStorage.getItem(key);
}

changeLanguage = (language) => {
    setLocalStorage("language", language);
    // setActiveLanguage(language);
}

const defaultLanguage = "en";

loadLanguage = () => {
    let language = getLocalStorage("language");
    if (!language)
        setLocalStorage("language", defaultLanguage);
}

// setActiveLanguage = (language) => {
//     const dropdownItems = document.querySelectorAll('.dropdown-item');
//     dropdownItems.forEach(item => {
//         if (item.getAttribute('onclick').includes(language)) {
//             item.classList.add('active');
//         } else {
//             item.classList.remove('active');
//         }
//     });
// }

document.addEventListener("DOMContentLoaded", function () {
    loadLanguage();
    // setActiveLanguage(language);
});
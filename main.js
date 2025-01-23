messageAboutUs = () => {
    alert("Welcome to Majstorski kutak!");
}

setLocalStorage = (key, value) => {
    localStorage.setItem(key, value);
}

getLocalStorage = (key) => {
    try {
        return JSON.parse(localStorage.getItem(key));
    } catch (e) {
        return ""
    }
}

changeLanguage = (language) => {
    setLocalStorage("language", language);
    setActiveLanguage(language);
}

getLanguage = () => {
    let language = getLocalStorage("language");
    if (language) {
        document.getElementById("language").value = language;
    } else {
        document.getElementById("language").value = "en";
        language = "en";
        setLocalStorage("language", "en");
    }
}

const defaultLanguage = "en";

loadLanguage = () => {
    let language = getLocalStorage("language");
    if (language) {
        setActiveLanguage(language);
    } else {
        language = defaultLanguage;
        setLocalStorage("language", defaultLanguage);
        setActiveLanguage(defaultLanguage);
    }
}

setActiveLanguage = (language) => {
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(item => {
        if (item.getAttribute('onclick').includes(language)) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

saveFormData = (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value
    };

    let forms = getLocalStorage("forms") || [];
    forms.push(formData);
    setLocalStorage("forms", forms);

    alert("Form data saved!");
    form.reset(); // Resetuje formu nakon slanja
}

document.addEventListener("DOMContentLoaded", function () {
    const language = getLocalStorage("language") || "en";
    setActiveLanguage(language);
});

// set on load for body to get language
document.body.onload = loadLanguage;

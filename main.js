messageAboutUs = () => {
    alert("Welcome to Majstorski kutak!");
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

getLanguage = () => {
    var language = getLocalStorage("language");
    if (language) {
        document.getElementById("language").value = language;
    } else {
        document.getElementById("language").value = "en";
        setLocalStorage("language", "en");
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
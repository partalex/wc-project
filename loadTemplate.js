function loadTemplate(contentFile) {
    fetch('./contents/head.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('head-placeholder').innerHTML = data;
        });

    fetch('./contents/nav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('nav-placeholder').innerHTML = data;
        });

    fetch('./contents/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        });

    fetch(contentFile)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content-placeholder').innerHTML = data;
        })
}

document.addEventListener("DOMContentLoaded", function () {
    const contentFile = document.body.getAttribute('data-content-file');
    loadTemplate(contentFile);
});
document.addEventListener("DOMContentLoaded", () => {
    const menuItems = document.querySelectorAll("nav ul li");
    const elements = document.querySelector("h1")
    elements.innerText += ` web development service`

    menuItems.forEach(item => {
        item.addEventListener("click", () => {
            /* Supprime la classe active de tous les éléments */
            menuItems.forEach(el => el.classList.remove("active"));
            
           /*  Ajoute la classe active uniquement à l'élément cliqué */
            item.classList.add("active");
        });
    });

    // l'élément actif au chargement de la page
    const currentPath = window.location.pathname;
    menuItems.forEach(item => {
        const link = item.querySelector("a");
        if (link && link.getAttribute("href") === currentPath) {
            item.classList.add("active");
        }
    });
});

document.querySelectorAll("nav a").forEach(link=> {
    link.addEventListener("click", function(e)
    {
        e.preventDefault();

        const targetSection =
document.querySelector(this.getAttribute("href"

));
        targetSection.scrollIntoView({
           behavior:"smooth"
});    
    });
});
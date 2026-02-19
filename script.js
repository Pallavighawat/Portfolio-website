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
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute("href"));
        targetSection.scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Simple fade-in effect for Projects section
const projects = document.querySelectorAll('.project-card');

window.addEventListener('scroll', () => {
    projects.forEach(project => {
        const top = project.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if(top < windowHeight - 100){
            project.style.opacity = 1;
            project.style.transform = "translateY(0)";
            project.style.transition = "all 0.6s ease-in-out";
        } else {
            project.style.opacity = 0;
            project.style.transform = "translateY(50px)";
        }
    });
});

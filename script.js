
// =====================================
// SYLVIA MOTSAMAI - PORTFOLIO JAVASCRIPT
// =====================================

// 1. MOBILE NAVIGATION

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("nav");

if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
        navigation.classList.toggle("active");

        const isExpanded =
            menuButton.getAttribute("aria-expanded") === "true";

        menuButton.setAttribute(
            "aria-expanded",
            String(!isExpanded)
        );
    });

    navigation.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navigation.classList.remove("active");
            menuButton.setAttribute("aria-expanded", "false");
        });
    });
}

// 2. SCROLL REVEAL ANIMATIONS

const animatedSections = document.querySelectorAll(
    ".section, .content-card"
);

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
        (entries, observerInstance) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observerInstance.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.15
        }
    );

    animatedSections.forEach(section => {
        section.classList.add("reveal");
        observer.observe(section);
    });

} else {
    animatedSections.forEach(section => {
        section.classList.add("visible");
    });
}

// 3. CURRENT YEAR IN FOOTER

const yearElement = document.querySelector("#current-year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// 4. BACK TO TOP BUTTON

const backToTop = document.querySelector("#back-to-top");

if (backToTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }

    });

    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

}

const header = document.querySelector(".header-collapsing");
const maxHeight = window.innerHeight * 0.5; // 50vh

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    const newHeight = Math.max(
        0,
        maxHeight - scrollY
    );

    header.style.height = `${newHeight}px`;
});

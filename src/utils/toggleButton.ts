function toggleButton() {
  document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById(
      "navbar-toggle"
    ) as HTMLElement;
    const navbarMenu = document.getElementById("navbar-menu") as HTMLElement;

    toggleButton.addEventListener("click", () => {
      navbarMenu.classList.toggle("active");
    });
  });
}
export default toggleButton;

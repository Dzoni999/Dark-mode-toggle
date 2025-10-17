const toggleBtn = document.getElementById("theme-toggle");


if (localStorage.getItem('dark-mode') === 'dark') {
    document.body.classList.add("dark-mode");
    toggleBtn.textContent = "Light mode";
}

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const isDarkMode = document.body.classList.contains("dark-mode");
    toggleBtn.textContent = isDarkMode ? "Light mode" : "Dark mode";
    
    localStorage.setItem("dark-mode", isDarkMode ? 'dark' : 'light');
});

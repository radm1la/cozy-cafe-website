const tabs = document.querySelectorAll(".tab");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    // Remove active from all tabs
    tabs.forEach(t => t.classList.remove("active"));

    // Hide all content divs (#drinks, #food, #desserts)
    document.querySelectorAll("#drinks, #food").forEach(c => {
      c.classList.remove("active_content");
    });

    // Activate clicked tab
    tab.classList.add("active");

    // Get tab text, lowercase it, and show matching content
    const idToShow = tab.textContent.toLowerCase(); 
    const contentDiv = document.getElementById(idToShow);
    contentDiv.classList.add("active_content");
  });
});

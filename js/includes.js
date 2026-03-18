// =============================
// SIMPLE HTML INCLUDE SYSTEM
// Loads external files into elements
// with the attribute: data-include="file.html"
// =============================

async function loadIncludes() {
  const elements = document.querySelectorAll('[data-include]');

  for (let el of elements) {
    const file = el.getAttribute('data-include');

    try {
      const response = await fetch(file);
      const content = await response.text();
      el.innerHTML = content;
    } catch (error) {
      el.innerHTML = "Error loading " + file;
    }
  }
}

// Run after page loads
window.addEventListener('DOMContentLoaded', loadIncludes);

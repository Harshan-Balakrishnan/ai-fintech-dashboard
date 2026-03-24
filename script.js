document.querySelectorAll("a").forEach(link => {
  link.addEventListener("mouseover", () => {
    link.style.color = "#22d3ee";
  });
});
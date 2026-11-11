
console.log("Welcome to Air Cell!");

document.querySelectorAll('a[href="#"]').forEach(link => {
  link.addEventListener("click", event => {
    if (link.textContent.includes("AIR")) {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    } else {
      event.preventDefault();
      alert("This section is coming soon to Air Cell!");
    }
  });
});

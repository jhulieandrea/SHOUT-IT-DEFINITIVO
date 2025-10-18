document.addEventListener("DOMContentLoaded", () => {
    fetch('header.html')
      .then(res => res.text())
      .then(data => {
        document.getElementById('encabezado').innerHTML = data;
      });
  
    fetch('footer.html')
      .then(res => res.text())
      .then(data => {
        document.getElementById('piepagina').innerHTML = data;
      });
  });
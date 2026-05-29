// Carga el navbar en todas las páginas
      fetch('src/paginas/footer.html')
        .then(response => response.text())
        .then(html => {
        document.getElementById('footer-container').innerHTML = html;
        });

 

function createNavbar() {
  const container = document.createElement('div');
  container.innerHTML = `
    <div class="container-fluid text-start bg-success text-white">Denis Alexander Morales Catalan 0900-26-1024</div>
    <nav class="navbar navbar-expand-lg" style="background-color: #84b7a4;">
      <div class="container-fluid">
        <a class="navbar-brand" href="./index.html">Home</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="./paginas/about.html">Quienes Somos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./paginas/aves.html">Aves</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./paginas/contact.html">Contactenos</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Acerca De
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Mision</a></li>
                <li><a class="dropdown-item" href="#">Vison</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Regiones
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Norte</a></li>
                <li><a class="dropdown-item" href="#">Sur</a></li>
                <li><a class="dropdown-item" href="#">Oriente</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `;

  // Inserta al principio del body
  document.body.insertBefore(container, document.body.firstChild);
}

// Ejecuta al cargar la página
createNavbar();


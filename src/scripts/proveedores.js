async function cargarDatos() {
  try {
    const response = await fetch('src/data/proveedores.json');
    const provs = await response.json();
    // Usar los datos
    const datos = document.createElement('div');
    provs.forEach(prov => {
        
    const div = document.createElement('div');
        div.className = 'border border-black bg-success-subtle px-4 m-2 rounded';
        const nombre = document.createElement('p');
        nombre.className = 'fs-1 text-secundary fw-bold';
        nombre.textContent = prov.nombre;
        div.appendChild(nombre);

        const imagen = document.createElement('img');
        imagen.className = 'img-fluid';
        imagen.src = prov.imagen;
        imagen.width = '400';
        imagen.height = '400';
        div.appendChild(imagen);        

        div.appendChild(document.createElement('br'));
        div.appendChild(document.createElement('br'));
        datos.appendChild(div);

    });
    document.getElementById('aves-container').innerHTML = datos.innerHTML;
  } catch (error) {
    console.error('Error cargando JSON:', error);
  }


}

cargarDatos();
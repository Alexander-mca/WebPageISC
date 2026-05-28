async function cargarDatos() {
  try {
    const response = await fetch('src/data/aves.json');
    const aves = await response.json();
    // Usar los datos
    const datos = document.createElement('div');
    aves.forEach(ave => {
        
    const div = document.createElement('div');
        div.className = 'border border-black bg-success-subtle px-4 m-2 rounded';
        const nombre = document.createElement('p');
        nombre.className = 'fs-1 text-secundary fw-bold';
        nombre.textContent = ave.nombre;
        div.appendChild(nombre);

        const nomb_cient = document.createElement('p');
        nomb_cient.className = 'fs-5 fst-italic';
        nomb_cient.textContent = ave.nombre_cientifico;
        div.appendChild(nomb_cient);

        const text_descr = document.createElement('p');
        text_descr.className = 'fs-4 fw-bold';
        text_descr.textContent = 'Descripcion';
        div.appendChild(text_descr);
        
        const descripcion = document.createElement('p');
        descripcion.className = 'fs-4 text-break';
        descripcion.textContent = ave.descripcion;
        div.appendChild(descripcion);

        const imagen = document.createElement('img');
        imagen.className = 'img-fluid';
        imagen.src = ave.imagen;
        imagen.width = '400';
        imagen.height = '400';
        div.appendChild(imagen);

        const text_ubi = document.createElement('p');
        text_ubi.className = 'fs-4 fw-bold';
        text_ubi.textContent = 'Ubicacion';
        div.appendChild(text_ubi);

        const ubicacion = document.createElement('p');
        ubicacion.className = 'fs-4 text-break';
        ubicacion.textContent = ave.ubicacion;
        div.appendChild(ubicacion);

        const text_precio = document.createElement('p');
        text_precio.className = 'fs-4 fw-bold';
        text_precio.textContent = 'Precio';
        div.appendChild(text_precio);

        const precio = document.createElement('p');
        precio.className = 'fs-5';
        precio.textContent = ave.precio;
        div.appendChild(precio);

        div.appendChild(document.createElement('br'));
        datos.appendChild(div);

    });
    document.getElementById('aves-container').innerHTML = datos.innerHTML;
  } catch (error) {
    console.error('Error cargando JSON:', error);
  }


}

cargarDatos();
async function cargarDatos() {
  try {
    const response = await fetch('src/data/clientes.json');
    const clientes = await response.json();
    // Usar los datos
    const datos = document.createElement('div');
    clientes.forEach(cliente => {
        
    const div = document.createElement('div');
        div.className = 'border border-black bg-success-subtle px-4 m-2 rounded';
        div.appendChild(document.createElement('br'));
        //se coloca el icono

        const tabla = document.createElement('table');
        tabla.className = 'table table-borderless table-sm rounded';
        const icono = document.createElement('img');
        icono.className = 'img-fluid';
        icono.src = cliente.icono;
        icono.width = '40';
        icono.height = '40';

        const tr0 = document.createElement('tr');
        const td0 = document.createElement('td');
        td0.className = 'text-center';
        td0.appendChild(icono);
        tr0.appendChild(td0);
        tabla.appendChild(tr0);


        //Esto es solo para agregar una fila a la tabla
        const tr = document.createElement('tr');
        const td = document.createElement('td');
        td.className = 'text-center';
        const text_nomb = document.createElement('p');
        text_nomb.className = 'fs-4 fw-bold';
        text_nomb.innerText = 'Nombre:';
        td.appendChild(text_nomb);

        const td2 = document.createElement('td');
        const nombre = document.createElement('p');
        nombre.className = 'fs-4';
        nombre.innerText = cliente.nombre;
        td2.appendChild(nombre);

        tr.appendChild(td);
        tr.appendChild(td2);
        tabla.appendChild(tr);
        //segunda fila
        const tr2 = document.createElement('tr');
        const td3 = document.createElement('td');
        td3.className = 'text-center';
        const text_dir = document.createElement('p');
        text_dir.className = 'fs-4 fw-bold';
        text_dir.innerText = 'Direccion:';
        td3.appendChild(text_dir);

        const td4 = document.createElement('td');
        const dir = document.createElement('p');
        dir.className = 'fs-4';
        dir.innerText = cliente.direccion;
        td4.appendChild(dir);

        tr2.appendChild(td3);
        tr2.appendChild(td4);
        tabla.appendChild(tr2);
        //tercera fila
        const tr3 = document.createElement('tr');
        const td5 = document.createElement('td');
        td5.className = 'text-center';
        const text_tel = document.createElement('p');
        text_tel.className = 'fs-4 fw-bold';
        text_tel.innerText = 'Telefono:';
        td5.appendChild(text_tel);

        const td6 = document.createElement('td');
        const tel = document.createElement('p');
        tel.className = 'fs-4';
        tel.innerText = cliente.telefono;
        td6.appendChild(tel);

        tr3.appendChild(td5);
        tr3.appendChild(td6);
        tabla.appendChild(tr3);
        //se agrega la tabla al container
        div.appendChild(tabla);

        const imagen = document.createElement('img');
        imagen.className = 'img-fluid';
        imagen.src = cliente.imagen;
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
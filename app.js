// api.js

// Conectar a la API y obtener los artículos
fetch("http://127.0.0.1:3000/articles")
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error en la respuesta: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    const contenedor = document.querySelector('.desdeAPI');

    // Limpiar contenido previo si lo hubiera
    contenedor.innerHTML = '';

    // Insertar cada artículo en el DOM
    data.forEach(article => {
      const articleHTML = `
        <div class="article">
          <h2>${article.title}</h2>
          <p><strong>Autor:</strong> ${article.author}</p>
          <p>${article.content}</p>
          <hr>
        </div>
      `;
      contenedor.innerHTML += articleHTML;
    });
  })
  .catch(error => {
    console.error("Error al obtener los artículos:", error);
    document.querySelector('.desdeAPI').textContent = "No se pudieron cargar los artículos.";
  });


  
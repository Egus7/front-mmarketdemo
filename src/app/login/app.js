document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente
  
    // Obtiene los valores de usuario y contraseña del formulario
    var codigo = document.getElementById("codigo").value;
    var clave = document.getElementById("clave").value;
  
    // Realiza una solicitud al servidor para autenticar al usuario con JWT
    fetch("https://mmarket-apirest.azurewebsites.net/minimarketdemoWeb/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
        
      },
      body: JSON.stringify({ codigo: codigo, clave: clave })
    })
    .then(response => response.json())
    .then(data => {
      // Maneja la respuesta del servidor y guarda el token JWT si la autenticación es exitosa
      var token = data.token;
  
      // Guarda el token en el almacenamiento local (localStorage) para su uso posterior
      localStorage.setItem("jwtToken", token);
  
      // Redirecciona al usuario a la página principal o a otra vista protegida
      //window.location.href = "URL_DE_LA_PAGINA_PRINCIPAL";
    })
    .catch(error => {
      console.error("Error de autenticación:", error);
      // Maneja el error de autenticación (puede mostrar un mensaje de error al usuario)
    });
  });
  
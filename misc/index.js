// Función para gestionar el efecto hover
function setupHoverEffect(button, settingsContainer) {
    // Agrega un evento de mouseover al botón
    button.addEventListener("mouseover", function () {
      // Agrega la clase 'active' al elemento de configuración de idioma
      settingsContainer.classList.add("active");
    });
  
    // Agrega un evento de mouseout al botón
    button.addEventListener("mouseout", function () {
      // Quita la clase 'active' al elemento de configuración de idioma
      settingsContainer.classList.remove("active");
    });
  
    // Agrega un evento de mouseover al elemento de configuración de idioma
    settingsContainer.addEventListener("mouseover", function () {
      // No hagas nada (para evitar que se quite la clase 'active' cuando se hace hover sobre el menú)
    });
  
    // Agrega un evento de mouseout al elemento de configuración de idioma
    settingsContainer.addEventListener("mouseout", function () {
      // Quita la clase 'active' al elemento de configuración de idioma
      settingsContainer.classList.remove("active");
    });
  }
  
  // Anade la clase active a la barra de navegación
  
  function showNavbar(buttonShowNavbar, navbarContainer) {
    // Cuando le de click al boton de mostrar el navbar, se le agrega la clase active
    buttonShowNavbar.addEventListener("click", function () {
      // Agrega la clase 'active' si no la tiene, o la quita si la tiene
      navbarContainer.classList.toggle("active");
    });
  }
  
  function showPropertyList(togglePropertyListButton, propertyList) {
      // Toggle property-list visibility and update button text
  togglePropertyListButton.addEventListener('click', function () {
      propertyList.classList.toggle('active');
      const isActive = propertyList.classList.contains('active');
  });
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    // Obtén referencias a los elementos relevantes
    const button1 = document.getElementById("navbar__languaje-button");
    const settingsContainer1 = document.getElementById(
      "languaje__settings-container"
    );
    const button2 = document.getElementById("navbar__logout-button");
    const settingsContainer2 = document.getElementById(
      "logout__settings-container"
    );
  
    const buttonShowNavbar = document.getElementById("show-navbar-links");
    const navbarContainer = document.getElementById("navbar__container");
  
    // Get references to relevant elements
    const togglePropertyListButton =
      document.getElementById("togglePropertyList");
    const propertyList = document.querySelector(".property-list");
  
    // Configura el efecto hover para el primer conjunto de elementos
    setupHoverEffect(button1, settingsContainer1);
  
    // Configura el efecto hover para el segundo conjunto de elementos
    setupHoverEffect(button2, settingsContainer2);
  
    showNavbar(buttonShowNavbar, navbarContainer);
  
    showPropertyList(togglePropertyListButton, propertyList);
  });
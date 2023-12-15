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

function showNavbar(buttonShowNavbar, navbarContainer, propertyList) {
  // Cuando le de click al boton de mostrar el navbar, se le agrega la clase active
  buttonShowNavbar.addEventListener("click", function () {
    // Agrega la clase 'active' si no la tiene, o la quita si la tiene
    navbarContainer.classList.toggle("active");
    propertyList.classList.remove("active");
  });
}

function showPropertyList(togglePropertyListButton, propertyList, navbarContainer) {
  togglePropertyListButton.addEventListener("click", function () {
    propertyList.classList.toggle("active");
    const isActive = propertyList.classList.contains("active");
    navbarContainer.classList.remove("active");
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

  showNavbar(buttonShowNavbar, navbarContainer, propertyList);

  showPropertyList(togglePropertyListButton, propertyList, navbarContainer);

  setupModal(
    document.getElementById("add-property-button"),
    document.getElementById("add-property-modal")
  );

  closeModal(
    document.getElementById("close-add-property-modal-button"),
    document.getElementById("add-property-modal")
  );

  setupModal(
    document.getElementById("delete-property-button"),
    document.getElementById("delete-property-modal")
  );

  closeModal(
    document.getElementById("close-delete-property-modal-button"),
    document.getElementById("delete-property-modal")
  );
});

// Función para gestionar add property modal

function setupModal(openModalButton, Modal) {
  openModalButton.addEventListener("click", function () {
    Modal.classList.add("active");
  });
}

function closeModal(closeModalButton, Modal) {
  closeModalButton.addEventListener("click", function () {
    Modal.classList.remove("active");
  });
}
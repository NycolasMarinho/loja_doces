document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const errorMessage = document.getElementById("errorMessage");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    // Recupera os dados do localStorage
    const emailSalvo = localStorage.getItem("usuarioEmail");
    const senhaSalva = localStorage.getItem("usuarioSenha");

    if (email === emailSalvo && senha === senhaSalva) {
      window.location.href = "index.html";
    } else {
      errorMessage.textContent = "E-mail ou senha incorretos!";
      errorMessage.style.color = "red";
    }
  });
});
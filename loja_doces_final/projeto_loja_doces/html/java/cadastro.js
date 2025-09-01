document.addEventListener("DOMContentLoaded", function () {
  const cadastroForm = document.getElementById("cadastroForm");
  const mensagem = document.getElementById("cadastroMensagem");

  cadastroForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    // Salva os dados no localStorage
    localStorage.setItem("usuarioEmail", email);
    localStorage.setItem("usuarioSenha", senha);

    mensagem.textContent = "Cadastro realizado com sucesso!";
    mensagem.style.color = "green";

    // Limpa os campos
    cadastroForm.reset();
  });
});
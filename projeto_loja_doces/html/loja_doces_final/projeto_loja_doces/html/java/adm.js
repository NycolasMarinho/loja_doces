const pedidos = [
  { cliente: "Ana", produto: "torta de maça", valor: 38.00 },
  { cliente: "Bruno", produto: "brigadeiro tradicional", valor: 3.50 },
  { cliente: "Carla", produto: "bolo de chocolate", valor: 50.00 }
];

function carregarPedidos() {
  const tabela = document.querySelector("#tabelaPedidos tbody");
  const totalSpan = document.getElementById("totalFaturamento");
  let total = 0;

  pedidos.forEach(pedido => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${pedido.cliente}</td>
      <td>${pedido.produto}</td>
      <td>R$ ${pedido.valor.toFixed(2).replace('.', ',')}</td>
    `;

    tabela.appendChild(tr);
    total += pedido.valor;
  });

  totalSpan.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
}


document.addEventListener("DOMContentLoaded", function () {
  const senhaCorreta = "12345"; 
  const senhaDigitada = prompt("Digite a senha para acessar o painel administrativo:");

  if (senhaDigitada === senhaCorreta) {
    carregarPedidos(); 
  } else {
    alert("Senha incorreta. Você será redirecionado.");
    window.location.href = "index.html"; 
  }
});
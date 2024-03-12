let totalCompra = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').innerHTML = `R$ ${totalCompra}`;

function adicionar() {
    //recuperar valores (nome do produto, quantidade e valor) 
    let produto =  document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    //calcular o preço, o nosso subtotal
    let preco = quantidade * valorUnitario;
    //adicionar no carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
  </section>`;
    //atualiza o valor total
    totalCompra = totalCompra + preco;
    let carrinhoTotal = document.getElementById('valor-total');
    carrinhoTotal.textContent = `R$ ${totalCompra}`;
    document.getElementById('quantidade').value = 0;
}

function limpar() {
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = '';
    let carrinhoTotal = document.getElementById('valor-total');
    carrinhoTotal.textContent = 'R$ 0';
}
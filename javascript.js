var prods = [
    { id: 1, name: "Bife com Batata", price: 30.00 },
    { id: 2, name: "Coxa de Frango Crocante", price: 25.00 },
    { id: 3, name: "Carne de Panela", price: 22.00 },
    { id: 4, name: "Farofa", price: 10.00 },
    { id: 5, name: "Salada", price: 8.00 },
    { id: 6, name: "Torresmo", price: 12.00 },
];

function calc() {
    var quantities = document.getElementsByName("quantity");
    var output = document.getElementById("output");
    var total = 0;
    var formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });
    var username = document.getElementById("username").value.trim();
    var outputHtml = `Caro <b>${username}</b>,<br><br>Seguem os dados do seu pedido<br><br>O seu pedido é:<br><br>`;

    for (var input of quantities) {
        var id = parseInt(input.id);
        var quantity = parseInt(input.value) || 0;
        
        if (quantity > 0) {
            var subtotal = prods[id - 1].price * quantity;

            outputHtml += `<li><b>Prato:</b> ${prods[id - 1].name} - <b>Preço Unitário:</b> ${formatter.format(prods[id - 1].price)} - <b>Quantidade Total:</b> ${quantity} - <b>Subtotal:</b> ${formatter.format(subtotal)}</li>`;
            total += subtotal;; 
        }
    }
    if (total > 0) {
        outputHtml += `<h2>Total: ${formatter.format(total)}</h2>`;
    } else {
        outputHtml += `<h2>Nenhum item selecionado.</h2>`;
    }
    output.innerHTML = outputHtml;
}

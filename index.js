function buy(name) {
    
    let cart = document.querySelector('#cart tbody');
    
    let newItem = cart.insertRow();

    let itemName = newItem.insertCell(0);
    itemName.innerHTML = name;

    let elementId = '#' + name.replace(' ', '');
    
    let itemPrice = newItem.insertCell(1);
    itemPrice.innerHTML = document.querySelector(elementId + ' .price').innerHTML;

    let itemQuantity = newItem.insertCell(2);
    itemQuantity.innerHTML = document.querySelector(elementId + ' td .quantity').value;

    let subTotal = newItem.insertCell(3);
    itemsubTotal.innerHTML = document.querySelector('#' + name.replace(' ', '') + ' input').value * document.querySelector('#' + name.replace(' ', '') + ' .price').innerHTML.replace('$', '');

    document.querySelector('#' + name.replace(' ', '') + ' input').value = '';
    document.querySelector('#empty').innerHTML = '';
    document.querySelector(elementId + ' td .quantity').value = '';
}
function checkout()
{
    document.querySelectorAll('#cart tbody tr').forEach(row => row.remove());
    alert("thanks for buying")
}
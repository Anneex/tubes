const basket = document.getElementById('basket');
const product = document.getElementById('product');
let i = 0;

basket.onclick = () => {
    i = JSON.parse(localStorage.getItem('product')) || [];
    i++;
    localStorage.setItem('product', JSON.stringify(i));
    product.innerText = localStorage.getItem('product');
}
product.innerText = JSON.parse(localStorage.getItem('product')) || '0';

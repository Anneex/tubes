// const email = document.getElementById('inputEmail')
// const pass = document.getElementById('inputPassword')
// const save = document.getElementById('save')
//
// save.onclick = () => {
//     let emailLocalInfo = JSON.parse(localStorage.getItem('email')) || [];
//     let passLocalInfo = JSON.parse(localStorage.getItem('pass')) || [];
//
//     emailLocalInfo.push(email.value);
//     passLocalInfo.push(pass.value);
//
//     localStorage.setItem('email', JSON.stringify(emailLocalInfo));
//     localStorage.setItem('pass', JSON.stringify(passLocalInfo));
// }

const count = document.getElementById('count');
const buttonPlus = document.getElementById('buttonPlus');
const buttonMinus = document.getElementById('buttonMinus');
const oneProduct = document.getElementById('oneProduct');
const manyProduct = document.getElementsByClassName('manyProduct');

let oneProductValue = parseFloat(oneProduct.lastChild.textContent);
let manyProductValue0 = parseFloat(manyProduct.item(0).lastChild.textContent);
let manyProductValue1 = parseFloat(manyProduct.item(1).lastChild.textContent);


buttonPlus.onclick = () => {
    count.value++;
    // oneProduct.lastChild.textContent = (oneProductValue + parseFloat(oneProduct.lastChild.textContent)).toFixed(2);
    manyProduct.item(0).lastChild.textContent = (manyProductValue0 + parseFloat(manyProduct.item(0).lastChild.textContent)).toFixed(2);
    manyProduct.item(1).lastChild.textContent = (manyProductValue1 + parseFloat(manyProduct.item(1).lastChild.textContent)).toFixed(2);


}
buttonMinus.onclick = () => {
    if (count.value > 1){
        count.value--;
        manyProduct.item(0).lastChild.textContent = (parseFloat(manyProduct.item(0).lastChild.textContent) - manyProductValue0).toFixed(2);
        manyProduct.item(1).lastChild.textContent = (parseFloat(manyProduct.item(1).lastChild.textContent) - manyProductValue1).toFixed(2);
    }

}

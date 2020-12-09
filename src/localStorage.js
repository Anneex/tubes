const email = document.getElementById('inputEmail')
const pass = document.getElementById('inputPassword')
const save = document.getElementById('save')

save.onclick = () => {
    let emailLocalInfo = JSON.parse(localStorage.getItem('email')) || [];
    let passLocalInfo = JSON.parse(localStorage.getItem('pass')) || [];

    emailLocalInfo.push(email.value);
    passLocalInfo.push(pass.value);

    localStorage.setItem('email', JSON.stringify(emailLocalInfo));
    localStorage.setItem('pass', JSON.stringify(passLocalInfo));
}


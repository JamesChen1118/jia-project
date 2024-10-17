const login = document.querySelector('#login');
const register = document.querySelector('#register');
const btn = document.querySelector('#btn');



function reg() {
    login.style.left = '-530px';
    register.style.left = '120px';
    btn.style.left = '150px';
}

function log() {
    login.style.left = '120px';
    register.style.left = '650px';
    btn.style.left = '0';
}


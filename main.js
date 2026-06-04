const btn = document.getElementById('btn-2');
const body = document.getElementById('body');

btn.addEventListener('click',()=>{
    body.classList.toggle('dark');
})
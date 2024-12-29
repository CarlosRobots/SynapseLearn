const toggle = document.getElementById("toggle");
const menu = document.getElementById('menu');

toggle.addEventListener("click", ()=>{
    toggle.classList.toggle("active");
})
// const menuToggle = document.getElementById("toggle");
toggle.addEventListener('click', () => {
    menu.classList.toggle('show');
});  

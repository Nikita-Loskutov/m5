burger_menu = document.getElementById("herf");
let tf = false
document.getElementById('burger').addEventListener('click', function() {
    if (tf) {
        burger_menu.style.right = '0%';
    }
    else {
        burger_menu.style.right = '-100%';
    }
    tf = !tf




});

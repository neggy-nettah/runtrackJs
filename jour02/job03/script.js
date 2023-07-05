window.onload = function() {
    let compteur = document.getElementById('compteur');
    let button = document.getElementById('button');

    button.addEventListener('click', addOne);

    function addOne() {
        compteur.textContent = parseInt(compteur.textContent) + 1;
    }
}

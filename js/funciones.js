function login(element) {
    if (element.innerText === "Login") {
        element.innerText = "Logout";
    } else {
        element.innerText = "Login";
    }
}

function ocultar(boton) {
    boton.style.display = "none";
}

let likes = 0;

/*function meGusta(boton) {
    likes++;
    const likesCounter = document.getElementById("contador");
    likesCounter.textContent = likes;

    alert("¡A Ninja le gustó!");
}*/

function meGusta(button, contador1) {
    let likes = parseInt(document.getElementById(contador1).textContent, 10);
    likes++;
    document.getElementById(contador1).textContent = likes;

    alert("¡A Ninja le gustó!");
}
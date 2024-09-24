function openNav() {
    document.getElementById("myNav").style.width = "100%";
    document.getElementById("myNav").style.display = "block";
    document.body.classList.add("menu-aberto");
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("myNav").style.display = "none";
    document.body.classList.remove("menu-aberto");
}

document.addEventListener('DOMContentLoaded', function() {
    const icone = document.getElementById('projetos__icone');
    const descricao = document.getElementById('projetos__descricao');
    const link = document.getElementById('projetos__link');

    icone.addEventListener('click', function() {
        // Alterna a visibilidade da descrição e link
        if (descricao.style.display === 'none') {
            descricao.style.display = 'block';
            link.style.display = 'block';
            icone.src = './assets/up-arrow.png'; // Muda o ícone para indicar que pode ser fechado
        } else {
            descricao.style.display = 'none';
            link.style.display = 'none';
            icone.src = './assets/down-arrow.png'; // Muda o ícone para indicar que pode ser aberto
        }
    });
});

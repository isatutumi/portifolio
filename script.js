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
    const cabecalhos = document.querySelectorAll('.projetos__header');

    cabecalhos.forEach((cabecalho, index) => {
        const descricao = document.querySelectorAll('.projetos__descricao')[index];
        const link = document.querySelectorAll('.projetos__link')[index];
        const icone = cabecalho.querySelector('.projetos__icone');
        cabecalho.addEventListener('click', function() {
            if (descricao.style.display === 'none' || descricao.style.display === '') {
                descricao.style.display = 'block';
                link.style.display = 'block';
                icone.src = './assets/up-arrow.png'; 
            } else {
                descricao.style.display = 'none';
                link.style.display = 'none';
                icone.src = './assets/down-arrow.png';
            }
        });
    });
});

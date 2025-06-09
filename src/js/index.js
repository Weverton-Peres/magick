const botaoFiltrar = document.querySelector('.btn-filtrar');

botaoFiltrar.addEventListener('click', function () {
    // Pegando os valores dos filtros
    const categoriaSelecionada = document.querySelector('#categoria').value.toLowerCase();
    const precoMaximo = parseFloat(document.querySelector('#preco').value);

    // Selecionando todas as cartas
    const cartas = document.querySelectorAll('.carta');

    // Loop por cada carta para aplicar os filtros
    cartas.forEach(function (carta) {
        const categoriaCarta = carta.dataset.categoria.toLowerCase();
        const precoCarta = parseFloat(carta.dataset.preco);

        let deveMostrar = true;

        // Verifica se tem filtro de categoria e se a carta bate com ele
        if (categoriaSelecionada !== '' && categoriaCarta !== categoriaSelecionada) {
            deveMostrar = false;
        }

        // Verifica se o preço da carta é maior que o preço máximo
        if (!isNaN(precoMaximo) && precoCarta > precoMaximo) {
            deveMostrar = false;
        }

        // Mostra ou esconde a carta
        if (deveMostrar) {
            carta.classList.add('mostrar');
            carta.classList.remove('esconder');
        } else {
            carta.classList.remove('mostrar');
            carta.classList.add('esconder');
        }
    });
});

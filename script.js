const next = document.querySelectorAll('.btn-proximo');

next.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo')
        const proximaEtapa = 'etapa-' + this.getAttribute('data-proximo')

        atual.classList.remove('ativo')
        document.getElementById(proximaEtapa).classList.add('ativo')
    })
})
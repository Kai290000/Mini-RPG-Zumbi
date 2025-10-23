const next = document.querySelectorAll('.btn-proximo');

next.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelectorAll('.ativo')
        const proximaEtapa = 'passo-' + this.getAtribute('data-proximo')

        atual.classList.remove('ativo')
        document.getElementById(proximaEtapa).classList.add('ativo')
    })
})
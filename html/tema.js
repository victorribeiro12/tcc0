document.addEventListener('DOMContentLoaded', () => {
        const swatches = document.querySelectorAll('.swatch');
        const previewHeader = document.getElementById('previewHeader');
        
        // NOVO: Pega o cabeçalho principal da sua página
        const mainHeader = document.querySelector('header');

        // NOVO: Função para carregar o tema salvo quando a página abrir
        function carregarTema() {
            const temaSalvo = localStorage.getItem('temaPainel');
            if (temaSalvo) {
                // Aplica no cabeçalho principal
                if (mainHeader) {
                    mainHeader.style.backgroundColor = temaSalvo;
                }
                
                // Aplica na pré-visualização
                if (previewHeader) {
                    previewHeader.style.backgroundColor = temaSalvo;
                }

                // Atualiza o botão 'active'
                swatches.forEach(s => {
                    s.classList.remove('active');
                    if (s.dataset.color === temaSalvo) {
                        s.classList.add('active');
                    }
                });
            }
        }

        // Carrega o tema assim que a página abre
        carregarTema();

        // Adiciona o 'ouvinte' de clique nos botões de cor
        swatches.forEach(swatch => {
            swatch.addEventListener('click', () => {
                const newColor = swatch.dataset.color;

                // 1. Atualiza a pré-visualização (como antes)
                previewHeader.style.backgroundColor = newColor;
                
                // 2. NOVO: Aplica no cabeçalho principal da página
                if (mainHeader) {
                    mainHeader.style.backgroundColor = newColor;
                }

                // 3. NOVO: Salva a cor no localStorage
                localStorage.setItem('temaPainel', newColor);

                // 4. Atualiza o botão 'active' (como antes)
                swatches.forEach(s => s.classList.remove('active'));
                swatch.classList.add('active');
            });
        });
    });
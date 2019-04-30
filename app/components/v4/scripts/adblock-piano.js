(function() {
    const bodyEl = document.querySelector('body');

    let templateSettings = {
        template: 'default',
        assetsPath: '',
        description: 'Gosta do nosso conteúdo? Você pode contribuir com nosso jornalismo fazendo uma assinatura e aproveitar o jornal O Globo utilizando seu bloqueador.',
        urlSignup: 'http://oglobo.com.br',
        urlSignin: 'http://google.com.br'
    };
    
    function setTemplateSettings() {
        if(window.glbAdblock) {
            templateSettings = Object.assign({}, templateSettings, window.glbAdblock);
            window.glbAdblock = templateSettings;
        } 
    }

    function createWall() {  
        const adblockEl = document.createElement('div');
        adblockEl.id = 'detecta-adblock';
        adblockEl.innerHTML = template();
        bodyEl.appendChild(adblockEl);
    }

    function template() {
        switch(templateSettings.template) {
            default: return templateDefault();
        }
    }

    function activeWallRequirements() {
        const showRequirements = document.getElementById('showRequirements');

        if (showRequirements) {
            let requirementEl = document.querySelector('.adblock-cpt__requisitos');
            let btnVoltar = document.querySelector('.adblock-cpt__requisitos-voltar');

            bodyEl.setAttribute('style','overflow: hidden;');

            showRequirements.addEventListener('click', function() {
                requirementEl.classList.add('is-show')
            });

            btnVoltar.addEventListener('click', function() {
                requirementEl.classList.remove('is-show')
            });
        }
    }

    function templateDefault() {
        return `
                <div class='adblock-cpt'>
                    <div class="adblock-cpt__header">
                            <div class="adblock-cpt__col1">
                                <img src="${templateSettings.assetsPath}images/placas.svg" />
                            </div>
                            <div class="adblock-cpt__col2">
                                <div class="adblock-cpt__title">
                                    Ops...<br />
                                    Notamos que você utiliza um bloqueador de anúncios.
                                </div>
                                <div class="adblock-cpt__text">
                                    ${templateSettings.description}
                                </div>
                                <div class="adblock-cpt__signup"><a href="${templateSettings.urlSignup}" class="adblock-btn">Quero assinar</a></div>
                                <div class="adblock-cpt__signin">Já possui assinatura?  <a href="${templateSettings.urlSignin}">Faça o login</a></div>
                            </div>
                    </div>

                    <div class="adblock-cpt__footer">
                        <div class="adblock-cpt__footer-info">
                            <div>Ainda não está pronto para assinar?</div>
                            <div>Nos adicione em sua lista de permissões ou desabilite seu bloqueador de pop-ups.</div>
                        </div>

                        <div class="adblock-cpt__footer-btn">
                            <a id="showRequirements" href="javascript:;" >Saiba como</a>
                        </div>
                    </div>

                    <div class='adblock-cpt__requisitos'>
                        <button class="adblock-cpt__requisitos-voltar" type="button">Voltar</button>

                        <h2>Adicione O Globo nas suas permissões</h2>

                        <h4>Adblock Plus</h4>
                        <ol>
                            <li>Clique no ícone do Adblock Plus, localizado à direita da barra de endereço do seu navegador</li>
                            <li>Um menu drop-down aparecerá na tela</li>
                            <li>Clique em “Enabled on this site” para desativar o bloqueio da publicidade</li>
                            <li>Após o clique, o texto será substituído por “Disabled on this site”</li>
                            <li>Recarregue a página que você estava tentando acessar</li>
                        </ol>
                        <h4>AdBlock Pro</h4>
                        <ol>
                            <li>Clique no ícone do AdBlock Pro, localizado à direita da barra de endereços do seu navegador</li>
                            <li>Um menu drop-down aparecerá na tela</li>
                            <li>Clique no primeiro ícone (ligar) para para desativar o bloqueio da publicidade</li>
                            <li>Recarregue a página que você estava tentando acessar</li>
                        </ol>
                        <h4>AdBlock</h4>
                        <ol>
                            <li>Clique no ícone do AdBlock Pro, localizado à direita da barra de endereços do seu navegador</li>
                            <li>Um menu drop-down aparecerá na tela</li>
                            <li>Clique em “Don’t run on pages on this domain” para desativar o bloqueio da publicidade</li>
                            <li>Uma nova janela abrirá e você precisará clicar no botão “Exclude”</li>
                            <li>Após o clique, a página será recarregada</li>
                        </ol>
                    </div>
                </div>
                <div class='backdrop-adblock'> </div>
            `;
    }

    function init() {
        setTemplateSettings();
        createWall();
        activeWallRequirements();
    }

    init();

})();

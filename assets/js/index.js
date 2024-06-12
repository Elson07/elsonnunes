function getId(id){
    return document.getElementById(id);
}

function getClass(class_){
    return document.getElementsByClassName(class_);
}

function breakPoints(largura){

    let btnMenu = this.getId('menu-nav');
    let nav = this.getId('nav');
    let article = this.getId('artigo');

    let containerNav = this.getId('contaniner-nav');
    let apresentacao = this.getId('apresentacao');
    let textApresentacao = this.getId('tex-apresentacao');
    let imgApresentacao = this.getId('img-apresentacao');

    //conatainer artigo
    btnMenu.style.display = 'none';
    nav.style.display = '';
    nav.className = 'nav-horizontal';
    article.style.width = '95%';

    //Container apresnetação 
    containerNav.className = 'nav-flex';
    apresentacao.className = 'apresentacao-flex';
    article.style.margin = 'auto';
    imgApresentacao.style.marginTop = '0px';
    textApresentacao.style.width = '49%';
    imgApresentacao.style.width = '49%';
    imgApresentacao.style.marginTop = '';
    
    //Sobre, formação 
    let arrayContainerCurso = this.getClass('container-curso');   
    
    for(let i = 0; i < arrayContainerCurso.length; i++){
         
        arrayContainerCurso[i].style.width = '100%';
        if(i < (parseInt(arrayContainerCurso.length)-1) ){
            arrayContainerCurso[i].style.marginBottom = '.35rem';
        }
         
    }

    //Container portifólio
    let grupoContainerPortifolio = this.getId('grupo-container-portifolio');
    grupoContainerPortifolio.style.display = 'flex'; 
    let arrayContainerPortifolio = this.getClass('container-portifolio');
    let arrayVideoYouTube = this.getClass('youtube'); 
    for(let i = 0; i < arrayContainerPortifolio.length; i++){
         
        arrayContainerPortifolio[i].style.width = '50%';
        arrayVideoYouTube[i].setAttribute('width', '100%');
        arrayVideoYouTube[i].setAttribute('height', "400")
    } 
    
    
    
    //width="100%" height="400"


    
    //Formulário 
    let arrayInputFormulario = this.getClass('inputs');
    let textArea = this.getId('message');
    let fieldset = this.getId('fieldset');
    let btnEnviar = this.getId('enviar');
    for(let i = 0; i < arrayInputFormulario.length;  i++) {

        arrayInputFormulario[i].style.width = '96%';

    }
    fieldset.style.width = '50%';
    fieldset.removeAttribute('margin')
    fieldset.style.marginLeft = '.8rem';
    textArea.style = '';
    btnEnviar.style.width = '243px';
     

    //xs
    if(largura <= 575){
        //Tamanho tela
        console.log('xs')
        
        //conatainer artigo
        btnMenu.style.display = '';
        nav.style.display = 'none';
        nav.className = 'nav-vertical';

        //Artigo de apresentação
        containerNav.className = 'nav-block' 
        apresentacao.className = 'apresentacao-block';
        textApresentacao.style.width = '100%';
        imgApresentacao.style.width = '70%';
        imgApresentacao.style.marginTop = '1rem';

        //Container portifólio
        grupoContainerPortifolio.style.display = 'block';
        for(let i = 0; i < arrayContainerPortifolio.length; i++){
            
            arrayContainerPortifolio[i].style.width = '96.4%'
            arrayVideoYouTube[i].setAttribute('width', '100%');
            arrayVideoYouTube[i].setAttribute('height', "250");

        } 
        

        //Formulário 
        for(let i = 0; i < arrayInputFormulario.length;  i++) {

            arrayInputFormulario[i].style.width = '94%';

        }
        fieldset.style.width = '85%';
        fieldset.style.margin = 'auto';
        textArea.style.width = '94%';
        btnEnviar.style.width = '100%';
        

    //sm
    }else if(largura <= 767){
        //Tamanho tela
        console.log('sm')

        //conatainer artigo
        btnMenu.style.display = '';
        nav.style.display = 'none'
        nav.className = 'nav-vertical';

        //Artigo de apresentação 
        containerNav.className = 'nav-block' 
        apresentacao.className = 'apresentacao-block';
        textApresentacao.style.width = '100%';
        imgApresentacao.style.width = '70%';
        imgApresentacao.style.marginTop = '1rem';

        //Container portifólio
        grupoContainerPortifolio.style.display = 'block';
        for(let i = 0; i < arrayContainerPortifolio.length; i++){
            
            arrayContainerPortifolio[i].style.width = '97.2%'
            arrayVideoYouTube[i].setAttribute('width', '100%');
            arrayVideoYouTube[i].setAttribute('height', "350");
            
        }

        //Formulário 
        for(let i = 0; i < arrayInputFormulario.length;  i++) {

            arrayInputFormulario[i].style.width = '94%';

        }
        fieldset.style.width = '85%';
        fieldset.style.margin = 'auto';
        textArea.style.width = '94%';
        btnEnviar.style.width = '100%';
    
    //md
    }else if(largura <= 991){
        //Tamanho tela
        console.log('md')

        //Artigo de apresentação 
        textApresentacao.style.width = '60%';
        imgApresentacao.style.width = '39%';

        //Container portifólio
        grupoContainerPortifolio.style.display = 'block';
        for(let i = 0; i < arrayContainerPortifolio.length; i++){
            
            arrayContainerPortifolio[i].style.width = '98%';
            arrayVideoYouTube[i].setAttribute('width', '100%');
            arrayVideoYouTube[i].setAttribute('height', "450");

        }
        

    //lg
    }else if(largura <= 1199){
        //Tamanho tela
        console.log(`Formato: lg | Largura: ${largura}`)

        //Container portifólio
        for(let i = 0; i < arrayVideoYouTube.length; i++){
            
            arrayVideoYouTube[i].setAttribute('width', '100%');
            arrayVideoYouTube[i].setAttribute('height', "280");

        }

        //Formulario 
        for(let i = 0; i < arrayInputFormulario.length;  i++) {

            arrayInputFormulario[i].style.width = '45.6%';

        }
    
    //xl
    }else if(largura <= 1399){
        //Tamanho tela
        console.log(`Formato: xl | Largura: ${largura}`)
        
        article.style.width = '90%';

        //Container portifólio
        for(let i = 0; i < arrayVideoYouTube.length; i++){
            
            arrayVideoYouTube[i].setAttribute('width', '100%');
            arrayVideoYouTube[i].setAttribute('height', "300");

        }

        //Sobre, formação   
        for(let i = 0; i < arrayContainerCurso.length; i++){
            
            //arrayContainerCurso[i].style.width = '47%';
            arrayContainerCurso[i].style.width = '49.75%';
            
            if(i < (parseInt(arrayContainerCurso.length)-1) ){
                arrayContainerCurso[i].style.marginBottom = '.35rem';
            }
            
        } 

        //Formulario 
        if(largura >= 1399){
            
            for(let i = 0; i < arrayInputFormulario.length;  i++) {

                arrayInputFormulario[i].style.width = '47.4%';

            }

        }else if(largura >= 1199){

            for(let i = 0; i < arrayInputFormulario.length;  i++) {
                arrayInputFormulario[i].style.width = '46%';
            }

        }

    
    //xxl
    }else if(largura >= 1400){
        //Tamanho tela
        console.log(`Formato: xxl | Largura: ${largura}`)

        article.style.width = '80%';

        //Sobre, formação  
        for(let i = 0; i < arrayContainerCurso.length; i++){
            
            if(largura >= 1451){
                arrayContainerCurso[i].style.width = '49.8%';
            }else{
                arrayContainerCurso[i].style.width = '49.75%';
            }
            
            
            if(i < (parseInt(arrayContainerCurso.length)-1) ){
                arrayContainerCurso[i].style.marginBottom = '.35rem';
            }
            
        }

        //Formulario 
        if(largura >= 1860){
            
            for(let i = 0; i < arrayInputFormulario.length;  i++) {

                arrayInputFormulario[i].style.width = '47.4%';

            }

        }else if(largura >= 1565){
            for(let i = 0; i < arrayInputFormulario.length;  i++) {

                arrayInputFormulario[i].style.width = '46.9%';

            }
        }else if(largura < 1564){
            for(let i = 0; i < arrayInputFormulario.length;  i++) {

                arrayInputFormulario[i].style.width = '46.5%';

            }
        }
        

    }


    //Btn menu 
    if(btnMenu.className['baseVal'] == 'btn-nav-closed' && largura > 767){
        
        btnMenu.remove();
        this.contructBtnClosd()
        this.getId('menu-nav').style.display = 'none';
    
    }else if(btnMenu.className['baseVal'] == 'btn-nav-closed' && largura < 767){
        nav.className = 'nav-vertical';
        nav.style.display = '';
    }
    

}


function updateResolution() {

    var largura = window.innerWidth;
    this.breakPoints(largura);

    return largura;

}

function openMenu(){

    let nav = this.getId('nav');
    this.getId('menu-nav').remove();

    nav.className = 'nav-vertical';
    nav.style.display = '';
   
    this.contructBtnOpen();
    

}

function closedMenu(){

    let nav = this.getId('nav');
    this.getId('menu-nav').remove();

    nav.className = 'nav-vertical';
    nav.style.display = 'none';

    this.contructBtnClosd();

}

function contructBtnOpen(){

    this.getId('btn-nav-hamburger').innerHTML = `
        <svg onclick="closedMenu()" class="btn-nav-closed" id="menu-nav" xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16">
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
        </svg>
    `;

}

function contructBtnClosd(){

    this.getId('btn-nav-hamburger').innerHTML = `
        <svg onclick="openMenu()" class="btn-nav-hamburger" id="menu-nav" xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
        </svg>
    `;

}

function openCurso(indice){

    let conteudoFormacao = this.getId(`curso-${indice}`)
    let btnConteudoFormacao = this.getId(`chevron-${indice}`)

    

    if(conteudoFormacao.className == 'corpo-formacao-curso'){

        conteudoFormacao.className = 'oculto';
        conteudoFormacao.style.display = 'none';

        btnConteudoFormacao.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
            </svg>
        `;

    }else if(conteudoFormacao.className == 'oculto'){

        conteudoFormacao.className = 'corpo-formacao-curso';
        conteudoFormacao.style.display = '';

        btnConteudoFormacao.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"/>
            </svg>
        `;

    }

}

function btnVermais(indice){
    
    let estadoBtn = this.getId(`icon-vermais-${indice}`);
    let containerBtn = this.getId(`container-icon-vermais-${indice}`);
    let containerDescricao = this.getId(`descricao-${indice}`);

    if(estadoBtn.className.baseVal == 'bi bi-chevron-down'){
        containerBtn.innerHTML = `
            <svg id="icon-vermais-${indice}" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"/>
            </svg>
        `;
        containerDescricao.style.display = ''
    }else{
        containerBtn.innerHTML = `
            <svg id="icon-vermais-${indice}" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
            </svg>
        `;
        containerDescricao.style.display = 'none'
    }

}

function contructFeedBeckSendEmail(){

    if(!this.getId('cabecalho-menssagem')){

        let container = this.getId('mesage-feedback');
        container.style.display = 'none';

            /* Cabeçalho */
            let header = document.createElement('header');
            header.setAttribute('id', 'cabecalho-menssagem');
            header.style.border = '1px solid green';
            header.style.width = '30rem';
            header.style.background = 'green';
            header.style.color = 'white';
            header.style.margin = 'auto';
            header.style.padding = '10px';
            header.style.position = 'relative';
            header.innerHTML = `
                <span id="header-text-mesage">Menssagem enviada com sucesso!</span>   
                <div style="position: absolute; top: .5rem; right: .5rem;">
                    <svg onclick="closedMesage()" style="cursor: pointer;" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                    </svg>
                </div>
            `;
            
            /* Conteudo */
            let content = document.createElement('div');
            content.setAttribute('id', 'conteudo-menssagem');
            content.style.border = '1px solid green';
            content.style.width = '30rem';
            content.style.background = 'rgb(210, 250, 210)';
            content.style.color = 'green';
            content.style.margin = 'auto';
            content.style.padding = '10px';
            content.innerHTML = `
                <p>Olá <span id="message-user"></span>!</p>
                <p>Obrigado pela  sua menssagem :)</p><br>
            
                <p>Caso você tenha clicado em receber contato, respoderei seu email em breve!</p>
                <p>Atenciosamente, Elson.</p>
            `;

        container.appendChild(header)
        container.appendChild(content)
    }
    
}

function closedMesage(){

    this.getId('mesage-feedback').innerHTML = '';

}

function validaSubmit(){

    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    let user = this.getId('nome').value;
    let email = this.getId('email').value;
    let mesage = this.getId('message').value; 

    let btn = this.getId('enviar');

    if(user.length >= 2 && regexEmail.test(email) && mesage.length >= 3){
        btn.className = 'submit-mensagem-active';
        btn.removeAttribute('disabled');
    }else{
        btn.className = 'submit-mensagem-inactive';
        btn.setAttribute('disabled', 'disabled')
    }

}

function btnDescricaoProjeto(i, j){
                        

    let btn = this.getId(`bi-chevron-${i}-${j}`);
    let containerBtn = this.getId(`container-projeto-descricao-icon-${i}-${j}`);
    let containerDescricao = this.getId(`container-descricao-${i}-${j}`);

    if(btn.className.baseVal == 'bi bi-chevron-down'){

        containerBtn.innerHTML = `
            <svg id="bi-chevron-${i}-${j}" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"/>
            </svg>
        `;

        containerDescricao.style.display = ''

    }else{

        containerBtn.innerHTML = `
            <svg id="bi-chevron-${i}-${j}" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
            </svg>
        `;

        containerDescricao.style.display = 'none'

    }   
}


function constructProjetos(projetos){
    //console.log(projetos)
    for(let i = 0; i < projetos.length; i++){

        //Controi o componente cabeçalho
        this.componentProjeto(projetos[i].nome, projetos[i].tipo, projetos[i].video, projetos[i].link, i, projetos[i].descricao.length)
        
        for(let j = 0; j < projetos[i].descricao.length; j++){

            //Descrição
            for(let [chaveN0, valorN0] of Object.entries(projetos[i].descricao[j])){

                this.componentBtnDescricao(i, j, chaveN0);
                let containerDescricao = this.getId(`container-descricao-${i}-${j}`);

                if(typeof valorN0 === 'string'){

                }else if(typeof valorN0 === 'object'){

                    for(let [chaveN1, valorN1] of Object.entries(valorN0)){

                        let descricaoN0 = document.createElement('div');
                        descricaoN0.className = 'descricao-0';
                        descricaoN0.innerText = chaveN1;

                        containerDescricao.appendChild(descricaoN0);

                        if(typeof valorN1 === 'string'){  

                        }else if(typeof valorN1 === 'object'){

                            
                            for(let [chaveN2, valorN2] of Object.entries(valorN1)){

                                let descricaoN1 = document.createElement('div')
                                descricaoN1.className = 'descricao-1';
                                descricaoN1.innerText = chaveN2;

                                descricaoN0.appendChild(descricaoN1);

                                if(typeof valorN2 === 'string'){
                                
                                    let descricaoN2 = document.createElement('div')
                                    descricaoN2.className = 'descricao-2';
                                    descricaoN2.innerText = valorN2;

                                    descricaoN1.appendChild(descricaoN2);
                                
                                }else if(typeof valorN2 === 'object'){

                                    for(let [chaveN3, valorN3] of Object.entries(valorN2)){

                                        let descricaoN2 = document.createElement('div')
                                        descricaoN2.className = 'descricao-2';
                                        descricaoN2.innerText = chaveN3;

                                        descricaoN1.appendChild(descricaoN2);

                                        if(typeof valorN3 === 'string'){
                                
                                            //console.log(`Valor3: ${valorN3}`);
                                            let descricaoN3 = document.createElement('div')
                                            descricaoN3.className = 'descricao-3';
                                            descricaoN3.innerText = valorN3;

                                            descricaoN2.appendChild(descricaoN3);
                                        
                                        }else if(typeof valorN3 === 'object'){

                                            for(let [chaveN4, valorN4] of Object.entries(valorN3)){

                                                let descricaoN3 = document.createElement('div')
                                                descricaoN3.className = 'descricao-3';
                                                descricaoN3.innerText = chaveN4;

                                                descricaoN2.appendChild(descricaoN3);

                                                if(typeof valorN4 === 'string'){

                                                    let descricaoN4 = document.createElement('div')
                                                    descricaoN4.className = 'descricao-4';
                                                    descricaoN4.innerText = valorN4;

                                                    descricaoN3.appendChild(descricaoN4);
                                                
                                                }else if(Array.isArray(valorN4)){

                                                    for(let k = 0; k < valorN4.length; k++){
                                                        
                                                        let descricaoN4 = document.createElement('div');
                                                        descricaoN4.className = 'descricao-4';
                                                        descricaoN4.innerText = valorN4[k];
                                                        descricaoN3.appendChild(descricaoN4);

                                                    }

                                                }
                                            
                                            }

                                        }
            
                                    }

                                }

                            }
                        
                        }

                    }

                }
                
            }

        }

        for(let [chave, valor] of Object.entries( projetos[i].stacks)){
            
            componentRodape(i, chave, valor)

        }

    }
    
}


function componentBtnDescricao(i, j, valor){

    let conteudoDescricao = this.getId(`conteudo-descricao-${i}-${j}`);

        //Btn descrição
        let btnDescricaoProjeto = document.createElement('div');
        btnDescricaoProjeto.setAttribute('onclick', `btnDescricaoProjeto(${i}, ${j})`)
        btnDescricaoProjeto.className = 'btn-projeto-descricao';
        btnDescricaoProjeto.innerHTML = `
            <strong style="display: inline-block;">${valor}</strong>

            <div class="container-projeto-descricao-icon" id="container-projeto-descricao-icon-${i}-${j}">
                <svg id="bi-chevron-${i}-${j}" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                </svg>
            </div>
        `;

        //Container descrição
        let containerDescricao = document.createElement('div');
        containerDescricao.setAttribute('id', `container-descricao-${i}-${j}`);
        containerDescricao.style.display = 'none';

    conteudoDescricao.appendChild(btnDescricaoProjeto);
    conteudoDescricao.appendChild(containerDescricao);

}

function componentRodape(i, valor, estilo){

    let containerRodape = this.getId(`container-rodape-stacks-${i}`)

        let spanStack = document.createElement('span');
        spanStack.className = estilo;
        spanStack.innerText = valor;

    containerRodape.appendChild(spanStack);

}


function componentProjeto(nome, tipo, video, link, indice, j){

    let containerGrupoPortifolio = this.getId('grupo-container-portifolio');

        //Container do portifolio
        let containerPortifolio = document.createElement('div');
        containerPortifolio.className = 'container-portifolio';

            //Cabeçalho do portifolio
            let cabecalhoPortifolio = document.createElement('div');
            cabecalhoPortifolio.className = 'cabecalho-portifolio';

                let tituloCabecalho = document.createElement('strong');
                tituloCabecalho.innerText = nome;

            cabecalhoPortifolio.appendChild(tituloCabecalho);

            //Video ou img
            let containerVideo = document.createElement('div');
            containerVideo.className = 'portifolio-img';

                let frameVideo = document.createElement('iframe');
                frameVideo.className = 'youtube'; 
                frameVideo.setAttribute('src', video)
            
            containerVideo.appendChild(frameVideo);

            //Btn Ver mais
            let containerVerMais = document.createElement('div')
            containerVerMais.setAttribute('onclick', `btnVermais(${indice})`);
            containerVerMais.style.position = 'relative';
            containerVerMais.style.top = '0';
            containerVerMais.style.height = '20px';
            containerVerMais.className = 'btn-mostrar-descricao';

                //Btn texto 
                let btnTextoVerMais = document.createElement('div');
                btnTextoVerMais.style.position = 'absolute';
                btnTextoVerMais.style.top = '6px';
                btnTextoVerMais.style.left = '8px';
                
                    //Strong vermais
                    let textoVerMaisStrong = document.createElement('strong');
                    textoVerMaisStrong.setAttribute('id', `text-vermais-${indice}`)
                    textoVerMaisStrong.innerText = 'Ver mais';
                    
                btnTextoVerMais.appendChild(textoVerMaisStrong);

                //Icon seta para baixo
                let containerInconBaixo = document.createElement('div'); 
                containerInconBaixo.setAttribute('id', `container-icon-vermais-${indice}`);
                containerInconBaixo.style.position = 'absolute';
                containerInconBaixo.style.top = '6px';
                containerInconBaixo.style.right = '8px';
                containerInconBaixo.innerHTML = `
                    <svg id="icon-vermais-${indice}" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                    </svg>
                `;

            containerVerMais.appendChild(btnTextoVerMais);
            containerVerMais.appendChild(containerInconBaixo)

            //Container descrição 
            let containerDescricao = document.createElement('div');
            containerDescricao.setAttribute('id', `descricao-${indice}`);
            containerDescricao.style.display = 'none';
            containerDescricao.className = 'portifolio-descricao';

                //Container do link
                let contaninerLinkProjeto = document.createElement('p');

                    //Link
                    let linkProjeto = document.createElement('a');
                    linkProjeto.style.textDecoration = 'none';
                    linkProjeto.href = link;
                    linkProjeto.target = '_blank';

                        //Container de texto e icon do link
                        let containerTextLink =document.createElement('span');
                        containerTextLink.style.color = 'black';
                        containerTextLink.innerHTML = `
                            <img style="position: relative; top: 6px;" src="assets/icon/link.svg" alt="label do projeto"> 
					        Link do projeto:
                        `;

                        //container link 
                        let containerLink = document.createElement('span');
                        containerLink.style.textDecoration = 'underline';
                        containerLink.innerText = link;
                            
                    linkProjeto.appendChild(containerTextLink);
                    linkProjeto.appendChild(containerLink);

                contaninerLinkProjeto.appendChild(linkProjeto)

                //Container Nome do Projeto
                let containerNomeProjeto = document.createElement('p');
                containerNomeProjeto.innerHTML = `<strong>Nome do projeto</strong>: ${nome}`;

                //Container Nome do Projeto
                let containerTipoProjeto = document.createElement('p');
                containerTipoProjeto.innerHTML = `<strong>Tipo de aplicação</strong>: ${tipo}`;

                

            containerDescricao.appendChild(contaninerLinkProjeto);
            containerDescricao.appendChild(containerNomeProjeto);
            containerDescricao.appendChild(containerTipoProjeto);
            
            //Container conteudo descrição
            for(let k = 0; k < j; k++){
                let conteudoDescricao = document.createElement('div');
                conteudoDescricao.setAttribute('id', `conteudo-descricao-${indice}-${k}`);
                conteudoDescricao.className = 'projeto-descricao';
                containerDescricao.appendChild(conteudoDescricao);
            }

            //Container rodapé
            let containerRodape = document.createElement('div');
            containerRodape.className = 'rodape-portifolio';

                let containerRodapeConteudo = document.createElement('div');
                containerRodapeConteudo.style.position = 'relative';
                
                    let tituloRodape = document.createElement('strong');
                    tituloRodape.innerText = 'Stacks: ';

                    let containerStaks = document.createElement('div');
                    containerStaks.setAttribute('id', `container-rodape-stacks-${indice}`)
                    containerStaks.className = 'radape-portifolio-stacks';

                containerRodapeConteudo.appendChild(tituloRodape);
                containerRodapeConteudo.appendChild(containerStaks);

            containerRodape.appendChild(containerRodapeConteudo);

        containerPortifolio.appendChild(cabecalhoPortifolio);
        containerPortifolio.appendChild(containerVideo);
        containerPortifolio.appendChild(containerVerMais);
        containerPortifolio.appendChild(containerDescricao);
        containerPortifolio.appendChild(containerRodape);

    containerGrupoPortifolio.appendChild(containerPortifolio);

}





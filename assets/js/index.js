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
    for(let i = 0; i < arrayContainerPortifolio.length; i++){
         
        arrayContainerPortifolio[i].style.width = '50%';
         
    } 
    
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
        nav.className = 'nav-verticao';

        //Artigo de apresentação
        containerNav.className = 'nav-block' 
        apresentacao.className = 'apresentacao-block';
        textApresentacao.style.width = '100%';
        imgApresentacao.style.width = '70%';
        imgApresentacao.style.marginTop = '1rem';

        //Container portifólio
        grupoContainerPortifolio.style.display = 'block';
        let arrayContainerPortifolio = this.getClass('container-portifolio');
        for(let i = 0; i < arrayContainerPortifolio.length; i++){
            
            arrayContainerPortifolio[i].style.width = '96.4%'
            
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
        let arrayContainerPortifolio = this.getClass('container-portifolio');
        for(let i = 0; i < arrayContainerPortifolio.length; i++){
            
            arrayContainerPortifolio[i].style.width = '97.2%'
            
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
        let arrayContainerPortifolio = this.getClass('container-portifolio');
        for(let i = 0; i < arrayContainerPortifolio.length; i++){
            
            arrayContainerPortifolio[i].style.width = '98%';
            
        } 

        //Formulario 
        

    //lg
    }else if(largura <= 1199){
        //Tamanho tela
        console.log(`Formato: lg | Largura: ${largura}`)

        //Formulario 
        for(let i = 0; i < arrayInputFormulario.length;  i++) {

            arrayInputFormulario[i].style.width = '45.6%';

        }

        

    
    //xl
    }else if(largura <= 1399){
        //Tamanho tela
        console.log(`Formato: xl | Largura: ${largura}`)
        
        article.style.width = '90%';

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

/*
<div id="success-masage" style="position: fixed; top: 35%; width: 100%;">

        <div style="border: 1px solid green; width: 30rem; background: rgb(210, 250, 210); color: green; margin: auto; padding: 10px;">
            
            <p>Olá <span id="message-user"></span>!</p>
            <p>Obrigado pela  sua menssagem :)</p><br>
        
            <p id="message-contado"></p>
            <p>Atenciosamente, Elson.</p>

        </div>

    </div>

*/
const projetos = [
    {
        link: 'https://vbook.infinityfreeapp.com',
        nome: 'vBook',
        tipo: 'Biblioteca virtual',
        descricao: [
            {
                'Especificações técnicas' : {
                    'Arquitetura': {
                        'MVC (Model, View e Controller)': {
                            'Model': 'Camada onde agrupa as regras de negócios (consultas complexas e tratativas de dados).',
                            'View': 'Camada onde são agrupadas as visualizações (documentos HTML).',
                            'Controller': 'Camada responsável pela gestão do Model e da View, com base na ação executada pelo usuário.'
                        }
                    },
                    'Back End': {
                        'PHP 7': 'linguagem de programação que roda no lado do servidor web, dentro de um ambiente apache.',
                        'Mysql': 'Sistema de gerenciamento de banco de dados relacional.',
                        'PHPMailer': 'Biblioteca SMTP, para envio e recebimento de e-mails.',
                        'Composer': 'Gerenciador de dependências do PHP.'
                    },
                    'Front End': {
                        'HTML5': 'Linguagem de marcação, “esqueleto do conteúdo web”.',
                        'SASS': 'Pré-processador de CSS que adiciona funcionalidades como variáveis, aninhamento, mixins e herança para facilitar a estilização dos elementos HTML em páginas da web.',
                        'Bootstrap': 'Framework front-end, utilizado para tornar o aplicativo responsivo.',
                        'JavaScript': 'Linguagem de programação, utilizada para interatividade da aplicação.'
                    }
                } 
            },{
                'Casos de uso e regras de negócios' : {
                    'Caso o usuário não esteja cadastrado': {
                        'Se cadastrar': 'É necessário preencher todos os campos obrigatórios (Apelido, Nome completo, E-mail, Celular com DDD, Senha e Confirmar senha). Após submeter os dados, o usuário deve fornecer o código que é enviado para o e-mail cadastrado para confirmar o cadastro.',
                        'Visualizar': {
                            'Pesquisar': 'É possível pesquisar qualquer livro público pela barra de pesquisa, seja pelo título, gênero ou autor.',
                            'Listar': 'É possível listar os livros públicos (Novos (nos últimos 15 dias), Mais lidos (média), Mais avaliados (média)).'
                        },
                    },
                    'Caso o usuário esteja cadastrado': {
                        'Logar no sistema': {
                            'Alterar os dados da conta': {
                                'O usuário pode alterar qualquer atributo (nome, usuário, e-mail, telefone, senha, foto de usuário).': 'Para qualquer atributo alterado, o sistema solicitará a senha de confirmação. Após a confirmação, o usuário deve fazer login novamente para visualizar as alterações.'
                            },
                            'Visualizar': {
                                'Pesquisar' : 'É possível pesquisar os livros de acordo com o seu perfil (seus livros privados, seus livros listados, os livros nos quais está listado e os públicos) pela barra de pesquisa, seja pelo título, gênero ou autor.',
                                'Listar': 'É possível listar os livros de acordo com o seu perfil (seus livros privados, seus livros listados, os livros nos quais está listado e os públicos) e ordená-los por novos (nos últimos 15 dias), mais lidos (média), mais avaliados (média) e gênero.',
                                'Público': 'Todos',
                                'Privado': 'Somente os que o usuário titular publicou podem ser visualizados.',
                                'Listado': 'Somente o titular e os listados podem visualizar.'
                            },
                            'Publicar': {
                                'O livro deve ter todos os campos preenchidos': [
                                    'O título deve ser distinto.', 
                                    'O Autor pode ser o usuário logado ou um pseudônimo.',
                                    'O gênero pode ser um listado nas opções, ou um novo adicionado manualmente.',
                                    'A descrição não pode passar de 800 caracteres.',
                                    'Na opção de visibilidade, o usuário pode escolher entre Público, Listado ou Privado. No caso de escolher Listado, basta inserir o nome de usuário ou e-mail, desde que estejam cadastrados na plataforma.',
                                    'Na função de importar arquivos, o usuário só pode importar imagens nos formatos PNG, JPG e JPEG.'
                                ]
                            },
                            'Editar': 'O usuário pode editar somente os livros dos quais é o titular (quem publicou), podendo alterar qualquer atributo (título, autor, gênero, descrição, visibilidade, remover ou adicionar páginas).',
                            'Deletar': 'O usuário pode remover somente os livros dos quais é o titular (quem publicou), podendo remover de 1 a N livros.',
                        },
                        'Recuperar senha': 'Qualquer usuário cadastrado pode recuperar a senha, criando uma nova. Para isso, é necessário fornecer o nome de usuário, telefone ou e-mail, e posteriormente informar o código de segurança que é enviado por e-mail para a alteração de senha.'
                    }
                } 
            }
        ],
        stacks: {
            'PHP7': 'stack-php', 
            'MySQL': 'stack-mysql', 
            'PHPMailer': 'stack-php', 
            'Composer': 'stack-composer',
            'HTML5': 'stack-html',
            'SASS': 'stack-sass',
            'JavaScript': 'stack-javascript',
            'Bootstrap': 'stack-bootstrap'
        }

    },
]

function constructProjetos(){
    //console.log(projetos)
    for(let i = 0; i < projetos.length; i++){
        
        //console.log(projetos[i]);
        console.log(`Link: ${projetos[i].link}`);
        console.log(`Nome: ${projetos[i].nome}`);
        console.log(`Tipo: ${projetos[i].tipo}`);

        
        for(let j = 0; j < projetos[i].descricao.length; j++){

            //Descrição
            for(let [chaveN0, valorN0] of Object.entries(projetos[i].descricao[j])){

                //Container nivel 0
                console.log('------------------------------------------------')
                console.log('Container nivel 0')
                console.log(`Chave0: ${chaveN0}`);
                
                if(typeof valorN0 === 'string'){

                    console.log(`Valor0: ${valorN0}`);

                }else if(typeof valorN0 === 'object'){

                    for(let [chaveN1, valorN1] of Object.entries(valorN0)){

                        //Container nivel 1
                        console.log('------------------------------------------------')
                        console.log('Container nivel 1')
                        console.log(`Chave1: ${chaveN1}`)

                        if(typeof valorN1 === 'string'){
                            
                            console.log(`Valor0: ${valorN1}`);

                        }else if(typeof valorN1 === 'object'){

                            
                            for(let [chaveN2, valorN2] of Object.entries(valorN1)){
                            
                                //Container nivel 2
                                console.log('------------------------------------------------')
                                console.log('Container nivel 2')
                                console.log(`Chave2: ${chaveN2}`)

                                if(typeof valorN2 === 'string'){
                                
                                    console.log(`Valor2: ${valorN2}`)
                                
                                }else if(typeof valorN2 === 'object'){

                                    for(let [chaveN3, valorN3] of Object.entries(valorN2)){

                                        //Container nivel 3
                                        console.log('------------------------------------------------')
                                        console.log('Container nivel 3');
                                        console.log(`Chave3: ${chaveN3}`);

                                        if(typeof valorN3 === 'string'){
                                
                                            console.log(`Valor3: ${valorN3}`);
                                        
                                        }else if(typeof valorN3 === 'object'){

                                            for(let [chaveN4, valorN4] of Object.entries(valorN3)){

                                                //Container nivel 3
                                                console.log('------------------------------------------------')
                                                console.log('Container nivel 4');
                                                console.log(`Chave4: ${chaveN4}`);

                                                if(typeof valorN4 === 'string'){
                                
                                                    console.log(`Valor4: ${valorN4}`);
                                                
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
            
            console.log(`Chave: ${chave} | Valor: ${valor}`)

        }
        

    }
    
}
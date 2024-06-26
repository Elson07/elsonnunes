const projetos = [
    {
        link: 'https://vbook.infinityfreeapp.com',
        video: 'https://www.youtube.com/embed/cfIal_cjC3w',
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
    {
        link: 'https://elson07.github.io/elsonnunes/',
        video: 'https://www.youtube.com/embed/gD2gXxHsgqY', //https://youtu.be/gD2gXxHsgqY
        nome: 'Developer Full Stack',
        tipo: 'Portifólio',
        descricao: [
            {
                'Especificações técnicas' : {
                    'Back End': {
                        'EMailsJS': 'Biblioteca SMTP, para envio e recebimento de e-mails.',
                    },
                    'Front End': {
                        'HTML5': 'Linguagem de marcação, “esqueleto do conteúdo web”.',
                        'CSS3': 'Folhas de estilos para HTML',
                        'JavaScript': 'Linguagem de programação, utilizada para interatividade da aplicação.'
                    }
                } 
            },
            {
                'Casos de uso e regras de negócios' : {
                    'Navegação': {
                        'Menu de navegação': 'Links de navegação horizontal (mostrando todos os links) ou vertical (que só é exibido ao clicar no botão hambúrguer), dependendo da resolução da tela do dispositivo. Os links referem-se a Home, Sobre, Projetos, Contato, GitHub, YouTube e Facebook.',
                        'Home': 'Uma breve apresentação sobre as tecnologias que domino.',
                        'Sobre': 'Um texto sobre mim e alguns containers que contêm minha formação e a descrição de cada curso.',
                        'Projetos': 'Alguns projetos nos quais eu trabalhei, contendo o link para teste, imagem e vídeo de testes de usabilidade, descrição e as tecnologias que compõem o projeto.',
                        'Contato': "Formas de contato, como telefone, WhatsApp, e-mail e formulário para envio de mensagens, em que implementei uma API de envio e recebimento de e-mail, o 'EmailJS'."
                    }
                }
            
            }
        ],
        stacks: {
            'HTML5': 'stack-html',
            'CSS3': 'stack-css',
            'JavaScript': 'stack-javascript',
            'EMailsJS': 'stack-emailsjs'
        }

    }
];


const formacao = [
    {
        curso : 'Análise e Desenvolvimento de Sistemas',
        instituicao: 'PONTIFÍCIA UNIVERSIDADE CATÓLICA DO PARANÁ',
        grade: [
            'Raciocínio Computacional',
            'Teologia e Sociedade',
            'Fundamentos de Programação Web',
            'Matemática Aplicada à Computação',
            'Introdução à Filosofia',
            'Fundamentos da Programação Orientada a Objetos',
            'Métodos de Pesquisa e Ordenação em Estruturas de Dados',
            'Comunicação Aplicada',
            'Empreendedorismo e Inovação',
            'Banco de Dados para Tecnologia da Informação',
            'Fundamentos de Internet das Coisas',
            'Ética',
            'Fundamentos Engenharia de Software',
            'Segurança da Tecnologia da Informação',
            'Especificação de Sistemas de Informação',
            'Gestão de Projetos em Computação',
            'Inteligência Analítica em Negócios',
            'Fundamentos de Big Data',
            'Projeto de Sistemas de Informação',
            'Educação, Identidade e Solidariedade',
            'Interação Humano Computador',
            'Internet das Coisas em um Mundo Conectado',
            'Métodos Ágeis em TI',
            'Gestão de Serviços de Tecnologia da Informação',
            'Cloud Computing',
            'Desenvolvimento para dispositivos móveis',
            'Sistemas Web Seguros',
            'Tecnologias Para Desenvolvimento Web',
            'DevOps'
        ]
        
    },
    {
        curso : 'Desenvolvimento Web',
        instituicao: 'Udemy', 
        grade: [
            'HTML5',
            'CSS3',
            'CSS3 Intermediário & avançado',
            'HTML5 & CSS3',
            'Bootstrap 4 & Design responsivo',
            'JavaScript',
            'Bootstrap 4 & Design responsivo',
            'ECMAScript 2015 (ES6) e Orientação a Objetos',
            'Linguagem de Programação PHP  (Hypertext Preprocessor)',
            'PHP e Orientação a Objetos',
            'Banco de dados MySQL',
            'Ajax',
            'PHP com PDO e MySQL',
            'Publicação de aplicações Web na Internet',
            'jQuery',
            'Padrão de arquitetura MVC com PHP',
            'API com Slim Framework',
            'SASS',
            'Criando aplicações Mobile com IONIC',
            'WordPress'
        ]
    },
    {
        curso : 'Desenvolvimento de Apps Android Java',
        instituicao: 'Udemy',
        grade: [
            'Lógica e algoritimos',
            'Java - Fundamentos',
            'Java - Conceitos iniciais',
            'Java - Funções',
            'Java - Controle de fluxo',
            'Exceções',
            'Testes unitários',
            '[Java] Arrays',
            '[Java] Conceitos - Orientação a objetos',
            '[Java] Herança',
            'Layout - Conceitos de layout e LinearLayout',
            'Convenções de código',
            'Layout - RelativeLayout',
            'AndroidX e aplicações antigas',
            'Layout - Elementos',
            'Layout - ConstraintLayout',
            'Internacionalização'
        ]
        
    }
];

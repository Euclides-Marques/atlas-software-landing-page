export interface Service {
  id: string
  title: string
  when: string
  outcome: string
  includes: string[]
}

export const services: Service[] = [
  {
    id: 'sites',
    title: 'Sites institucionais',
    when: 'Sua empresa precisa de um endereço próprio na internet que explique o que ela faz e passe confiança para quem pesquisa antes de contratar.',
    outcome: 'Um site rápido, fácil de ler no celular e organizado para levar o visitante até o contato.',
    includes: ['Estrutura de conteúdo', 'Layout responsivo', 'SEO técnico básico'],
  },
  {
    id: 'landing-pages',
    title: 'Landing pages',
    when: 'Você vai divulgar um serviço, um lançamento ou uma campanha e quer uma página com um único objetivo.',
    outcome: 'Uma página focada, com mensagem direta e chamada para ação clara, pronta para receber tráfego de anúncios e redes sociais.',
    includes: ['Página única', 'Chamada para ação', 'Carregamento leve'],
  },
  {
    id: 'sistemas',
    title: 'Sistemas web sob medida',
    when: 'Planilhas, cadernos e mensagens soltas já não dão conta de pedidos, agenda, clientes ou estoque.',
    outcome: 'Um sistema que segue o fluxo real do seu negócio, com acesso pelo navegador e um painel para a sua equipe.',
    includes: ['Painel administrativo', 'Banco de dados', 'Controle de acesso'],
  },
  {
    id: 'integracoes',
    title: 'Integrações e automações',
    when: 'Você repete à mão a mesma tarefa entre ferramentas diferentes, como copiar dados ou enviar avisos e confirmações.',
    outcome: 'Sistemas conversando entre si e mensagens automáticas, por exemplo pelo WhatsApp, para reduzir trabalho repetitivo.',
    includes: ['APIs', 'Mensagens automáticas', 'Importação e exportação'],
  },
  {
    id: 'evolucao',
    title: 'Evolução de projetos',
    when: 'Você já tem um site ou sistema e precisa de ajustes, novas funcionalidades ou alguém que entenda o código existente.',
    outcome: 'Melhorias feitas em etapas, com o que muda explicado antes de entrar no ar.',
    includes: ['Novas funcionalidades', 'Correções', 'Ajustes de desempenho'],
  },
]

export interface ProcessStep {
  title: string
  description: string
}

export const processSteps: ProcessStep[] = [
  {
    title: 'Conversa inicial',
    description: 'Você conta o que o negócio faz e o que precisa resolver. Não é preciso saber termos técnicos.',
  },
  {
    title: 'Escopo e proposta',
    description: 'Transformamos a conversa em um escopo escrito: o que será feito, em quais etapas e com qual investimento.',
  },
  {
    title: 'Desenvolvimento em etapas',
    description: 'O projeto avança em partes que você consegue acompanhar e testar, em vez de aparecer pronto só no final.',
  },
  {
    title: 'Validação com você',
    description: 'Cada entrega é revisada com você antes de ir ao ar, e os ajustes combinados entram no próprio processo.',
  },
  {
    title: 'Entrega e continuidade',
    description: 'Publicação, orientações de uso e acesso ao que foi construído. Se fizer sentido, combinamos os próximos passos.',
  },
]

export interface Principle {
  title: string
  description: string
}

export const principles: Principle[] = [
  {
    title: 'Escopo antes de código',
    description: 'Entender o problema vem primeiro. Um escopo claro evita retrabalho e surpresas no orçamento.',
  },
  {
    title: 'Conversa sem jargão',
    description: 'Decisões técnicas são explicadas em português claro, com o impacto prático de cada escolha.',
  },
  {
    title: 'Código que se mantém',
    description: 'Estrutura organizada, testes onde importam e documentação, para o projeto poder crescer depois da entrega.',
  },
  {
    title: 'Desempenho e segurança por padrão',
    description: 'Páginas leves, acessíveis e com cuidado no tratamento de dados desde a primeira versão.',
  },
]

export interface FaqItem {
  question: string
  answer: string
}

export const faq: FaqItem[] = [
  {
    question: 'Quanto custa um site ou sistema?',
    answer:
      'Depende do escopo: quantidade de páginas, funcionalidades, integrações e conteúdo. Não trabalhamos com tabela fixa. Depois da conversa inicial, você recebe uma proposta com o que será entregue e o investimento correspondente.',
  },
  {
    question: 'Quanto tempo leva?',
    answer:
      'O prazo também depende do escopo e da disponibilidade de conteúdo (textos, imagens, acessos). A proposta traz uma estimativa por etapa, para você saber o que esperar em cada fase.',
  },
  {
    question: 'Preciso entender de tecnologia para contratar?',
    answer:
      'Não. Você explica como o seu negócio funciona e o que precisa resolver; a parte técnica é traduzida para decisões simples, sempre com as opções explicadas.',
  },
  {
    question: 'Vocês só fazem sites ou também sistemas?',
    answer:
      'Os dois. Além de sites institucionais e landing pages, desenvolvemos sistemas web com painel administrativo, agenda, pedidos, cadastros e integrações, como mensagens automáticas pelo WhatsApp.',
  },
  {
    question: 'E depois que o projeto for entregue?',
    answer:
      'Você recebe orientações de uso e acesso ao que foi construído. Ajustes, novas funcionalidades e acompanhamento podem ser combinados conforme a necessidade de cada projeto.',
  },
  {
    question: 'Já tenho um site ou sistema. Vocês podem continuar?',
    answer:
      'Sim, desde que seja possível acessar o código e a hospedagem. O primeiro passo é avaliar o que existe para indicar se vale evoluir o projeto atual ou refazer partes dele.',
  },
]

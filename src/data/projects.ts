import emijuDesktop from '../assets/projects/emiju-desktop.webp'
import emijuMobile from '../assets/projects/emiju-mobile.webp'
import lavacarDesktop from '../assets/projects/lavacar-desktop.webp'
import lavacarMobile from '../assets/projects/lavacar-mobile.webp'

export interface ProjectImage {
  src: string
  width: number
  height: number
  alt: string
}

export interface Project {
  id: string
  name: string
  segment: string
  status: string
  context: string
  solution: string[]
  stack: string[]
  url?: string
  images?: { desktop: ProjectImage; mobile: ProjectImage }
}

/**
 * Projetos reais desenvolvidos pela Atlas Software.
 * Descrições baseadas nos READMEs e no histórico dos repositórios; capturas feitas
 * nos sites publicados em 28/10/2026. Nenhuma métrica ou depoimento foi adicionado.
 */
export const projects: Project[] = [
  {
    id: 'emiju-cones',
    name: 'Emiju Cones',
    segment: 'Confeitaria · loja online',
    status: 'Em produção',
    context:
      'Confeitaria artesanal de brownies, cones e cookies que precisava de um cardápio digital próprio, com o pedido organizado do carrinho ao pagamento.',
    solution: [
      'Cardápio público com busca e categorias, carrinho e pedido com pagamento via Pix',
      'Painel administrativo para gerenciar produtos, pedidos e avaliações',
      'Avaliações de clientes moderadas pela loja antes de aparecerem no site',
    ],
    stack: ['Angular', '.NET', 'PostgreSQL', 'Render'],
    url: 'https://emijucones.onrender.com/',
    images: {
      desktop: {
        src: emijuDesktop,
        width: 1200,
        height: 750,
        alt: 'Página inicial da loja Emiju Cones no computador, com o título “Brownies, cones e cookies artesanais” e fotos dos doces',
      },
      mobile: {
        src: emijuMobile,
        width: 312,
        height: 675,
        alt: 'A mesma loja da Emiju Cones aberta no celular',
      },
    },
  },
  {
    id: 'lavacar',
    name: 'Lava Car e Estética Danúbio',
    segment: 'Estética automotiva · agendamento',
    status: 'Em produção',
    context:
      'Lava-car e estética automotiva que queria deixar o cliente marcar horário sozinho, com a agenda organizada e as confirmações saindo automaticamente.',
    solution: [
      'Agenda online com dias e horários livres calculados a partir do funcionamento do lava-car',
      'Confirmação, lembrete na véspera e aviso de carro pronto enviados automaticamente pelo WhatsApp',
      'Cancelamento pelo link da confirmação e painel para configurar serviços, horários e galeria',
    ],
    stack: ['Angular', '.NET', 'PostgreSQL', 'WhatsApp'],
    url: 'https://lavacar.onrender.com/',
    images: {
      desktop: {
        src: lavacarDesktop,
        width: 1200,
        height: 750,
        alt: 'Página inicial do Lava Car e Estética Danúbio no computador, com o título “Seu carro impecável, sem complicar a sua rotina” e o botão Agendar horário',
      },
      mobile: {
        src: lavacarMobile,
        width: 312,
        height: 675,
        alt: 'A mesma página do lava-car aberta no celular',
      },
    },
  },
  {
    id: 'petcontrol',
    name: 'PetControl',
    segment: 'Pet shops · banho e tosa',
    status: 'Em validação',
    context:
      'Plataforma para pet shops e banho e tosa organizarem a operação em um só lugar. Está em validação com o primeiro estabelecimento antes de ser aberta a outros negócios.',
    solution: [
      'Agenda com vários serviços por atendimento, táxi dog e planos de banho recorrentes',
      'Cadastro de tutores e pets, com fotos e observações de cada atendimento',
      'Controle financeiro, estoque, lembretes pelo WhatsApp e backup em planilhas',
    ],
    stack: ['Angular', '.NET', 'PostgreSQL', 'Multiempresa'],
  },
]

/**
 * Canais oficiais da Atlas Software.
 * Origem: links publicados em https://linktr.ee/atlas.software (consultado em 28/10/2026).
 * O número do WhatsApp é o mesmo para onde o link "Solicite um orçamento" do Linktree redireciona.
 */
const WHATSAPP_NUMBER = '5514991776580'

const WHATSAPP_GREETING =
  'Olá! Vim pelo site da Atlas Software e gostaria de conversar sobre um projeto.'

export const contact = {
  whatsappUrl: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_GREETING)}`,
  whatsappDisplay: '+55 14 99177-6580',
  instagramUrl: 'https://www.instagram.com/atlassoftware.dev/',
  instagramHandle: '@atlassoftware.dev',
  linktreeUrl: 'https://linktr.ee/atlas.software',
} as const

export const navigation = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#processo', label: 'Processo' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#duvidas', label: 'Dúvidas' },
] as const

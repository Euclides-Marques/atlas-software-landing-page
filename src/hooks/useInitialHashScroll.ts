import { useEffect } from 'react'

const USER_SCROLL_EVENTS = ['wheel', 'touchmove', 'keydown'] as const

/** Lê o id da âncora da URL; uma âncora malformada (ex.: "#%E0") é ignorada em vez de quebrar a página. */
function readHashId() {
  try {
    return decodeURIComponent(window.location.hash.slice(1))
  } catch {
    return ''
  }
}

/**
 * Ao abrir a página com uma âncora (ex.: /#processo vindo do Linktree), o navegador tenta
 * rolar até ela antes de o React renderizar a seção — o elemento ainda não existe e a página
 * fica no topo. Este hook refaz a rolagem depois da montagem e de novo quando as fontes
 * terminam de carregar, já que a troca de fonte pode mudar a altura do conteúdo acima.
 * Se o visitante já tiver começado a rolar, a segunda tentativa não interfere.
 */
export function useInitialHashScroll() {
  useEffect(() => {
    const id = readHashId()
    if (!id) return

    let userScrolled = false
    const markUserScroll = () => {
      userScrolled = true
    }
    for (const type of USER_SCROLL_EVENTS) {
      window.addEventListener(type, markUserScroll, { passive: true, once: true })
    }

    const scrollToTarget = () => {
      if (userScrolled) return
      document.getElementById(id)?.scrollIntoView({ behavior: 'instant', block: 'start' })
    }

    scrollToTarget()
    void document.fonts.ready.then(scrollToTarget)

    return () => {
      for (const type of USER_SCROLL_EVENTS) {
        window.removeEventListener(type, markUserScroll)
      }
    }
  }, [])
}

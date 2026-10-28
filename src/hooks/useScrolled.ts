import { useSyncExternalStore } from 'react'

function subscribe(onChange: () => void) {
  window.addEventListener('scroll', onChange, { passive: true })
  return () => window.removeEventListener('scroll', onChange)
}

/** Indica se a página já rolou além de `offset` pixels. */
export function useScrolled(offset = 24) {
  return useSyncExternalStore(
    subscribe,
    () => window.scrollY > offset,
    () => false,
  )
}

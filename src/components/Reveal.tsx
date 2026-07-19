import { useEffect, useRef, type CSSProperties, type ElementType, type ComponentPropsWithoutRef } from 'react'

let io: IntersectionObserver | null = null
function observer() {
  io ??= new IntersectionObserver(
    es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io!.unobserve(e.target) } }),
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
  )
  return io
}

type RevealProps<T extends ElementType> = {
  type?: 'up' | 'left' | 'wipe'
  delay?: number
  as?: T
} & Omit<ComponentPropsWithoutRef<T>, 'as'>

export default function Reveal<T extends ElementType = 'div'>(
  { type = 'up', delay = 0, as, ...rest }: RevealProps<T>,
) {
  const Tag = (as ?? 'div') as ElementType
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { el.classList.add('in'); return }
    observer().observe(el)
    return () => io?.unobserve(el)
  }, [])
  return (
    <Tag ref={ref} data-reveal={type}
      style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
      {...rest} />
  )
}

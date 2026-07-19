import { useEffect, useRef, type ReactNode, type CSSProperties, type ElementType } from 'react'

let io: IntersectionObserver | null = null
function observer() {
  io ??= new IntersectionObserver(
    es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io!.unobserve(e.target) } }),
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
  )
  return io
}

export default function Reveal({ children, type = 'up', delay = 0, as: Tag = 'div', className }: {
  children?: ReactNode
  type?: 'up' | 'left' | 'wipe'
  delay?: number
  as?: ElementType
  className?: string
}) {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { el.classList.add('in'); return }
    observer().observe(el)
    return () => io?.unobserve(el)
  }, [])
  return (
    <Tag ref={ref} data-reveal={type} className={className}
      style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}>
      {children}
    </Tag>
  )
}

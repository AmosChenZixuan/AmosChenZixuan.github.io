import { useEffect, useRef } from 'react'

export default function Fx() {
  const prog = useRef<HTMLDivElement>(null)
  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      if (prog.current) prog.current.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + '%'
      ticking = false
    }
    const h = () => { if (!ticking) { requestAnimationFrame(onScroll); ticking = true } }
    window.addEventListener('scroll', h, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', h)
  }, [])
  return (
    <>
      <div className="scroll-prog" ref={prog} />
      <div className="fx-noise" />
      <div className="fx-scanlines" />
    </>
  )
}

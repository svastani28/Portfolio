import { useEffect, useRef } from 'react'

// Soft radial glow that follows the cursor. Updates CSS variables on the ref'd element (no re-renders).
export default function useSpotlight() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined
    const onMove = (event) => {
      el.style.setProperty('--spot-x', `${event.clientX}px`)
      el.style.setProperty('--spot-y', `${event.clientY}px`)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return ref
}

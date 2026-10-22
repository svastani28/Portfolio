import { useEffect, useState } from 'react'

// Scroll-spy: returns the id of the section currently crossing a trigger line near the top of the viewport.
export default function useActiveSection(sectionIds) {
  const [active, setActive] = useState(sectionIds[0])

  useEffect(() => {
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean)

    const update = () => {
      const triggerLine = window.innerHeight * 0.35
      let current = sectionIds[0]
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        if (rect.top <= triggerLine && rect.bottom > triggerLine) current = section.id
      })
      setActive(current)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [sectionIds])

  return active
}

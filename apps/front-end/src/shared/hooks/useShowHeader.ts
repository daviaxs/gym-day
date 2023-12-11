import { useEffect, useState } from 'react'

export function useShowHeader() {
  const [showHeader, setShowHeader] = useState(true)
  const [scrollData, setScrollData] = useState({
    y: 0,
    lastY: 0,
  })

  useEffect(() => {
    const handleScroll = () => {
      setScrollData((prevState) => {
        return {
          y: window.scrollY,
          lastY: prevState.y,
        }
      })
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (scrollData.y > 50) {
      setShowHeader(false)
    } else {
      setShowHeader(true)
    }

    if (scrollData.y > scrollData.lastY && scrollData.y > 50) {
      setShowHeader(false)
    } else {
      setShowHeader(true)
    }
  }, [scrollData])

  return showHeader
}

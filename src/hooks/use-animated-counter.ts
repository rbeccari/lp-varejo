import { useEffect, useState } from 'react'

export function useAnimatedCounter(
  end: number,
  duration: number = 2000,
  startAnimating: boolean = true,
) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!startAnimating) return

    let startTime: number | null = null
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)

      // Use ease-out for smoother ending
      const easeOutProgress = 1 - Math.pow(1 - progress, 3)

      setCount(Math.floor(easeOutProgress * end))

      if (progress < 1) {
        window.requestAnimationFrame(step)
      } else {
        setCount(end)
      }
    }

    window.requestAnimationFrame(step)
  }, [end, duration, startAnimating])

  return count
}

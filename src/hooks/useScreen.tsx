import { useState, useEffect } from "react"

interface ScreenSize {
  width: number
}

const useScreen = (): ScreenSize => {
  const [screenWidth, setScreenWidth] = useState<ScreenSize>({
    width: window.innerWidth
  })

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth({
        width: window.innerWidth
      })
    }

    // Initial setup
    window.addEventListener("resize", handleResize)

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, []) // Empty dependency array ensures that this effect runs only once during mount

  return screenWidth
}

export default useScreen

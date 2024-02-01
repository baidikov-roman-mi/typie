import { useState, useEffect } from "react"

/* useScreen returns width as a number */


/**
 * Custom useScreenWidth hook (made by Roma)
 *
 * @returns {number} The size of a screen in a plain number
 */
const useScreenWidth = (): number => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth)
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

export default useScreenWidth

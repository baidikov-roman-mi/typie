import { useState, useEffect } from "react"
import { text } from "@/assets/data"
import "./_test.scss"

const Test = () => {
  const [value, setValue] = useState("")
  const [error, setError] = useState(false)
  const [typedSymbols, setTypedSymbols] = useState(0)
  const [speed, setSpeed] = useState(0)
  const [startTime, setStartTime] = useState(Date.now())

  useEffect(() => {
    setStartTime(Date.now())
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const userInput = e.target.value
    const expectedText = text.trim().split("")
    const elapsedTime = (Date.now() - startTime) / 1000 / 60

    for (let i = 0; i < userInput.length; i++) {
      if (userInput[i] !== expectedText[i]) {
        setError(true)
        setValue(userInput.slice(0, i))
        return
      }
    }

    setValue(userInput)
    setTypedSymbols(typedSymbols + 1)
    setSpeed(typedSymbols / elapsedTime)
    setError(false)
  }

  return (
    <>
      <div className="speed-check">{speed.toFixed(0)}</div>
      <div className="textarea-container">
        <textarea
          className={`textarea ${error ? "error" : ""}`}
          name="test"
          id="test-textarea"
          value={value}
          onChange={handleChange}
          spellCheck={false}
          placeholder={text}
          onCut={(e) => e.preventDefault()}
          onCopy={(e) => e.preventDefault()}
          onPaste={(e) => e.preventDefault()}
          onKeyDown={(e) => {
            if (e.key === "Backspace") e.preventDefault()
          }}
          autoFocus
        ></textarea>
        <div className="expected-text-container">{text}</div>
      </div>
    </>
  )
}

export default Test

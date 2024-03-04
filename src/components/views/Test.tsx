import { useState } from "react"
import { text } from "@/assets/data"
import "./_test.scss"

const Test = () => {
  const [value, setValue] = useState("")

  return (
    <>
      <div className="textarea-container">
        <textarea
          className="textarea"
          name="test"
          id="test-textarea"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          spellCheck={false}
          autoFocus
        ></textarea>
        <div className={`placeholder ${value && "has-value"}`}>{text}</div>
      </div>
    </>
  )
}

export default Test

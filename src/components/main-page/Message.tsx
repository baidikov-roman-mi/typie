import { useState } from "react"
import Button from "./Button.tsx"
import ResolutionCounter from "./ResolutionCounter.tsx"
import "./_message.scss"

interface Props {
  resolution: number
}

const Message = ({ resolution }: Props) => {
  const [showMessage, setShowMessage] = useState(true)

  function closeMessageWindow(btnValue: string) {
    // TO-DO: Create HTML select where user can choose another device if the answer is "No"
    console.log("btnValue :>> ", btnValue)
    setShowMessage(false)
  }

  return (
    // Possible TO-DO: Make this code more compact
    <>
      {showMessage && (
        <div className="message-background">
          <div className="message-container">
            <div className="message">
              <ResolutionCounter resolution={resolution} />
            </div>
            <div className="buttons">
              <Button value="Yes" hint={true} click={() => closeMessageWindow("Yes")} />
              <Button value="No" click={() => closeMessageWindow("No")} />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Message

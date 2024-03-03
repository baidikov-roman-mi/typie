import "./_test.scss"

const Test = () => {
  const words = [
    "lorem",
    "ipsum",
    "dolor",
    "sit",
    "amet",
    "consectetur",
    "adipiscing",
    "elit",
    "sed",
    "do",
    "eiusmod",
    "tempor",
    "incididunt",
    "ut",
    "labore",
    "et",
    "dolore",
    "magna",
    "aliqua"
  ]
  let text = ""
  for (let i = 0; i < words.length; i++) {
    const index = Math.floor(Math.random() * words.length)
    text += words[index] + " "
  }
  function handlePrevent(event: React.ClipboardEvent<HTMLTextAreaElement>) {
    event.preventDefault()
  }

  return (
    <>
      <textarea
        className="textarea"
        name="test"
        id="test-textarea"
        placeholder={text}
        spellCheck={false}
        autoFocus
        onCut={handlePrevent}
        onCopy={handlePrevent}
        onPaste={handlePrevent}
      ></textarea>
    </>
  )
}

export default Test

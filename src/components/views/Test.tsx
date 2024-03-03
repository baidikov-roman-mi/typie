import "./_test.scss"

const Test = () => {
  function handlePrevent(event: React.ClipboardEvent<HTMLTextAreaElement>) {
    event.preventDefault()
  }

  return (
    <>
      <textarea
        className="textarea"
        name="test"
        id="test-textarea"
        placeholder="34567890-"
        spellCheck={false}
        onCut={handlePrevent}
        onCopy={handlePrevent}
        onPaste={handlePrevent}
      ></textarea>
    </>
  )
}

export default Test

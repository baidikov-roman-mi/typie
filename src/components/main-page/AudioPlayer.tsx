interface Props {
  autoplay: boolean
  loop: boolean
}

const Audio = ({ loop, autoplay }: Props) => {
  return (
    <>
      <audio id="audio" loop={loop} autoPlay={autoplay}>
        <source src="./audio/main.m4a" type="audio/mpeg" />
      </audio>
    </>
  )
}

export default Audio

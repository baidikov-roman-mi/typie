interface Props {
  resolution: number
}
const ResolutionCounter = ({ resolution }: Props) => {
  let ifTablet = resolution >= 768
  let ifPhone = resolution < 768
  let ifPC = resolution >= 1024

  return (
    <>
      <h2 className="message-recommendations">
        Seems like you are currently using
        {ifPhone
          ? " a phone"
          : ifTablet && resolution < 1024
            ? " a tablet"
            : ifPC
              ? " a pc"
              : "a NASSA PC"}
        . Is it correct?
      </h2>
    </>
  )
}

export default ResolutionCounter

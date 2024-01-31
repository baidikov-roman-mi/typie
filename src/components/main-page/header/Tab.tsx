import useScreen from "../../../hooks/useScreen.tsx"

interface Props {
  tabTitle: string
}

export default function Tab({ tabTitle }: Props) {
  let screenSize = useScreen().width

  let ifPhone = screenSize < 768
  let ifPC = screenSize >= 1024

  return (
    // TO-DO: more compact return
    <>
      <div className="tab">
        <div className={ifPhone ? "icon" : ifPC ? "icon-and-title" : "title"}>
          {ifPhone ? (
            <img src={`./icons/${tabTitle}.svg`} alt={tabTitle} />
          ) : ifPC ? (
            <>
              <div className="icon">
                <img src={`./icons/${tabTitle}.svg`} alt={tabTitle} />
              </div>
              <div className={`${tabTitle} title`}>{tabTitle.toUpperCase()}</div>
            </>
          ) : (
            tabTitle.toUpperCase()
          )}
        </div>
      </div>
    </>
  )
}

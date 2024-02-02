interface Props {
  tabContent: string
  device: string
}
const Tab = ({ tabContent, device }: Props) => {
  let isPhone = device === "phone"
  let isPC = device === "pc"

  return (
    <div className="tab">
      <a href={`/${tabContent}`}>
        <div className={isPhone ? "icon" : !isPC ? "title" : "icon-and-title"}>
          {isPhone && <img src={`./icons/${tabContent}.svg`} alt={tabContent} />}

          {isPC && (
            <>
              <div className="icon">
                <img src={`./icons/${tabContent}.svg`} alt={tabContent} />
              </div>
              <div className={`${tabContent} title`}>{tabContent.toUpperCase()}</div>
            </>
          )}

          {!isPhone && !isPC && tabContent.toUpperCase()}
        </div>
      </a>
    </div>
  )
}

export default Tab

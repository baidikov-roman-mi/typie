interface Props {
  tabTitle: string
  device: string
}
const Tab = ({ tabTitle, device }: Props) => {
  let isPhone = device === "phone"
  let isPC = device === "pc"

  return (
    <div className="tab">
      <div className={isPhone ? "icon" : !isPC ? "title" : "icon-and-title"}>
        {isPhone && <img src={`./icons/${tabTitle}.svg`} alt={tabTitle} />}

        {isPC && (
          <>
            <div className="icon">
              <img src={`./icons/${tabTitle}.svg`} alt={tabTitle} />
            </div>
            <div className={`${tabTitle} title`}>{tabTitle.toUpperCase()}</div>
          </>
        )}

        {!isPhone && !isPC && tabTitle.toUpperCase()}
      </div>
    </div>
  )
}

export default Tab

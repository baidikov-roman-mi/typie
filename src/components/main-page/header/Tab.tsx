/* To-do: научиться писать альясы в vite.config, чтобы не было относительных и абсолютных путей */
import useScreenWidth from "../../../hooks/useScreenWidth.tsx"

interface Props {
  tabTitle: string
}

/* simplified logic, removed unneccesary variables, conditions and blocks */
export default function Tab({ tabTitle }: Props) {
  const screenSize = useScreenWidth();
  const isPhone = screenSize < 768;
  const isPC = screenSize >= 1024;

  return (
    <div className="tab">
      <div className={isPhone ? "icon" : "icon-and-title"}>
        {isPhone && (
          <img src={`./icons/${tabTitle}.svg`} alt={tabTitle} />
        )}

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
  );
}

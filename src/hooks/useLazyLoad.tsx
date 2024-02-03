import { lazy } from "react"
interface Props {
  path: string
  namedExport: string | null
}
const useLazyLoad = ({ path, namedExport }: Props) => {
  return lazy(async () => {
    const promise = import(path)
    if (namedExport == null) {
      return promise
    } else {
      const module = await promise
      return { default: module[namedExport] }
    }
  })
}

export default useLazyLoad

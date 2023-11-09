import { useContext } from "react"
import { DataContext } from "../DataContext"

type loadingType = {
  url: string,
  alt: string
}

export const Loading : React.FC<loadingType> = ({url, alt})  => {

  const ctx = useContext(DataContext)

  return (
    <>
      {ctx.isLoading ? <h3 className="loader"><img src={url} alt={alt} className='loading' />Loading...</h3>: null}
    </>
  )
}
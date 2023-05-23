import { useRouteError } from "react-router-dom"

const Err = () => {
  const error = useRouteError()
  console.error(error)
  return (
    <div  id="error-page">
      <div >
        <h1 >Oops!</h1>
        <p >Sorry, an unexpected error has occurred.</p>
        <p >
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  )
}

export default Err

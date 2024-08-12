import { Link } from "react-router-dom"


const ErrorPage = () => {
  return (
    <div className="flex flex-1 justify-between">
        <h1>Error</h1>
        <Link to='/' className="btn btn-lg bg-primary">Home</Link>
    </div>
  )
}

export default ErrorPage
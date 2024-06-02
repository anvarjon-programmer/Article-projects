import { Link } from "react-router-dom"
import logo from '../../assets/img/ALogo.jpg'

const Navbar = () => {
  return (
    <div>
        <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom container pt-2">
        <Link to='/'>
            <img src={logo} alt="" width={100} height={20}/>
        </Link>

      <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <Link to='/login' className="me-3 py-2 link-body-emphasis text-decoration-none">Login</Link>
        <Link to='/register' className="me-3 py-2 link-body-emphasis text-decoration-none">Register</Link>
    
        {/* <a className="py-2 link-body-emphasis text-decoration-none" href="#">Pricing</a> */}
      </nav>
    </div>
    </div>
  )
}

export default Navbar
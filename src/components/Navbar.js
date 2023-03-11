import { Link , NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar =() => {
  const {isAuthenticated} = useSelector (state => state.user )

  const authlinks = (
   <>
    <li className="nav-item">
            <NavLink className='nav-link' to ='/dashboard'>
                Dashboard 
            </NavLink>
      </li>

      <li className="nav-item">
            <a className='nav-link' href ='#!'>
                Logout 
            </a>
          
        </li>
   </>
  )
  const guestlinks = (
    <>
      <li className="nav-item">
            <NavLink className='nav-link' to ='/login'>
                Login 
            </NavLink>
          
        </li>
        <li className="nav-item">
            <NavLink className='nav-link' to ='/register'>
                Register  
            </NavLink>
          
        </li>
    </>

  )

return(
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to='/'>
            Auth site
        </Link>
        <button 
        className="navbar-toggler" 
        type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
            <NavLink className='nav-link' to ='/'>
                Home 
            </NavLink>
          
        </li>
        {isAuthenticated ? authlinks : guestlinks}
        
      </ul>
    </div>
  </div>
</nav>
)
}

export default Navbar;
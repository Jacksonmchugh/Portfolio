import { NavLink, Link } from 'react-router-dom'

const Nav =()=>{
    return(
        <nav className='flex-row'>
            <div id="logo">
        <Link to="">Portfolio</Link>
      </div>
            <div className='nav-links'>
            <NavLink to="/home" className={({ isActive }) =>
          isActive ? "active" : undefined}>Home</NavLink>
       
        <NavLink to="/about" className={({ isActive }) =>
          isActive ? "active" : undefined}>About</NavLink>
        <NavLink to="/contact" className={({ isActive }) =>
          isActive ? "active" : undefined}>Contact</NavLink>
          <NavLink to="/projects" className={({ isActive }) =>
          isActive ? "active" : undefined}>Projects</NavLink>
      </div>
      </nav>
    )
}
export default Nav
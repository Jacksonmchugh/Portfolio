import { NavLink } from 'react-router-dom'

const Nav =()=>{
    return(
        <nav>
            <h1 className='navheader'>Portfolio</h1>
            <div className='nav_bar'>
                <NavLink to=''>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
                <NavLink to='/projects'>Projects</NavLink>
            </div>
        </nav>
    )
}
export default Nav
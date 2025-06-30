import {Link} from 'react-router-dom'
import './Header.css'


const Header = () => {
    return(
        <div className='header1'>
            <header >
                <nav>
                    <Link to={"/"}className='navbar'>Vivekanand College</Link>
                    {/* <div className='desktop-nav'> */}
                    <Link to={"/home"} className='nav'>Home</Link>
                    <Link to={"/about"} className='nav'>About</Link>
                    <Link to={"/courses"} className='nav'>Courses</Link>
                    <Link to={"/contact"} className='nav'>ContactUs</Link>
                    <Link to={"/admission"} className='navitem nav'>Apply Now!</Link>
                    {/* </div> */}
                </nav>
            </header>
        </div>
    )
}

export default Header;
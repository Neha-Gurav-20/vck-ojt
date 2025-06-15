import {Link} from 'react-router-dom'
const Header = () => {
    return(
        <>
            <header>
                <nav>
                    <Link to={"/home"}>Home</Link>
                    <Link to={"/about"}>About</Link>
                    <Link to={"/contact"}>ContactUs</Link>
                    <Link to={"/courses"}>Courses</Link>
                    <Link to={"/admission"}>Admission</Link>
                   
                </nav>
            </header>
        </>
    )
}

export default Header;
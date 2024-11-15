import React,  {useState, useEffect, useContext} from 'react';
import Link from 'next/link';
import Image from "next/image";
import { Collapse} from 'reactstrap';



const Header = props => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

     
	return (
    <React.Fragment>

        <header className="landing-header mx-auto bg-transparent py-2">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <Link href="/">
                        <a className="landing-logo">
                            <Image src="/img/logo.png" alt="Picture of the author" width={"123.4262924194336px7.7"} height={"60px"} />
                        </a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation" onClick={toggleNavbar}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Collapse isOpen={!collapsed} navbar>
                            <ul className="nav landing-ul mx-auto col-md-9 mb-2 justify-content-center mb-md-0">
                                <li>
                                    <Link href="/">
                                        <a className="nav-link px-2 header-links">Home</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about">
                                        <a className="nav-link px-2 header-links">ABOUT</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/pau">
                                        <a className="nav-link px-2 header-links">PAU</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/faqs">
                                        <a className="nav-link px-2 header-links">FAQs</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact">
                                        <a className="nav-link px-2 header-links">CONTACT</a>
                                    </Link>
                                </li>
                            </ul>

                            <div className="col-md-3 text-end">
                                <Link href="/login">
                                    <a className="header-links">LOGIN</a>
                                </Link>
                                <Link href="/register">
                                    <a type="button" className="btn btn-primary btn-register">REGISTER</a>
                                </Link>
                            </div>
                    </Collapse>
                </div>
            </nav>
        </header>

        
		<style jsx global>{`
           /* general styling */
           .logo-link{
               width: 10%;
               margin-right: 2rem;
           }

      `}</style>
  </React.Fragment>
)
}

export default Header;
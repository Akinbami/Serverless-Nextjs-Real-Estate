import React,  {useState, useEffect, useContext} from 'react';
import Link from 'next/link';
import Image from "next/image";
import { Collapse} from 'reactstrap';



const RegistrationHeader = props => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

     
	return (
    <React.Fragment>

        <header className="landing-header mx-auto bg-transparent p-2">
                <div className="d-flex justify-content-between">
                    <Link href="/">
                        <a className="landing-logo">
                            <Image src="/img/logo.png" alt="Picture of the author" width={"123.43px"} height={"60px"} />
                        </a>
                    </Link>
                    <p className="navbar-text">Have an account? 
                        <Link href="/login">
                            <a className="navbar-text-action-link px-1">Log In here</a>
                        </Link>
                    </p>
                </div>
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

export default RegistrationHeader;
import React,  {useState, useEffect, useContext} from 'react';
import Link from 'next/link';
import Image from "next/image";
import { Collapse, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Tooltip} from 'reactstrap';
import { useRouter } from 'next/router';

import { FaBell } from "react-icons/fa";
import Notification from './Notification';




const ProfileHeader = props => {
    const [collapsed, setCollapsed] = useState(true);
    const [tooltipOpen, setTooltipOpen] = useState(false);

    const toggle = () => setTooltipOpen(!tooltipOpen);
    const toggleNavbar = () => setCollapsed(!collapsed);

    const router = useRouter();

    const logout = () =>{
        fetch("/api/logout", {
            method: 'POST',
            headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({})
            }).then(response =>{
              return response.json()
            })
            .then(data =>{
              
              console.log("response data",data)
              router.push("/login")
              
            })
            .catch(error =>{
              setIsLoading(false)
              console.log(error)
              // setPhoneError("Failed")
            })  
    }

     
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
                            <ul className="nav profile-ul ms-auto col-md-12 mb-2 justify-content-end mb-md-0">
                                <li>
                                    <Link href="/dashboard">
                                        <a className={`nav-link px-1 profile-header-links ${router.pathname=="/dashboard"?"profile-header-active":""}`}>Dashboard</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/roommates">
                                        <a className={`nav-link px-1 profile-header-links ${router.pathname=="/roommates"?"profile-header-active":""}`}>Roommates</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/support">
                                        <a className={`nav-link px-1 profile-header-links ${router.pathname=="/support"?"profile-header-active":""}`}>Support</a>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="#">
                                        {/* <button type="button" class="btn btn-primary ">
                                            Inbox
                                            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                                99+
                                                <span class="visually-hidden">unread messages</span>
                                            </span>
                                        </button> */}
                                        
                                        <Notification token={props.token} />
                                    </Link>
                                </li>
                                
                                <li>
                                    <div className="profile-account-dropdown px-2" href="#" id="account-dropdown">
                                        <div className="d-flex justify-content-between">
                                            <p className="py-2 mb-0"><img src="/img/profile_pic.png" alt="" /></p>
                                            <p className="p-2 mb-0">{props.user.profile.firstname} {props.user.profile.lastname.slice(0,1)}.</p>
                                            <p className="py-2 mb-0"><img src="/img/CaretDown.png" alt="" /></p>
                                        </div>
                                    </div>
                                    <Tooltip placement="top" isOpen={tooltipOpen} autohide={false} target="account-dropdown" toggle={toggle} placement="bottom">
                                        <ul className="account-dropdown-list p-0">
                                            <li><Link href="/profile"><a className="dropdown-item">Profile</a></Link> </li>
                                            <li><a className="dropdown-item" href="#" onClick={logout}>Logout</a></li>
                                        </ul>
                                    </Tooltip>
                                </li>
                            </ul>
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

           .tooltip-inner{
               padding: 0px;
           }
           

      `}</style>
  </React.Fragment>
)
}

export default ProfileHeader;


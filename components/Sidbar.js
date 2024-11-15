import React,  {useState, useEffect, useContext} from 'react';
import Link from 'next/link';
import Image from "next/image";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import Cookies from "js-cookie";
import Router, {useRouter} from 'next/router';




const Sidebar = props => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);
    const router = useRouter();

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

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
              Router.push("/admin/login")
              
            })
            .catch(error =>{
              setIsLoading(false)
              console.log(error)
              // setPhoneError("Failed")
            })  
    }

     
	return (
    <React.Fragment>

        <div className="d-flex flex-column flex-shrink-0 p-5 admin-sidebar" style={{width: "280px"}}>
            <header className="landing-header me-auto bg-transparent py-2 mb-4">
                <ul className="nav justify-content-start">

                    <li className="nav-item">
                        <Link href="/">
                            <a className="landing-logo">
                                <Image src="/img/logo.png" alt="Picture of the author" width={"102px"} height={"50px"} />
                            </a>
                        </Link>
                    </li>

                    
                </ul>
            </header>
            <Link href="/admin/dashboard">
                <a className="nav-link px-0">
                    <div className="d-flex justify-content-start">
                        <p className="mb-0">
                            <img src="/img/dashboard-solid.png" height="10" alt="dashboard solid" />
                        </p>
                        <p className="admin-dashboard-header px-2 py-2 mb-0">Dashboard</p>
                    </div>
                </a>
            </Link>
            
            <ul className="nav nav-pills flex-column mb-auto admin-nav">
            <li className="nav-item">
                <Link href="/admin/rooms">
                    <a className={`nav-link admin-nav-link ${router.pathname=="/admin/rooms"? "admin-nav-link-active": ""}`} aria-current="page">
                        <img src="/img/key.png" className="bi me-2" width="16" height="16" />
                        Rooms
                    </a>
                </Link>
                
            </li>
            <li className="nav-item">
                <Link href="/admin/occupants">
                    <a className={`nav-link admin-nav-link ${router.pathname=="/admin/occupants"? "admin-nav-link-active": ""}`} >
                    <img src="/img/occupant.png" className="bi me-2" width="16" height="16" />
                    Occupants
                    </a>
                </Link>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link admin-nav-link">
                <img src="/img/checklist.png" className="bi me-2" width="16" height="16" />
                Checklist
                </a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link admin-nav-link">
                <img src="/img/naira.png" className="bi me-2" width="16" height="16" />
                Finance
                </a>
            </li>
            <li className="nav-item">
                <Link href="/admin/tickets">
                    <a className={`nav-link admin-nav-link ${router.pathname=="/admin/tickets"? "admin-nav-link-active": ""}`}>
                    <img src="/img/chat.png" className="bi me-2" width="16" height="16" />
                    Tickets
                    </a>
                </Link>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link admin-nav-link">
                <img src="/img/inspection.png" className="bi me-2" width="16" height="16" />
                Inspection
                </a>
            </li>
            <li className="nav-item">
                <Link href="/admin/admins">
                    <a className={`nav-link admin-nav-link ${router.pathname=="/admin/admins"? "admin-nav-link-active": ""}`} >
                        <img src="/img/admin.png" className="bi me-2" width="16" height="16" />
                        Admin
                    </a>
                </Link>
            </li>
            </ul>
            <hr/>
            <div className="dropdown pb-5">
            <Dropdown direction="up" isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle tag={"p"}>
                    <p className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2">
                        <img src="/img/admin-picture.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                    </p>
                </DropdownToggle>
                <DropdownMenu>
                    
                        <DropdownItem><a className="dropdown-item" href="#">New project...</a></DropdownItem>
                        <DropdownItem><a className="dropdown-item" href="#">Settings</a></DropdownItem>
                        <DropdownItem><a className="dropdown-item" href="#">Profile</a></DropdownItem>
                        <DropdownItem><hr className="dropdown-divider" /></DropdownItem>
                        <DropdownItem><a className="dropdown-item" href="#" onClick={logout}>Sign out</a></DropdownItem>
                    
                </DropdownMenu>
            </Dropdown>
                
            </div>
        </div>
	    
  </React.Fragment>
)
}

export default Sidebar;
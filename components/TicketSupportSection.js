import React,  {useState, useEffect, useContext} from 'react';
import Link from 'next/link';
import Image from "next/image";
import { Collapse, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import useSWR from 'swr';
import TicketCard from './TicketCard';


// const APPLICATION_API = "http://127.0.0.1:5559";
const APPLICATION_API = "https://gtdo2np6f2.execute-api.us-east-1.amazonaws.com/dev";

const TicketSupportSection = props => {
    const [collapsed, setCollapsed] = useState(true);

    const fetcher = (url) => fetch(url, {
        method: 'GET',
        headers: { 
                authorization: 'Bearer ' + props.token,
            }
    }).then((res) => res.json())

    const { data, error } = useSWR(APPLICATION_API+`/tickets?limit=${3}`, fetcher)
    // console.log("this is the component data", data)

    if (error) return (
        <React.Fragment>
    
            <div className="room-checklist-card mx-auto py-3 mt-5">
                <div className="room-checklist-card-inner">
                    <div className="d-flex justify-content-between">
                        <p className="room-checklist-header mb-0"><img src="/img/chat-icon.png" alt="" /><span className="px-2">Support Ticket</span></p>
                        <Link href="/support">
                            <a>
                                <p className="support-button p-2">
                                    <img src="/img/chat-plus.png" alt="" /><span className="px-2">NEW TICKET</span>
                                </p>
                            </a>
                        </Link>
                    </div>
                    
                    <hr className="mt-1 mb-4" />
    
                    <div className="container text-center">
                        
                        <p className="support-done-header">Failed to load ticket</p>
                        
                    </div>
                </div>
            </div>
            
      </React.Fragment>
    )
    if (!data || !data.data) return (
        <React.Fragment>
    
            <div className="room-checklist-card mx-auto py-3 mt-5">
                <div className="room-checklist-card-inner">
                    <div className="d-flex justify-content-between">
                        <p className="room-checklist-header mb-0"><img src="/img/chat-icon.png" alt="" /><span className="px-2">Support Ticket</span></p>
                        <Link href="/support">
                            <a>
                                <p className="support-button p-2">
                                    <img src="/img/chat-plus.png" alt="" /><span className="px-2">NEW TICKET</span>
                                </p>
                            </a>
                        </Link>
                    </div>
                    
                    <hr className="mt-1 mb-4" />
    
                    <div className="container text-center">
                        <p className="support-done-logo"><img src="/img/noticket.png" alt="done" /></p>
                        
                        <p className="support-done-header">No ticket found</p>
                        <p className="support-done-text">Looks like you haven’t raised<br />
                            any complaint yet</p>
                    </div>
                </div>
            </div>
            
      </React.Fragment>
    )
     
	return (
    <React.Fragment>

        <div className="room-checklist-card mx-auto py-3 mt-5">
            <div className="room-checklist-card-inner">
                <div className="d-flex justify-content-between">
                    <p className="room-checklist-header mb-0"><img src="/img/chat-icon.png" alt="" /><span className="px-2">Support Ticket</span></p>
                    <Link href="/support">
                        <a>
                            <p className="support-button p-2">
                                <img src="/img/chat-plus.png" alt="" /><span className="px-2">NEW TICKET</span>
                            </p>
                        </a>
                    </Link>
                </div>
                
                <hr className="mt-1 mb-4" />

                {data.data.docs.map((ticket, index)=>{
                    return (<TicketCard ticket={ticket} />)
                })}
            </div>
        </div>
	    
  </React.Fragment>
)
}

export default TicketSupportSection;
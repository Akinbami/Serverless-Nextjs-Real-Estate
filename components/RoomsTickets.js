import React,  {useState, useEffect, useContext} from 'react';
import Link from 'next/link';
import Image from "next/image";
import { Collapse, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import useSWR from 'swr';
import TicketCard from './TicketCard';


// const APPLICATION_API = "http://127.0.0.1:5559";
const APPLICATION_API = "https://gtdo2np6f2.execute-api.us-east-1.amazonaws.com/dev";

const RoomsTickets = props => {
    const [collapsed, setCollapsed] = useState(true);

    const fetcher = (url) => fetch(url, {
        method: 'GET',
        headers: { 
                authorization: 'Bearer ' + props.token,
            }
    }).then((res) => res.json())

    const { data, error } = useSWR(APPLICATION_API+`/admins/tickets?limit=${5}`, fetcher)
    console.log("this is the component data", data)

    if (error) return <p className="support-done-header">Failed to load ticket</p>

    if (!data || !data.data) return (
        <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
            
    )
     
	return (
    <React.Fragment>

        {data.data.docs.map((ticket,index)=>{
            return (<div className="recent-transactions-card">
            <div className="d-flex justify-content-start">
                <p className="mb-0"><img src="/img/user-pic.png" width="50" alt="user profile" /></p>
                <p className="recent-transaction-card-text px-2 mb-0 text-dark">{ticket.description}</p>
            </div>
            <div className="tickets-card-footer">
                <div className="d-flex justify-content-between">
                    <p className="mb-0"><img src="/img/open-door.png" width="15" alt="open door" /><span className="px-1">{ticket.category}</span></p>
                    <p className="mb-0">Average time to resolve: 2 days</p>
                    <p className="mb-0">{!ticket.resolved?<span className="badge rounded-pill bg-success px-3">In Progress</span>:<span className="badge rounded-pill bg-success px-3">Resolved</span>}</p>
                </div>
            </div>
        </div>)
        })}
	    
  </React.Fragment>
)}

export default RoomsTickets;

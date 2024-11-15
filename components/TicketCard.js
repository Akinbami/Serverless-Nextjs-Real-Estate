
import React,  {useState, useEffect, useContext} from 'react';
import Link from 'next/link';
import Image from "next/image";
import { Collapse} from 'reactstrap';



const TicketCard = props => {
    const ticket = props.ticket;
     
	return (
    <React.Fragment>

        <div className="support-ticket-card">
            <Link href={`/support/${ticket._id}`}>
                <a className="ticket-link">
                    <div className="d-flex align-items-center mb-3">
                        <div className="flex-shrink-0">
                            <img src="/img/ticket-card-image.png" alt="" />
                        </div>
                        <div className="flex-grow-1 ms-3">
                            <p className="support-ticket-card-title">{ticket.description}</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p className="support-ticket-card-text"><img src="/img/open-door.png" width="15%" alt="" /><span className="px-2">{ticket.category} Work</span></p>
                        <p className="support-ticket-card-text">Average time to resolve: 2 days</p>
                        <p className="support-ticket-card-text">{!ticket.resolved?<span className="badge rounded-pill bg-success px-3">In Progress</span>:<span className="badge rounded-pill bg-success px-3">Resolved</span>}</p>
                    </div>
                </a>
            </Link>
            
        </div>

        <style jsx global>{`
           /* general styling */
           .ticket-link{
               text-decoration: none;
           }

      `}</style>
        
  </React.Fragment>
)
}

export default TicketCard;
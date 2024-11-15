
import React,  {useState, useEffect, useContext} from 'react';
import Link from 'next/link';

const RoommateCard = props => {
    const roommate = props.roomate;
     
	return (
    <React.Fragment>
        <div className="roommate-card">
            <a className="ticket-link">
                <div className="d-flex align-items-center mb-3">
                    <div className="flex-shrink-0">
                        <img src="/img/roommate-pic.png" width="100%" alt="" />
                    </div>
                    <div className="flex-grow-1 ms-3 pt-4">
                        <div className="d-flex justify-content-between">
                            <p className="support-ticket-card-text mb-0">You<p className="text-muted">SS/56/0644</p></p>
                            <p className="support-ticket-card-text mb-0"><img src="/img/CaretRight.png" width="100%" alt="" /></p>
                        </div>
                    </div>
                </div>
                <hr className="my-0" />
            </a>
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

export default RoommateCard;
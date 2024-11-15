import React,  {useState, useEffect, useContext} from 'react';
import Link from 'next/link';
import Image from "next/image";
import { Collapse, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



const RoommateSection = props => {
    const [collapsed, setCollapsed] = useState(true);
     
	return (
    <React.Fragment>

        <div className="room-checklist-card mx-auto py-3 mt-5">
            <div className="room-checklist-card-inner">
                <div className="d-flex justify-content-between">
                    <p className="room-checklist-header mb-0"><img src="/img/roommate.png" alt="" /><span className="px-2">Roommates</span></p>
                </div>
                
                <hr className="mt-1 mb-0" />

                <div className="roommate-card">
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
                </div>

                <div className="roommate-card">
                    <div className="d-flex align-items-center mb-3">
                        <div className="flex-shrink-0">
                            <img src="/img/roommate-pic.png" width="100%" alt="" />
                        </div>
                        <div className="flex-grow-1 ms-3 pt-4">
                            <div className="d-flex justify-content-between">
                                <p className="support-ticket-card-text mb-0">Shuaid Hassan<p className="text-muted">SS/56/0456</p></p>
                                <p className="support-ticket-card-text mb-0"><img src="/img/CaretRight.png" width="100%" alt="" /></p>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
	    
  </React.Fragment>
)
}

export default RoommateSection;
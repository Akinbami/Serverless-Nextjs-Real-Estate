
import React,  {useState, useEffect, useContext} from 'react';
import Link from 'next/link';
import numberFormatter from "number-formatter";


const ProfileCard = props => {
    const user = props.user;
     
	return (
    <React.Fragment>
        <div className="mx-auto mb-5 px-2">
            <div className="registration-card-inner mx-auto">
                <div className="confirm-section">
                    <div className="d-flex justify-content-between">
                        <p className="confirm-header-right">Your details</p>
                        <Link href="/complete-details">
                            <a className="confirm-header-left"><span className="pe-1"><img src="/img/edit-icon.png" alt="edit icon" /></span>Edit</a>
                        </Link>
                    </div>
                    <hr className="mt-0" />
                    <div className="d-flex justify-content-between">
                        <p className="confirm-text-left">Your name</p>
                        <p className="confirm-text-right text-capitalize">{user.profile.firstname} {user.profile.lastname}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p className="confirm-text-left">Matric Number</p>
                        <p className="confirm-text-right">{user.matric}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p className="confirm-text-left">Gender</p>
                        <p className="confirm-text-right">{user.profile.gender}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p className="confirm-text-left">Date of Birth</p>
                        <p className="confirm-text-right">{user.profile.dob}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p className="confirm-text-left">Phone Number</p>
                        <p className="confirm-text-right">{user.profile.phone}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p className="confirm-text-left">Email Address</p>
                        <p className="confirm-text-right">{user.email}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p className="confirm-text-left">Contact Address</p>
                        <p className="confirm-text-right">{user.profile.address}.</p>
                    </div>
                    

                </div>

                <div className="confirm-section">
                    <div className="d-flex justify-content-between">
                        <p className="confirm-header-right">Parent/Guardian</p>
                        <Link href="/complete-details">
                            <a className="confirm-header-left">
                                <span className="pe-1"><img src="/img/edit-icon.png" alt="edit icon" /></span>edit
                            </a>
                        </Link>
                    </div>
                    <hr className="mt-0" />
                    <div className="d-flex justify-content-between">
                        <p className="confirm-text-left">Name</p>
                        <p className="confirm-text-right">{user.profile.guarantor.name}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p className="confirm-text-left">Phone Number</p>
                        <p className="confirm-text-right">{user.profile.guarantor.phone}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p className="confirm-text-left">Address</p>
                        <p className="confirm-text-right">{user.profile.guarantor.address}</p>
                    </div>
                    

                </div>

                <div className="confirm-section">
                    <div className="d-flex justify-content-between">
                        <p className="confirm-header-right">Room Information</p>
                        <Link href="/provide-report">
                            <a className="confirm-header-left">
                                <span className="pe-1"><img src="/img/edit-icon.png" alt="edit icon" /></span>edit
                            </a>
                        </Link>
                    </div>
                    <hr className="mt-0" />
                    <div className="d-flex justify-content-between">
                        <p className="confirm-text-left">Room Type</p>
                        <p className="confirm-text-right">{user.profile.room_type}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p className="confirm-text-left">Duration</p>
                        <p className="confirm-text-right">{user.profile.room_type_year}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p className="confirm-text-left">Any Health Condition?</p>
                        <p className="confirm-text-right">{user.profile.health_condition?"YES":"NO"}</p>
                    </div>
                    {user.profile.health_condition?
                        <div className="d-flex justify-content-between">
                            <p className="confirm-text-left">Health Condition</p>
                            <p className="confirm-text-right">{user.profile.report}</p>
                        </div>:""}
                    
                    <div className="d-flex justify-content-between">
                        <p className="confirm-text-left">Want to Select Your Roommate?</p>
                        <p className="confirm-text-right">{user.profile.select_roommate?"YES":"NO"}</p>
                    </div>
                    {user.profile.select_roommate?
                        <div className="d-flex justify-content-between">
                            <p className="confirm-text-left">Roommate Name</p>
                            <p className="confirm-text-right">{user.profile.roommate_name}</p>
                        </div>:""}
                    

                </div>
                
                <div className="d-flex justify-content-between">
                    <p className="confirm-header-right text-dark">Room number</p>
                    <p className="confirm-header-right">₦{numberFormatter( "#,##0.####", parseInt(user.profile.current_room))}/year</p>
                </div>
                <div className="d-flex justify-content-between">
                    <p className="confirm-header-right text-dark">Payment Plan</p>
                    <p className="confirm-header-right">₦{user.profile.current_payment_plan}</p>
                </div>

                <div className="mb-3 text-center">
                    <button className="btn btn-primary btn-lg btn-download mt-4 px-0"><img src="img/download-icon.png" alt="download icon" /><small className="px-3">Download receipt</small></button>
                </div>

                <div className="mb-3 text-center">
                    <button className="btn btn-primary btn-lg btn-register mt-4 px-0"><img src="img/Money.png" alt="download icon" /><small className="px-3">Renew Rent</small></button>
                </div>

            </div>
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

export default ProfileCard;
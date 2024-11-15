import Head from 'next/head'
import Link from 'next/link'

import Image from 'next/image'
import Layout from '../../../components/Layout'
import { useRouter } from 'next/router';
import { useState } from 'react';

import TimeAgo from 'javascript-time-ago';
import numberFormatter from "number-formatter";
import en from 'javascript-time-ago/locale/en';
import { Collapse, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import ApplicationsTable from '../../components/ApplicationsTable';
import Sidebar from '../../../components/Sidbar';

TimeAgo.addLocale(en)
const timeAgo = new TimeAgo('en-US')

// const APPLICATION_API = "http://127.0.0.1:5559";
const APPLICATION_API = "https://gtdo2np6f2.execute-api.us-east-1.amazonaws.com/dev";

function OccupantDetails(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const [firstnameState,setFirstnameState] = useState("");
    const [lastnameState,setLastnameState] = useState("");
    const [dobState,setDOBState] = useState("");
    const [genderState,setGenderState] = useState("");
    const [phoneState,setPhoneState] = useState("");
    const [addressState,setAddressState] = useState("");
    const [guarantorNameState,setGuarantorNameState] = useState("");
    const [guarantorPhoneState,setGuarantorPhoneState] = useState("");
    const [guarantorAddressState,setGuarantorAddressState] = useState("");

    const [deleteModal, setDeleteModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [roomEditModal, setRoomEditModal] = useState(false);


    const toggleDelete = () => setDeleteModal(!deleteModal);
    const toggleEdit = () => setEditModal(!editModal);
    const toggleRoomEdit = () => setRoomEditModal(!roomEditModal);



    const router = useRouter()

    const application = props.application.data;
    const user = props.user;
    const token = props.token;

    const handleDelete =(e)=>{
        e.preventDefault();
        setIsLoading(true)

        fetch(APPLICATION_API+ `/applications/${application._id}`, {
            method: 'DELETE',
            headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    "authorization": 'Bearer ' + token
            }, 
            body: JSON.stringify({})
        })
        .then(response => response.json())
        .then(data =>{
            console.log(data);
            setIsLoading(false);
            if(data.error){
                setIsLoading(false);
                setErrorMessage(data.message)
            }else{
                setSuccessMessage(data.message)
                router.push("/admin/dashboard")
                // setIsLoading(false)
            }
        })
        .catch(error =>{
            setIsLoading(false)
            setErrorMessage(error.message)
        }) 

    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setIsLoading(true)
        if((firstnameState && (firstnameState== guarantorNameState)) || (lastnameState && (lastnameState==guarantorNameState)) ) {
            setGuarantorNameState(firstnameState||lastnameState)
        }else if(phoneState && phoneState == guarantorPhoneState){
            setGuarantorPhoneState(phoneState)
        }else{
            console.log("continue")
            const req_data = {
                "firstname": firstnameState||user.profile.firstname,
                "lastname": lastnameState||user.profile.lastname,
                "gender": genderState||user.profile.gender,
                "dob": dobState||user.profile.dob,
                "phone": phoneState||user.profile.phone,
                "address": addressState||user.profile.address,
                "guarantor": {
                    "name": guarantorNameState||user.profile.guarantor.name,
                    "phone": guarantorPhoneState||user.profile.guarantor.phone,
                    "address": guarantorAddressState||user.profile.guarantor.address,
                }
            }
            // save to backend

            console.log("req data :", req_data)
            // let BACKEND_API;
            // if(user.profile){
            //     BACKEND_API = APPLICATION_API+ `/profiles/${user._id}`
            // }else{
            //     BACKEND_API = APPLICATION_API+ `/users/${user._id}/profile`
            // }
            fetch(APPLICATION_API+ `/users/${user._id}/profile`, {
                method: 'POST',
                headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json',
                        "authorization": 'Bearer ' + token
                }, 
                body: JSON.stringify(req_data)
            })
            .then(response => response.json())
            .then(data =>{
                console.log(data);
                setIsLoading(false);
                if(data.error){
                    setIsLoading(false);
                    setErrorMessage(data.message)
                }else{
                    // setUser(data.data)
                    setIsLoading(false)
                    router.reload(window.location.pathname)
                    // router.push(`/admin/occupants/${user.profile._id}`)
                }
            })
            .catch(error =>{
                setIsLoading(false)
                setErrorMessage(error.message)
            }) 
            
        }
    }

    const handleEditRoom = (e) =>{
        e.preventDefault();
        setIsLoading(true)
        
        console.log("continue")
        const req_data = {
            "room_number": e.target.room_number.value||application.room.number,
            "roommate_name": e.target.roommate_name?e.target.roommate_name.value:application.roommate_name,
        }
        // save to backend

        console.log("req data :", req_data)
        fetch(APPLICATION_API+ `/applications/${application._id}`, {
            method: 'PUT',
            headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    "authorization": 'Bearer ' + token

            }, 
            body: JSON.stringify(req_data)
        })
        .then(response => response.json())
        .then(data =>{
            console.log(data);
            setIsLoading(false);
            if(data.error){
                setIsLoading(false);
                setErrorMessage(data.message)
            }else{
                // setUser(data.data)
                setIsLoading(false)
                router.reload(window.location.pathname)
                // router.push(`/admin/occupants/${user.profile._id}`)
            }
        })
        .catch(error =>{
            setIsLoading(false)
            setErrorMessage(error.message)
        }) 
            
    }
  return (
    <Layout>
        <Head>
            <link href="/css/sidebar.css" rel="stylesheet" />
        </Head>
        
        <div className="row">
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-10">
                <div className="admin-dashboard-content">
                    <div className="d-flex justify-content-between">
                        <p className="admin-dashboard-content-header text-capitalize">{user.profile.firstname} {user.profile.lastname}</p>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="admin-dashboard-details-card">
                                <div className="mb-5">
                                    <p className="admin-dashboard-details-header mb-0">Personal details</p>
                                    <hr className="mt-0" />
                                    <div className="d-flex justify-content-between mb-1">
                                        <p className="confirm-text-left">Your name</p>
                                        <p className="confirm-text-right text-capitalize">{user.profile.firstname} {user.profile.lastname}</p>
                                    </div>
                                    <div className="d-flex justify-content-between  mb-1">
                                        <p className="confirm-text-left">Matric Number</p>
                                        <p className="confirm-text-right">{user.matric}</p>
                                    </div>
                                    <div className="d-flex justify-content-between  mb-1">
                                        <p className="confirm-text-left">Gender</p>
                                        <p className="confirm-text-right">{user.profile.gender}</p>
                                    </div>
                                    <div className="d-flex justify-content-between  mb-1">
                                        <p className="confirm-text-left">Date of Birth</p>
                                        <p className="confirm-text-right">{user.profile.dob}</p>
                                    </div>
                                    <div className="d-flex justify-content-between  mb-1">
                                        <p className="confirm-text-left">Phone Number</p>
                                        <p className="confirm-text-right">{user.profile.phone}</p>
                                    </div>
                                    <div className="d-flex justify-content-between  mb-1">
                                        <p className="confirm-text-left">Email Address</p>
                                        <p className="confirm-text-right">{user.email}</p>
                                    </div>
                                    <div className="d-flex justify-content-between  mb-1">
                                        <p className="confirm-text-left">Contact Address</p>
                                        <p className="confirm-text-right">{user.profile.address}.</p>
                                    </div>
                                </div>

                                <div className="mb-5">
                                    <p className="admin-dashboard-details-header mb-0">Parent/Guardian</p>
                                    <hr className="mt-0" />
                                    <div className="d-flex justify-content-between mb-1">
                                        <p className="confirm-text-left">Name</p>
                                        <p className="confirm-text-right">{user.profile.guarantor?user.profile.guarantor.name:""}</p>
                                    </div>
                                    <div className="d-flex justify-content-between mb-1">
                                        <p className="confirm-text-left">Phone Number</p>
                                        <p className="confirm-text-right">{user.profile.guarantor?user.profile.guarantor.phone:""}</p>
                                    </div>
                                    <div className="d-flex justify-content-between mb-1">
                                        <p className="confirm-text-left">Address</p>
                                        <p className="confirm-text-right">{user.profile.guarantor?user.profile.guarantor.address:""}</p>
                                    </div>
                                </div>
                                

                                <div className="mb-5">
                                    <p className="admin-dashboard-details-header mb-0">Room Information</p>
                                    <hr className="mt-0" />
                                    <div className="d-flex justify-content-between mb-1">
                                        <p className="confirm-text-left">Room Type</p>
                                        <p className="confirm-text-right">{application.room_type} Room</p>
                                    </div>
                                    <div className="d-flex justify-content-between mb-1">
                                        <p className="confirm-text-left">Duration</p>
                                        <p className="confirm-text-right">{application.room_type_year} Year(s)</p>
                                    </div>
                                    <div className="d-flex justify-content-between mb-1">
                                        <p className="confirm-text-left">Any Health Condition?</p>
                                        <p className="confirm-text-right">{application.health_condition?"YES":"NO"}</p>
                                    </div>
                                    {application.health_condition?
                                        <div className="d-flex justify-content-between">
                                            <p className="confirm-text-left">Health Condition</p>
                                            <p className="confirm-text-right">{application.report}</p>
                                        </div>:""}
                                    <div className="d-flex justify-content-between mb-1">
                                        <p className="confirm-text-left">Want to Select Your Roommate?</p>
                                        <p className="confirm-text-right">{application.select_roommate?"YES":"NO"}</p>
                                    </div>
                                    {application.select_roommate?
                                        <div className="d-flex justify-content-between  mb-1">
                                            <p className="confirm-text-left">Roommate Name</p>
                                            <p className="confirm-text-right text-capitalized">{application.roommate_name}</p>
                                        </div>:""}
                                </div>

                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="admin-dashboard-details-card mb-4">
                                <p className="admin-dashboard-details-header text-muted mb-4">Account Timeline</p>
                                <div className="d-flex justify-content-start mb-4">
                                    <p className="mb-0 pt-3"><img src="/img/timeline-success.png" width="30" alt="timeline" /></p>
                                    <div className="ps-2">
                                        <p className="timeline-time">May 30 - 12:06pm</p>
                                        <p className="timeline-text">Email Confirmed</p>
                                        <p className="timeline-action">Resend verification</p>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-start mb-4">
                                    <p className="mb-0 pt-3"><img src="/img/timeline-success.png" width="30" alt="timeline" /></p>
                                    <div className="ps-2">
                                        <p className="timeline-time">May 30 - 12:06pm</p>
                                        <p className="timeline-text">Payment Received</p>
                                        <p className="timeline-action">Download receipt</p>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-start mb-4">
                                    <p className="mb-0 pt-3"><img src="/img/timeline-success.png" width="30" alt="timeline" /></p>
                                    <div className="ps-2">
                                        <p className="timeline-time">May 30 - 12:06pm</p>
                                        <p className="timeline-text">Agreement Signed</p>
                                        <p className="timeline-action">Download Agreement</p>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-start mb-4">
                                    <p className="mb-0 pt-1"><img src="/img/timeline-success.png" width="30" alt="timeline" /></p>
                                    <div className="ps-2">
                                        <p className="timeline-time">May 30 - 12:06pm</p>
                                        <p className="timeline-text">Room assigned</p>
                                    </div>
                                </div>
                            </div>

                            <div className="admin-dashboard-details-card">
                                <div className="mb-5">
                                    <div className="d-flex justify-content-between mb-1">
                                        <p className="admin-dashboard-details-header mb-0">Apartment Information</p>
                                        <p className="confirm-header-left room-edit" onClick={toggleRoomEdit}><span className="pe-1"><img src="/img/edit-icon.png" alt="edit icon" /></span>Edit</p>
                                    </div>
                                    <Modal isOpen={roomEditModal} toggle={toggleRoomEdit} centered={true}>
                                        <div className="modal-dialog m-0">
                                            <div className="modal-content p-2">
                                            <form onSubmit={handleEditRoom}>
                                                <div className="mb-3">
                                                    <label for="room_number" className="form-label login-form-label">Room Number</label>
                                                    <input type="text" className="form-control" id="room_number" name="room_number" defaultValue={application.room.number} aria-describedby="roomNumberHelp" />
                                                </div>

                                                {application.select_roommate?
                                                    <div className="mb-3">
                                                        <label for="roommate_name" className="form-label login-form-label">Roommate Name</label>
                                                        <input type="text" className="form-control" id="roommate_name" name="roommate_name" defaultValue={application.roommate_name} aria-describedby="roomNumberHelp" />
                                                    </div>:""}
                                                {errorMessage?<p className="text-danger">{errorMessage}</p>:""}
                                                <div className="mb-3 text-center">
                                                    {isLoading?<button type="submit" className="btn btn-primary btn-lg btn-register mt-4" disabled>Loading...</button>:<button type="submit" className="btn btn-primary btn-lg btn-register mt-4">Save</button>}
                                                    
                                                </div>
                                            </form>
                                                
                                            
                                            </div>
                                        </div>
                                    </Modal>
                                    
                                    <hr className="mt-0" />
                                    <div className="d-flex justify-content-between mb-1">
                                        <p className="confirm-text-left">Apartment Information</p>
                                        <p className="confirm-text-right text-capitalize">{application.room?application.room.number:""}</p>
                                    </div>
                                    <div className="d-flex justify-content-between  mb-1">
                                        <p className="confirm-text-left">Room type</p>
                                        <p className="confirm-text-right">{application.room?application.room.type:""}</p>
                                    </div>
                                    <div className="d-flex justify-content-between  mb-1">
                                        <p className="confirm-text-left">Rent</p>
                                        {application.room?<p className="confirm-text-right">₦ {numberFormatter( "#,##0.####", parseInt(application.amount/100))} per session</p>:""}
                                    </div>
                                    <div className="d-flex justify-content-between  mb-1">
                                        <p className="confirm-text-left">Address</p>
                                        <p className="confirm-text-right">{user.profile.address}</p>
                                    </div>
                                    
                                </div>
                            </div>

                            <div className="action-buttons mx-auto gap-2">
                                <button type="button" className="btn btn-danger btn-register"  onClick={toggleEdit}>Edit</button>
                                <Modal isOpen={editModal} toggle={toggleEdit} centered={true}>
                                    <div className="modal-dialog m-0">
                                        <div className="modal-content p-2">
                                        <form onSubmit={handleSubmit}>
                                            <div className="mb-3">
                                                <label for="firstname" className="form-label login-form-label">First Name</label>
                                                <input type="text" className="form-control" id="firstname" defaultValue={user.profile.firstname} aria-describedby="firstnameHelp" onChange={e=>setFirstnameState(e.target.value)} />
                                            </div>
                                            <div className="mb-3">
                                                <label for="lastname" className="form-label login-form-label">Last Name</label>
                                                <input type="text" className="form-control" id="lastname" defaultValue={user.profile.lastname}  aria-describedby="lastnameHelp" onChange={e=>setLastnameState(e.target.value)} />
                                            </div>

                                            <div className="mb-3">
                                                <label for="gender" className="form-label login-form-label">Gender</label>
                                                <select className="form-select" aria-label="Default select example" defaultValue={user.profile.gender} onChange={e=>setGenderState(e.target.value)}>
                                                    <option selected>--select--</option>
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                </select>
                                            </div>

                                            <div className="mb-3">
                                                <label htmlFor="dob" className="form-label login-form-label">Date of Birth</label>
                                                <input type="date" className="form-control" id="dob" aria-describedby="dobHelp" defaultValue={user.profile.dob} onChange={e=>setDOBState(e.target.value)} />
                                            </div>

                                            <div className="mb-3">
                                                <label for="phone" className="form-label login-form-label">Phone Number</label>
                                                <input type="text" className="form-control" id="phone" aria-describedby="phoneHelp" defaultValue={user.profile.phone} onChange={e=>setPhoneState(e.target.value)} />
                                            </div>

                                            <div className="mb-3">
                                                <label for="address" className="form-label login-form-label">Residential Address</label>
                                                <textarea className="form-control" id="address" rows="4" defaultValue={user.profile.address} onChange={e=>setAddressState(e.target.value)}></textarea>
                                            </div>

                                            <p className="guarantor-header pt-5">Parent/Guarantor Details</p>
                                            <div className="mb-3">
                                                <label for="name" className="form-label login-form-label">Name</label>
                                                <input type="text" className="form-control" id="name" aria-describedby="nameHelp" defaultValue={user.profile.guarantor?user.profile.guarantor.name:""} onChange={e=>setGuarantorNameState(e.target.value)}/>
                                                {firstnameState && (firstnameState==guarantorNameState)||lastnameState&&(lastnameState==guarantorNameState)?<small className="text-danger">you cant use the same Name with your guardian</small>:""}
                                            </div>
                                            <div className="mb-3">
                                                <label for="guarantor_phone" className="form-label login-form-label">Phone Number</label>
                                                <input type="tel" className="form-control" id="guarantor_phone" aria-describedby="guarantor_phoneHelp" defaultValue={user.profile.guarantor?user.profile.guarantor.phone:""} onChange={e=>setGuarantorPhoneState(e.target.value)} />
                                                {phoneState && (phoneState==guarantorPhoneState)?<small className="text-danger">you cant use the same phone number with your guardian</small>:""}
                                            </div>

                                            <div className="mb-3">
                                                <label for="address" className="form-label login-form-label">Address</label>
                                                <textarea className="form-control" id="address" rows="4" defaultValue={user.profile.guarantor?user.profile.guarantor.address:""} onChange={e=>setGuarantorAddressState(e.target.value)}></textarea>
                                            </div>

                                            <p className="text-danger">{errorMessage}</p>

                                            <div className="mb-3 text-center">
                                                {isLoading?<button type="submit" className="btn btn-primary btn-lg btn-register mt-4" disabled>Loading...</button>:<button type="submit" className="btn btn-primary btn-lg btn-register mt-4">Save</button>}
                                                
                                            </div>
                                        </form>
                                            
                                           
                                        </div>
                                    </div>
                                </Modal>
                                <button type="button" className="btn btn-danger btn-register ms-2" onClick={toggleDelete}>Delete</button>
                                <Modal isOpen={deleteModal} toggle={toggleDelete} centered={true}>
                                    <div className="modal-dialog m-0">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">Are you sure you want to delete Occupant {user.profile.firstname} {user.profile.lastname}</h5>
                                                <button type="button" className="btn-close" onClick={toggleDelete}></button>
                                            </div>
                                            {isLoading?
                                                <div className="d-flex justify-content-center my-3">
                                                    <div className="spinner-border" role="status">
                                                        <span className="visually-hidden">Loading...</span>
                                                    </div>
                                                </div>: <div className="text-center my-3">
                                                <button type="button" className="btn btn-warning m-2" onClick={toggleDelete}>Cancel</button>
                                                <button type="button" className="btn btn-danger m-2" onClick={handleDelete}>Delete</button>
                                            </div>}
                                            
                                           
                                        </div>
                                    </div>
                                </Modal>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        
        <style jsx>
            {`
                .modal-header{
                    background: #EEEEEE;
                    border-radius: 5px 5px 0px 0px;
                }

                .modal-title{
                    font-family: Objektiv Mk2;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 1rem;
                    line-height: 30px;
                    /* identical to box height, or 187% */


                    /* Light Grey */

                    color: #585858;
                }
            `}
        </style>
        
        
    </Layout>
  )
}


export async function getServerSideProps(ctx) {

    const { req, res,query } = ctx;
    const {cookies} = req;
    const token = cookies["pod-token"]
    const api_res = await fetch(APPLICATION_API+`/applications/${query.id}`, {
        method: 'GET',
        headers:
            { authorization: 'Bearer ' + token }
    })
    
    // Call an external API endpoint to get posts
    const data = await api_res.json()
    console.log("application",data)
    let user;
    if (data.error) {
        return {
            redirect: {
                permanent: false,
                destination: '/admin/login'
            }
        }
    }else{
        // getting user profile
        console.log(data.data)
        const user_response = await fetch(APPLICATION_API+`/users/${data.data.user._id}`, {
            method: 'GET',
            headers:
                { authorization: 'Bearer ' + token }
        })
        user = await user_response.json();
    }
    
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        application: data,
        user: user.data,
        token,
      },
    }
}

export default  OccupantDetails;
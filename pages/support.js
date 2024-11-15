import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import Header from '../components/Header';

import Layout from '../components/Layout'
import ProfileHeader from '../components/ProfileHeader';
import RoomChecklist from '../components/RoomChecklist';
import RoommateSection from '../components/RoommateSection';
import TicketSupportSection from '../components/TicketSupportSection';
import useSWR from 'swr';
import TicketCard from '../components/TicketCard';



// const APPLICATION_API = "http://127.0.0.1:5559";
const APPLICATION_API = "https://gtdo2np6f2.execute-api.us-east-1.amazonaws.com/dev";

function Support(props) {
    const [errorMessage,setErrorMessage] = useState(false);
    const [isLoading,setIsLoading] = useState(false);
    const [ticket,setTicket] = useState(null);
    const [ticketCategory, setTicketCategory] = useState("")

    

    const [level,setLevel] = useState(1);

    const fetcher = (url) => fetch(url, {
        method: 'GET',
        headers: { 
                authorization: 'Bearer ' + props.token,
            }
    }).then((res) => res.json())

    const { data, error } = useSWR(APPLICATION_API+`/tickets`, fetcher)

    console.log("this is the data: ", data)
    
    const user = props.user.user;

    const handleSubmit =(e)=>{
        e.preventDefault();
        setIsLoading(true)
        const req_data = {
            title: e.target.ticketTitle.value,
            description: e.target.ticketDescription.value,
            category: ticketCategory
        }
        fetch(APPLICATION_API+`/tickets`, {
            method: 'POST',
            headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                  authorization: 'Bearer ' + props.token,
            }, 
            body: JSON.stringify(req_data)
            }).then(response =>{
              return response.json()
            })
            .then(data =>{
              console.log("response data",data)
              setIsLoading(false)
              if(data.error){
              //   setsubscriptionSuccess(data.data)
              setErrorMessage(data.message)
              setIsLoading(false)
              }else{
                  console.log(data);
                  setLevel(4);
                  setTicket(data.data)
                  setIsLoading(false)
              }
            })
            .catch(error =>{
              setIsLoading(false)
              console.log(error)
              // setPhoneError("Failed")
            })    
    }

    const Level1 = () =>{
        return (
            <div className="room-checklist-card-inner">
                <div className="d-flex justify-content-between">
                    <p className="room-checklist-header mb-0"><img src="/img/chat-icon.png" alt="" /><span className="px-2">Support Ticket</span></p>
                    <p className="support-button p-2" onClick={()=>setLevel(2)}><img src="/img/chat-plus.png" alt="" /><span className="px-2">NEW TICKET</span></p>
                </div>
                
                <hr className="mt-1 mb-4" />

                {!data?<div className="text-center my-4">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    </div>:
                data.data.total==0?<div className="container text-center">
                        <p className="support-done-logo"><img src="/img/noticket.png" alt="done" /></p>
                        
                        <p className="support-done-header">No ticket found</p>
                        <p className="support-done-text">Looks like you haven’t raised<br />
                            any complaint yet</p>
                    </div>:
                data.data.docs.map((ticket, index)=>{
                    return (<TicketCard ticket={ticket} />)
                })}
                

                
            </div>
        )
    }

    const Level2 =()=>{
        return (
            <div className="room-checklist-card-inner">
                <div className="d-flex justify-content-between">
                    <p className="room-checklist-header mb-0" onClick={()=>setLevel(1)}><img src="/img/ArrowLeft.png" alt="" /><span className="px-2">Back</span></p>
                </div>
                
                <hr className="mt-1 mb-4" />

                <div className="support-category">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="">
                                <input type="radio" className="btn-check ticket-check" name="options" id="Shower" value="Shower" autoComplete="off" onChange={e=>setTicketCategory(e.target.value)} />
                                <label className={ticketCategory=="Shower"?"btn btn-light support-category-item mb-3 px-0 w-100 pt-0":"btn btn-light support-category-item mb-3 px-0 w-100"} for="Shower">
                                    {ticketCategory=="Shower"?<div className="d-flex"><p className="support-ticket-checked ms-auto mb-0"><img className="mx-1" src="/img/check.png" alt="check" /></p></div>:""}
                                    <div className="container">
                                        <p className="support-category-icon"><img src="/img/plumbing.png" width="30%" alt="" /></p>
                                        <p className="support-category-item-text">Shower</p>
                                        <p className="support-category-item-text">Work</p>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="">
                                <input type="radio" className="btn-check ticket-check" name="options" id="Tap" value="Tap" autoComplete="off" onChange={e=>setTicketCategory(e.target.value)} />
                                <label className={ticketCategory=="Tap"?"btn btn-light support-category-item mb-3 px-0 w-100 pt-0":"btn btn-light support-category-item mb-3 px-0 w-100"} for="Tap">
                                    {ticketCategory=="Tap"?<div className="d-flex"><p className="support-ticket-checked ms-auto mb-0"><img className="mx-1" src="/img/check.png" alt="check" /></p></div>:""}
                                    <div className="container">
                                        <p className="support-category-icon"><img src="/img/plumbing.png" width="30%" alt="" /></p>
                                        <p className="support-category-item-text">Tap</p>
                                        <p className="support-category-item-text">Work</p>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="">
                                <input type="radio" className="btn-check ticket-check" name="options" id="Sink" value="Sink" autoComplete="off" onChange={e=>setTicketCategory(e.target.value)} />
                                <label className={ticketCategory=="Sink"?"btn btn-light support-category-item mb-3 px-0 w-100 pt-0":"btn btn-light support-category-item mb-3 px-0 w-100"} for="Sink">
                                    {ticketCategory=="Sink"?<div className="d-flex"><p className="support-ticket-checked ms-auto mb-0"><img className="mx-1" src="/img/check.png" alt="check" /></p></div>:""}
                                    <div className="container">
                                        <p className="support-category-icon"><img src="/img/plumbing.png" width="30%" alt="" /></p>
                                        <p className="support-category-item-text">Sink</p>
                                        <p className="support-category-item-text">Work</p>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="">
                                <input type="radio" className="btn-check ticket-check" name="options" id="Toilet" value="Toilet" autoComplete="off" onChange={e=>setTicketCategory(e.target.value)} />
                                <label className={ticketCategory=="Toilet"?"btn btn-light support-category-item mb-3 px-0 w-100 pt-0":"btn btn-light support-category-item mb-3 px-0 w-100"} for="Toilet">
                                    {ticketCategory=="Toilet"?<div className="d-flex"><p className="support-ticket-checked ms-auto mb-0"><img className="mx-1" src="/img/check.png" alt="check" /></p></div>:""}
                                    <div className="container">
                                        <p className="support-category-icon"><img src="/img/plumbing.png" width="30%" alt="" /></p>
                                        <p className="support-category-item-text">Toilet</p>
                                        <p className="support-category-item-text">Work</p>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="">
                                <input type="radio" className="btn-check ticket-check" name="options" id="Water" value="Water heater" autoComplete="off" onChange={e=>setTicketCategory(e.target.value)} />
                                <label className={ticketCategory=="Water heater"?"btn btn-light support-category-item mb-3 px-0 w-100 pt-0":"btn btn-light support-category-item mb-3 px-0 w-100"} for="Water">
                                    {ticketCategory=="Water heater"?<div className="d-flex"><p className="support-ticket-checked ms-auto mb-0"><img className="mx-1" src="/img/check.png" alt="check" /></p></div>:""}
                                    <div className="container">
                                <p className="support-category-icon"><img src="/img/plumbing.png" width="30%" alt="" /></p>
                                <p className="support-category-item-text">Water </p>
                                <p className="support-category-item-text">heater</p>
                                </div>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="">
                                <input type="radio" className="btn-check ticket-check" name="options" id="Electrical" value="Electrical" autoComplete="off" onChange={e=>setTicketCategory(e.target.value)} />
                                <label className={ticketCategory=="Electrical"?"btn btn-light support-category-item mb-3 px-0 w-100 pt-0":"btn btn-light support-category-item mb-3 px-0 w-100"} for="Electrical">
                                    {ticketCategory=="Electrical"?<div className="d-flex"><p className="support-ticket-checked ms-auto mb-0"><img className="mx-1" src="/img/check.png" alt="check" /></p></div>:""}
                                    <div className="container">
                                <p className="support-category-icon"><img src="/img/plumbing.png" width="30%" alt="" /></p>
                                <p className="support-category-item-text">Electrical</p>
                                <p className="support-category-item-text">Work</p>
                                </div>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="">
                                <input type="radio" className="btn-check ticket-check" name="options" id="AC" value="AC" autoComplete="off" onChange={e=>setTicketCategory(e.target.value)} />
                                <label className={ticketCategory=="AC"?"btn btn-light support-category-item mb-3 px-0 w-100 pt-0":"btn btn-light support-category-item mb-3 px-0 w-100"} for="AC">
                                    {ticketCategory=="AC"?<div className="d-flex"><p className="support-ticket-checked ms-auto mb-0"><img className="mx-1" src="/img/check.png" alt="check" /></p></div>:""}
                                    <div className="container">
                                <p className="support-category-icon"><img src="/img/plumbing.png" width="30%" alt="" /></p>
                                <p className="support-category-item-text">AC</p>
                                <p className="support-category-item-text">Work</p>
                                </div>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="">
                                <input type="radio" className="btn-check ticket-check" name="options" id="Window" value="Window" autoComplete="off" onChange={e=>setTicketCategory(e.target.value)} />
                                <label className={ticketCategory=="Window"?"btn btn-light support-category-item mb-3 px-0 w-100 pt-0":"btn btn-light support-category-item mb-3 px-0 w-100"} for="Window">
                                    {ticketCategory=="Window"?<div className="d-flex"><p className="support-ticket-checked ms-auto mb-0"><img className="mx-1" src="/img/check.png" alt="check" /></p></div>:""}
                                    <div className="container">
                                        <p className="support-category-icon"><img src="/img/plumbing.png" width="30%" alt="" /></p>
                                        <p className="support-category-item-text">Window</p>
                                        <p className="support-category-item-text">Work</p>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="">
                                <input type="radio" className="btn-check ticket-check" name="options" id="Door" value="Door" autoComplete="off" onChange={e=>setTicketCategory(e.target.value)} />
                                <label className={ticketCategory=="Door"?"btn btn-light support-category-item mb-3 px-0 w-100 pt-0":"btn btn-light support-category-item mb-3 px-0 w-100"} for="Door">
                                    {ticketCategory=="Door"?<div className="d-flex"><p className="support-ticket-checked ms-auto mb-0"><img className="mx-1" src="/img/check.png" alt="check" /></p></div>:""}
                                    <div className="container">
                                        <p className="support-category-icon"><img src="/img/plumbing.png" width="30%" alt="" /></p>
                                        <p className="support-category-item-text">Door</p>
                                        <p className="support-category-item-text">Work</p>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="">
                                <input type="radio" className="btn-check ticket-check" name="options" id="Bed" value="Bed" autoComplete="off" onChange={e=>setTicketCategory(e.target.value)} />
                                <label className={ticketCategory=="Bed"?"btn btn-light support-category-item mb-3 px-0 w-100 pt-0":"btn btn-light support-category-item mb-3 px-0 w-100"} for="Bed">
                                    {ticketCategory=="Bed"?<div className="d-flex"><p className="support-ticket-checked ms-auto mb-0"><img className="mx-1" src="/img/check.png" alt="check" /></p></div>:""}
                                    <div className="container">
                                        <p className="support-category-icon"><img src="/img/plumbing.png" width="30%" alt="" /></p>
                                        <p className="support-category-item-text">Bed</p>
                                        <p className="support-category-item-text">Work</p>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="">
                                <input type="radio" className="btn-check ticket-check" name="options" id="Wardrobe" value="Wardrobe" autoComplete="off" onChange={e=>setTicketCategory(e.target.value)} />
                                <label className={ticketCategory=="Wardrobe"?"btn btn-light support-category-item mb-3 px-0 w-100 pt-0":"btn btn-light support-category-item mb-3 px-0 w-100"} for="Wardrobe">
                                    {ticketCategory=="Wardrobe"?<div className="d-flex"><p className="support-ticket-checked ms-auto mb-0"><img className="mx-1" src="/img/check.png" alt="check" /></p></div>:""}
                                    <div className="container">
                                        <p className="support-category-icon"><img src="/img/plumbing.png" width="30%" alt="" /></p>
                                        <p className="support-category-item-text">Wardrobe</p>
                                        <p className="support-category-item-text">Work</p>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="">
                                <input type="radio" className="btn-check ticket-check" name="options" id="Desk" value="Desk" autoComplete="off" onChange={e=>setTicketCategory(e.target.value)} />
                                <label className={ticketCategory=="Desk"?"btn btn-light support-category-item mb-3 px-0 w-100 pt-0":"btn btn-light support-category-item mb-3 px-0 w-100"} for="Desk">
                                    {ticketCategory=="Desk"?<div className="d-flex"><p className="support-ticket-checked ms-auto mb-0"><img className="mx-1" src="/img/check.png" alt="check" /></p></div>:""}
                                    <div className="container">
                                <p className="support-category-icon"><img src="/img/plumbing.png" width="30%" alt="" /></p>
                                <p className="support-category-item-text">Desk </p>
                                <p className="support-category-item-text">Work</p>
                                </div>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="">
                                <input type="radio" className="btn-check ticket-check" name="options" id="Fan" value="Fan" autoComplete="off" onChange={e=>setTicketCategory(e.target.value)} />
                                <label className={ticketCategory=="Fan"?"btn btn-light support-category-item mb-3 px-0 w-100 pt-0":"btn btn-light support-category-item mb-3 px-0 w-100"} for="Fan">
                                    {ticketCategory=="Fan"?<div className="d-flex"><p className="support-ticket-checked ms-auto mb-0"><img className="mx-1" src="/img/check.png" alt="check" /></p></div>:""}
                                    <div className="container">
                                <p className="support-category-icon"><img src="/img/plumbing.png" width="30%" alt="" /></p>
                                <p className="support-category-item-text">Fan</p>
                                <p className="support-category-item-text">Work</p>
                                </div>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-3">
                        <div className="">
                                <input type="radio" className="btn-check ticket-check" name="options" id="Mirror" value="Mirror" autoComplete="off" onChange={e=>setTicketCategory(e.target.value)} />
                                <label className={ticketCategory=="Mirror"?"btn btn-light support-category-item mb-3 px-0 w-100 pt-0":"btn btn-light support-category-item mb-3 px-0 w-100"} for="Mirror">
                                    {ticketCategory=="Mirror"?<div className="d-flex"><p className="support-ticket-checked ms-auto mb-0"><img className="mx-1" src="/img/check.png" alt="check" /></p></div>:""}
                                    <div className="container">
                                <p className="support-category-icon"><img src="/img/plumbing.png" width="30%" alt="" /></p>
                                <p className="support-category-item-text">Mirror</p>
                                <p className="support-category-item-text">Work</p>
                                </div>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="">
                                <input type="radio" className="btn-check ticket-check" name="options" id="Curtain" value="Curtain" autoComplete="off" onChange={e=>setTicketCategory(e.target.value)} />
                                <label className={ticketCategory=="Curtain"?"btn btn-light support-category-item mb-3 px-0 w-100 pt-0":"btn btn-light support-category-item mb-3 px-0 w-100"} for="Curtain">
                                    {ticketCategory=="Curtain"?<div className="d-flex"><p className="support-ticket-checked ms-auto mb-0"><img className="mx-1" src="/img/check.png" alt="check" /></p></div>:""}
                                    <div className="container">
                                <p className="support-category-icon"><img src="/img/plumbing.png" width="30%" alt="" /></p>
                                <p className="support-category-item-text">Curtain </p>
                                <p className="support-category-item-text">Work</p>
                                </div>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-3">
                        <div className="">
                                <input type="radio" className="btn-check ticket-check" name="options" id="Communal" value="Communal Spaces" autoComplete="off" onChange={e=>setTicketCategory(e.target.value)} />
                                <label className={ticketCategory=="Communal Spaces"?"btn btn-light support-category-item mb-3 px-0 w-100 pt-0":"btn btn-light support-category-item mb-3 px-0 w-100"} for="Communal">
                                    {ticketCategory=="Communal Spaces"?<div className="d-flex"><p className="support-ticket-checked ms-auto mb-0"><img className="mx-1" src="/img/check.png" alt="check" /></p></div>:""}
                                    <div className="container">
                                <p className="support-category-icon"><img src="/img/plumbing.png" width="30%" alt="" /></p>
                                <p className="support-category-item-text">Communal</p>
                                <p className="support-category-item-text">Spaces</p>
                                </div>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-3">
                        <div className="">
                                <input type="radio" className="btn-check ticket-check" name="options" id="Staff" value="Staff" autoComplete="off" onChange={e=>setTicketCategory(e.target.value)} />
                                <label className={ticketCategory=="Staff"?"btn btn-light support-category-item mb-3 px-0 w-100 pt-0":"btn btn-light support-category-item mb-3 px-0 w-100"} for="Staff">
                                    {ticketCategory=="Staff"?<div className="d-flex"><p className="support-ticket-checked ms-auto mb-0"><img className="mx-1" src="/img/check.png" alt="check" /></p></div>:""}
                                    <div className="container">
                                <p className="support-category-icon"><img src="/img/plumbing.png" width="30%" alt="" /></p>
                                <p className="support-category-item-text">Staff</p>
                                <p className="support-category-item-text">Work</p>
                                </div>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-3">
                        <div className="">
                                <input type="radio" className="btn-check ticket-check" name="options" id="Other" value="Other" autoComplete="off" onChange={e=>setTicketCategory(e.target.value)} />
                                <label className={ticketCategory=="Other"?"btn btn-light support-category-item mb-3 px-0 w-100 pt-0":"btn btn-light support-category-item mb-3 px-0 w-100"} for="Other">
                                    {ticketCategory=="Other"?<div className="d-flex"><p className="support-ticket-checked ms-auto mb-0"><img className="mx-1" src="/img/check.png" alt="check" /></p></div>:""}
                                    <div className="container">
                                <p className="support-category-icon"><img src="/img/plumbing.png" width="30%" alt="" /></p>
                                <p className="support-category-item-text">Other</p>
                                <p className="support-category-item-text">Work</p>
                                </div>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="text-center my-3">
                    {ticketCategory?
                        <button type="btn" className="btn btn-primary btn-register" onClick={()=>setLevel(3)}> Continue </button>:
                        <button type="btn" className="btn btn-primary btn-register" disabled> Continue </button>}
                    </div>
                    
                </div>
                
            </div>
        )
    }

    const Level3 =()=>{
        return (
            <div className="room-checklist-card-inner">
                <div className="d-flex justify-content-between">
                    <p className="room-checklist-header mb-0" onClick={()=>setLevel(2)}><img src="/img/ArrowLeft.png" alt="" /><span className="px-2">Back</span></p>
                </div>
                
                <hr className="mt-1 mb-4" />

                <div className="support-category">
                    <div className="d-flex justify-content-between">
                        <p className="support-type-header">Complaint type: <span className="support-type-text-muted">Plumbing Work</span></p>
                        <p className="support-type-text">Average time to resolve: <span className="support-type-text-muted">2 days</span></p>
                    </div>
                    {errorMessage?<p className="text-danger">{errorMessage}</p>:""}
                    <form onSubmit={handleSubmit} >
                        <div className="mb-3">
                            <label for="ticketTitle" className="form-label support-title">Title*</label>
                            <input type="text" className="form-control" id="ticketTitle" name="ticketTitle" placeholder="" />
                        </div>
                        <div className="mb-3">
                            <label for="ticketDescription" className="form-label">Description*</label>
                            <textarea className="form-control" id="ticketDescription" rows="4" name="ticketDescription"></textarea>
                        </div>
                        <div className="text-center my-3">
                            {isLoading?<button type="submit" className="btn btn-primary btn-register" disabled> Loading... </button>:<button type="submit" className="btn btn-primary btn-register"> Submit Ticket </button>}
                            
                        </div>
                    </form>

                    
                </div>
                
            </div>
        )
    }

    const Level4 =()=>{
        return (
            <div className="room-checklist-card-inner">
                <div className="d-flex justify-content-between">
                    <p className="room-checklist-header mb-0" onClick={()=>setLevel(2)}><img src="/img/ArrowLeft.png" alt="" /><span className="px-2">Back</span></p>
                </div>
                
                <hr className="mt-1 mb-4" />

                <div className="support-category">
                    <div className="d-flex justify-content-between">
                        <p className="support-type-header">Complaint type: <span className="support-type-text-muted">{ticket?ticket.category:""} Work</span></p>
                        <p className="support-type-text">Average time to resolve: <span className="support-type-text-muted">2 days</span></p>
                    </div>

                    <div className="container text-center">
                        <p className="support-done-logo"><img src="/img/done.png" alt="done" /></p>
                        
                        <p className="support-done-header">Ticket Submitted</p>
                        <p className="support-done-text">Your ticked has been submitted,<br />
                            a support agent will attend to it as soon as possible</p>
                    </div>

                    <div className="text-center my-5">
                        <Link href={`/support/${ticket?ticket._id:undefined}`}>
                            <a className="btn btn-primary btn-register-dark"> View Status </a>
                        </Link>
                    </div>

                    
                </div>
                
            </div>
        )
    }
  return (<Layout>
    <ProfileHeader user={user} />

    <div className="profile-banner">
        <div className="profile-banner-content mx-auto">
            <div className="d-flex justify-content-between">
                <div className="profile-banner-text">
                    <p className="profile-welcome-text">Hi <span className="profile-welcome-name">{user.profile.firstname}</span></p>
                    <p className="profile-welcome-text-bold">Welcome Home</p>
                    <p className="profile-breadcrum"><img src="/img/ChatCenteredDots.png" width="7%" alt="pod home logo" /><span className="px-2">Support</span></p>
                </div>
                <div className="profile-landing-bg">
                    <img src="/img/profile-landing-banner.png" width="100%" alt="the pod" />
                </div>
            </div>
        </div>
    </div>
    <div className="dashboard-items mb-5">
        <div className="room-checklist-card mx-auto py-3 mt-5">
            {level==1?<Level1 />:level==2?<Level2 />:level==3?<Level3 />:level==4?<Level4 />:""}
            
        </div>
    </div>
    
    <style jsx global>{`
        .btn-check:checked+.btn-light{
            background-color: #fff !important;
            border-color: #eb6a01 !important;
            border-width: 3px;
        }
        .btn-check:hover+.btn-light{
            background-color: #fff !important;
            border-color: #eb6a01 !important;
            border-width: 3px;
        }
    `}
        
    </style>

    
</Layout>
  )
}


export async function getServerSideProps(ctx) {
    const { req, res } = ctx;
    const {cookies} = req;
    const token = cookies["pod-token"]

    console.log("this is the token from dashboard: ",token)
    const api_res = await fetch(APPLICATION_API+`/auth/verify-token`, {
        method: 'POST',
        headers:
            { 
                authorization: 'Bearer ' + token,
                'Content-Type': 'application/json' 
            },
        body: JSON.stringify({token:token})
    })
    
    const data = await api_res.json()
    console.log("auth response",data)

    if (data.error||!data.authenticated) {
        return {
            redirect: {
                permanent: false,
                destination: '/login'
            }
        }
      }
    
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        user: data,
        token
      },
    }
}

export default Support;

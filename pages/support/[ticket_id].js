import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Layout from '../../components/Layout'
import ProfileHeader from '../../components/ProfileHeader';
import useSWR from 'swr';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';


TimeAgo.addLocale(en)
const timeAgo = new TimeAgo('en-US')

// const APPLICATION_API = "http://127.0.0.1:5559";
const APPLICATION_API = "https://gtdo2np6f2.execute-api.us-east-1.amazonaws.com/dev";

function SupportDetail(props) {
    const [errorMessage,setErrorMessage] = useState(false);
    const [isLoading,setIsLoading] = useState(false);

    const router = useRouter()
    const { ticket_id } = router.query
    
    const fetcher = (url) => fetch(url, {
        method: 'GET',
        headers: { 
                authorization: 'Bearer ' + props.token,
            }
    }).then((res) => res.json())

    const { data, error } = useSWR(APPLICATION_API+`/tickets/${ticket_id}`, fetcher)

    console.log("this is the data: ", data)
    
    const user = props.user.user;

    const handleSubmit =(e)=>{
        e.preventDefault();
        setIsLoading(true)
        const req_data = {
            title: e.target.ticketTitle.value,
            description: e.target.ticketDescription.value,
            category: "Room Access"
        }
        // fetch(APPLICATION_API+`/tickets`, {
        //     method: 'POST',
        //     headers: {
        //           'Accept': 'application/json',
        //           'Content-Type': 'application/json',
        //           authorization: 'Bearer ' + props.token,
        //     }, 
        //     body: JSON.stringify(req_data)
        //     }).then(response =>{
        //       return response.json()
        //     })
        //     .then(data =>{
        //       console.log("response data",data)
        //       setIsLoading(false)
        //       if(data.error){
        //       //   setsubscriptionSuccess(data.data)
        //       setErrorMessage(data.message)
        //       setIsLoading(false)
        //       }else{
        //           console.log(data);
        //           setLevel(4);
        //           setTicket(data.data)
        //           setIsLoading(false)
        //       }
        //     })
        //     .catch(error =>{
        //       setIsLoading(false)
        //       console.log(error)
        //       // setPhoneError("Failed")
        //     })    
    }

    
  return (<Layout>
    <ProfileHeader user={user} token={props.token} />

    <div className="profile-banner">
        <div className="profile-banner-content mx-auto">
            <div className="d-flex justify-content-between">
                <div className="profile-banner-text flex-fill">
                    <p className="profile-welcome-text">Hi <span className="profile-welcome-name">{user.profile.firstname}</span></p>
                    <p className="profile-welcome-text-bold">Welcome Home</p>
                    <p className="profile-breadcrum"><img src="/img/ChatCenteredDots.png" width="3%" alt="pod home logo" /><span className="px-2">Support/<span className="profile-breadcrum-dark">{data?data.data.description:""}</span></span></p>
                </div>
                <div className="profile-landing-bg">
                    <img src="/img/profile-landing-banner.png" width="100%" alt="the pod" />
                </div>
            </div>
        </div>
    </div>
    <div className="dashboard-items mb-5">
        <div className="room-checklist-card mx-auto py-3 mt-5">
            <div className="room-checklist-card-inner">
                <div className="d-flex justify-content-between">
                    <Link href="/support">
                        <a className="room-checklist-header mb-0" ><img src="/img/ArrowLeft.png" alt="" /><span className="px-2 text-dark">Back</span></a>
                    </Link>
                </div>
                
                <hr className="mt-1 mb-4" />

                

                {!data?<div className="text-center my-4">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    </div>:
                data.error?<div className="container text-center">
                        <p className="support-done-logo"><img src="/img/noticket.png" alt="done" /></p>
                        
                        <p className="support-done-header">No ticket found</p>
                        <p className="support-done-text">Looks like you haven’t raised<br />
                            any complaint yet</p>
                    </div>:
                    <>
                    <div className="d-flex justify-content-between">
                        <p className="support-ticket flex-fill">{data.data.title} .<span className=" support-ticket-id text-muted"><em>#{data.data._id}</em></span></p>
                        {!data.data.resolved?<p className="support-ticket-status">In Progress</p>:<p className="support-ticket-status">Solved</p>}
                    </div>
                    <div className="d-flex align-items-center mb-3">
                        <div className="flex-shrink-0">
                            <img src="/img/ticket-card-image.png" alt="" />
                        </div>
                        <div className="flex-grow-1 ms-3">
                            <p className="support-ticket mb-0">{data.data.description}</p>
                            <p className="support-ticket-time"><em className="text-muted">{timeAgo.format(Date.parse(data.data.createdAt))}</em></p>
                        </div>
                    </div>
                    


                    <div className="support-ticket-post-form mt-5">
                        <form onSubmit={handleSubmit} >
                            
                            <div className="mb-3">
                                <label for="post" className="form-label support-ticket"><em>Post reply</em></label>
                                <textarea className="form-control" id="post" rows="6" name="post"></textarea>
                            </div>
                            <div className="d-grid d-md-flex justify-content-md-end">
                                {isLoading?<button type="submit" className="btn btn-primary btn-register" disabled> Loading... </button>:<button type="submit" className="btn btn-primary btn-register"> Post </button>}
                                
                            </div>
                        </form>
                    </div>
                    </>
                }

                <div className="support-ticket-rating">
                    <p className="support-ticket-rating-header">How would you rate your conversation<br />
                        with Ronke Olujobi?</p>
                    
                    <p className="rating-icons gap-2">
                        <img src="/img/sad.png" className="rounded" alt="..." />
                        <img src="/img/neutral.png" className="rounded" alt="..." />
                        <img src="/img/happy.png" className="rounded" alt="..." />
                    </p>
                </div>
                

                
            </div>
            
        </div>
    </div>
    

    
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

export default SupportDetail;

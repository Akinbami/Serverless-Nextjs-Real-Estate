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
import RoommateCard from '../components/RoommateCard';



// const APPLICATION_API = "http://127.0.0.1:5559";
const APPLICATION_API = "https://gtdo2np6f2.execute-api.us-east-1.amazonaws.com/dev";

function Roommate(props) {
    const [errorMessage,setErrorMessage] = useState(false);
    const [isLoading,setIsLoading] = useState(false);

    


    const fetcher = (url) => fetch(url, {
        method: 'GET',
        headers: { 
                authorization: 'Bearer ' + props.token,
            }
    }).then((res) => res.json())

    const { data, error } = useSWR(APPLICATION_API+`/roommates`, fetcher)

    console.log("this is the data: ", data)
    
    const user = props.user.user;

    
  return (<Layout>
    <ProfileHeader user={user} token={props.token}/>

    <div className="profile-banner">
        <div className="profile-banner-content mx-auto">
            <div className="d-flex justify-content-between">
                <div className="profile-banner-text">
                    <p className="profile-welcome-text">Hi <span className="profile-welcome-name">{user.profile.firstname}</span></p>
                    <p className="profile-welcome-text-bold">Welcome Home</p>
                    <p className="profile-breadcrum"><img src="/img/Users2.png" width="7%" alt="pod home logo" /><span className="px-2">Roommate</span></p>
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
                    <p className="room-checklist-header mb-0"><img src="/img/roommate.png" alt="" /><span className="px-2">Roommate</span></p>
                </div>
                
                <hr className="mt-1 mb-4" />

                {!data?<div className="text-center my-4">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>:
                !data.data?<div className="container text-center">
                        <p className="support-done-logo"><img src="/img/noticket.png" alt="done" /></p>
                        
                        <p className="support-done-header">No Roommate found</p>
                        <p className="support-done-text">Looks like no roommate have<br />
                            been assigned to you yet</p>
                    </div>:
                data.data.docs.map((ticket, index)=>{
                    return (<RoommateCard roommate={roommate} />)
                })}
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

export default Roommate;

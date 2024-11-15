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


// const APPLICATION_API = "http://127.0.0.1:5559";
const APPLICATION_API = "https://gtdo2np6f2.execute-api.us-east-1.amazonaws.com/dev";

function Dashboard(props) {
    const [errorMessage,setErrorMessage] = useState(false);
    const [isLoading,setIsLoading] = useState(false);
    
    const user = props.user.user;
  return (<Layout>
    {/* <header className="landing-header mx-auto bg-transparent py-2">
        <ul className="nav justify-content-center">

            <li className="nav-item">
                <Link href="/">
                    <a className="landing-logo">
                        <Image src="/img/logo.png" alt="Picture of the author" width={"102.86px"} height={"50px"} />
                    </a>
                </Link>
            </li>

            
        </ul>
    </header> */}
    <ProfileHeader user={user} token={props.token} />

    <div className="profile-banner">
        <div className="profile-banner-content mx-auto">
            <div className="d-flex justify-content-between">
                <div className="profile-banner-text">
                    <p className="profile-welcome-text">Hi <span className="profile-welcome-name">{user.profile.firstname}</span></p>
                    <p className="profile-welcome-text-bold">Welcome Home</p>
                    <p className="profile-breadcrum"><img src="/img/profile-home.png" width="7%" alt="pod home logo" /><span className="px-2">Dashboard</span></p>
                </div>
                <div className="profile-landing-bg">
                    <img src="/img/profile-landing-banner.png" width="100%" alt="the pod" />
                </div>
            </div>
        </div>
    </div>
    <div className="dashboard-items mb-5">
        <RoomChecklist token={props.token}/>

        <TicketSupportSection token={props.token} />

        <RoommateSection />
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

export default Dashboard

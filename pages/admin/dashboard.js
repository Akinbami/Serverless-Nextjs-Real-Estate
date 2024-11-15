import Head from 'next/head'
import Link from 'next/link'

import Image from 'next/image'
import Layout from '../../components/Layout'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
// import cookieCutter from 'cookie-cutter';
import Sidebar from '../../components/Sidbar';
import RequireAuthentication from '../../components/AuthenticationComponent';
import { useCookie } from 'next-cookie';
import RoomsTickets from '../../components/RoomsTickets';
import RecentTransactions from '../../components/RecentTransactions';
import StatisticsBoard from '../../components/StatisticsBoard';


TimeAgo.addLocale(en)
const timeAgo = new TimeAgo('en-US')

// const APPLICATION_API = "http://127.0.0.1:5559";
const APPLICATION_API = "https://gtdo2np6f2.execute-api.us-east-1.amazonaws.com/dev";
// const token = cookieCutter.get('pod-token')


function Dashboard(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [loggedInUser, setLoggedInUser] = useState(null);

    const router = useRouter()

    useEffect(() => {
        // check if user is logged in
        const user = JSON.parse(localStorage.getItem("pod-user"))
        if(user.role!=1){
            router.push("/admin/login")
        }
        setLoggedInUser(user)
        // Always do navigations after the first render
        }, [])
    
	
  return (<>{!loggedInUser?"":<Layout>
  <Head>
      <link href="/css/sidebar.css" rel="stylesheet" />
  </Head>
  
  <div className="row">
      <div className="col-md-2">
          <Sidebar />
      </div>
      <div className="col-md-10">
          <div className="admin-dashboard-content">
              <p className="admin-dashboard-content-header">Dashboard</p>
              <StatisticsBoard token={props.token}/>
              <div className="row">
                  <div className="col-md-6">
                      <div className="admin-dashboard-recent-transactions">
                          <div className="d-flex justify-content-between">
                              <p className="recent-transaction-header">Recent Transaction</p>
                              <p className="recent-transaction-view-all">View all</p>
                          </div>

                          <RecentTransactions token={props.token} />
                          
                      </div>
                  </div>
                  <div className="col-md-6">
                      <div className="admin-dashboard-recent-transactions">
                          <div className="d-flex justify-content-between">
                              <p className="recent-transaction-header">Available Rooms Tickets</p>
                              <p className="recent-transaction-view-all">View all</p>
                          </div>

                          <RoomsTickets token={props.token} />
                          
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
  
  
  
  
</Layout>
}
   </> )
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
                destination: '/admin/login'
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


export default Dashboard;
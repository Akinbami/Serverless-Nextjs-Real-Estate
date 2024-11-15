import Head from 'next/head'
import Link from 'next/link'

import Image from 'next/image'
import Layout from '../../components/Layout'
import { useRouter } from 'next/router';
import { useState } from 'react';
import useSWR from 'swr';

import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import RoomsTable from '../../components/RoomsTable';
import Sidebar from '../../components/Sidbar';
import { Collapse, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import TicketsTable from '../../components/TicketsTable';


TimeAgo.addLocale(en)
const timeAgo = new TimeAgo('en-US')

// const APPLICATION_API = "http://127.0.0.1:5559";
const APPLICATION_API = "https://gtdo2np6f2.execute-api.us-east-1.amazonaws.com/dev";

function Tickets(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const [roomModal, setRoomModal] = useState(false);

    const router = useRouter()
    const toggleRoom = () => setRoomModal(!roomModal);

    const token = props.token;

    const fetcher = (url) => fetch(url, {
        method: 'GET',
        headers: { 
                authorization: 'Bearer ' + token,
            }
    }).then((res) => res.json())

    const { data, error } = useSWR(APPLICATION_API+`/admins/tickets`, fetcher)
    console.log("this is the ticket data", data?data.data.docs:"empty")

    if (error) return <p className="support-done-header">Failed to load tickets</p>


    

    
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
                    <p className="recent-transaction-header">All Tickets</p>
                    {!data || !data.data?<div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>:
                    <>
                        {/* {data.data.docs[0].title} */}
                     <TicketsTable tickets={data.data.docs} token={token} />
                    </>} 
                    
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

    const { req, res } = ctx;
    const {cookies} = req;
    const token = cookies["pod-token"]
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

export default  Tickets;
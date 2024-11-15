import React,  {useState, useEffect, useContext} from 'react';
import Link from 'next/link';
import Image from "next/image";
import { Collapse, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import numberFormatter from "number-formatter";
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

import useSWR from 'swr';
import TicketCard from './TicketCard';

TimeAgo.addLocale(en)
const timeAgo = new TimeAgo('en-US')
// const APPLICATION_API = "http://127.0.0.1:5559";
const APPLICATION_API = "https://gtdo2np6f2.execute-api.us-east-1.amazonaws.com/dev";

const RecentTransactions = props => {
    const [collapsed, setCollapsed] = useState(true);

    const fetcher = (url) => fetch(url, {
        method: 'GET',
        headers: { 
                authorization: 'Bearer ' + props.token,
            }
    }).then((res) => res.json())

    const { data, error } = useSWR(APPLICATION_API+`/applications?limit=${5}`, fetcher)
    // console.log("this is the component data", data)

    if (error) return <p className="support-done-header">Failed to load ticket</p>

    if (!data || !data.data) return (
        <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
            
    )
     
	return (
    <React.Fragment>

        {data.data.docs.map((application,index)=>{
            return (<div className="recent-transactions-card" key={index}>
                <div className="row">
                    <div className="col-md-9">
                        <div className="d-flex justify-content-start">
                            <p className="mb-0"><img src="/img/user-pic.png" width="50" alt="user profile" /></p>
                            <p className="recent-transaction-card-text px-2 mb-0">{application.firstname && application.lastname?`${application.firstname} ${application.lastname}`:application.user? application.user.email:"User"} <span className="text-dark">just paid</span> ₦{numberFormatter( "#,##0.####", parseInt(application.amount/100))} <span className="text-dark">for a</span> {application.room_type} Room</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <p className="recent-transaction-time mb-0">{timeAgo.format(Date.parse(application.createdAt))}</p>
                    </div>
                </div>
            </div>)
        })}
	    
  </React.Fragment>
)}

export default RecentTransactions;

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

const StatisticsBoard = props => {
    const [collapsed, setCollapsed] = useState(true);

    const fetcher = (url) => fetch(url, {
        method: 'GET',
        headers: { 
                authorization: 'Bearer ' + props.token,
            }
    }).then((res) => res.json())

    const { data, error } = useSWR(APPLICATION_API+`/statistics`, fetcher)
    // console.log("this is the component data", data)

    if (error) return <p className="support-done-header">Failed to load statistics</p>

    // if (!data || !data.data) return (
    //     <div className="d-flex justify-content-center">
    //         <div className="spinner-border" role="status">
    //             <span className="visually-hidden">Loading...</span>
    //         </div>
    //     </div>
            
    // )
     
	return (
    <React.Fragment>
        <div className="row mb-5">
            <div className="col-md-4">
                <div className="admin-dashboard-stats">
                    <p className="admin-dashboard-stats-value">{!data||!data.data?<div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>:data.data.rooms}</p>
                    <p className="admin-dashboard-stats-desc">Available Rooms</p>
                </div>
            </div>
            <div className="col-md-4">
                <div className="admin-dashboard-stats">
                    <p className="admin-dashboard-stats-value">{!data||!data.data?<div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>:data.data.applications}</p>
                    <p className="admin-dashboard-stats-desc">Occupants</p>
                </div>
            </div>
            <div className="col-md-4">
                <div className="admin-dashboard-stats">
                    <p className="admin-dashboard-stats-value">{!data||!data.data?<div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>:data.data.tickets}</p>
                    <p className="admin-dashboard-stats-desc">Open Tickets</p>
                </div>
            </div>
        </div>
	    
  </React.Fragment>
)}

export default StatisticsBoard;


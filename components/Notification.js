
import React,  {useState, useEffect, useContext} from 'react';
import Link from 'next/link';
import Image from "next/image";
import { Collapse} from 'reactstrap';
import useSWR from 'swr';
import { FaBell } from 'react-icons/fa';


// const APPLICATION_API = "http://127.0.0.1:5559";
const APPLICATION_API = "https://gtdo2np6f2.execute-api.us-east-1.amazonaws.com/dev";


const Notification = props => {
    const ticket = props.ticket;

    const fetcher = (url) => fetch(url, {
        method: 'GET',
        headers: { 
                authorization: 'Bearer ' + props.token,
            }
    }).then((res) => res.json())

    const { data, error } = useSWR(APPLICATION_API+`/notifications?open=${false}`, fetcher)
    console.log("notification data: ",data)
	return (
        <React.Fragment>

            <a className="nav-link px-1 profile-header-links profile-notification">
                <FaBell size="2em" />
                {data && data.data?<span className="badge">{data.data.length}</span>:""}
            </a>

        </React.Fragment>
    )
}

export default Notification;

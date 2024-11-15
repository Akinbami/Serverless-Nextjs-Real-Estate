import React,  {useState, useEffect, useContext} from 'react';
import Link from 'next/link';
import Image from "next/image";
import useSWR from 'swr';
import { Collapse, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const APPLICATION_API = "http://127.0.0.1:5559";
// const APPLICATION_API = "https://gtdo2np6f2.execute-api.us-east-1.amazonaws.com/dev";


const RoomChecklist = props => {
    const [collapsed, setCollapsed] = useState(true);
    const [processingChecklist, setProcessingChecklist] = useState(null);
    const [checklist, setChecklist] = useState({})

    const fetcher = (url) => fetch(url, {
        method: 'GET',
        headers: { 
                authorization: 'Bearer ' + props.token,
            }
    }).then((res) => res.json())

    let { data, error } = useSWR(APPLICATION_API+`/users/checklist`, fetcher)

    if (!data){
    return (<div className="room-checklist-card mx-auto py-3 mt-5">
                <div className="room-checklist-card-inner">
                    <p className="room-checklist-header mb-0"><img src="/img/room_check.png" alt="" /><span className="px-2">Room Checklist</span></p>
                    <hr className="mt-0 mb-4" />
                    <p className="room-checklist-subheader mb-0">To do</p>
                    <hr className="mt-0" />
                    <div className="text-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </div>
            </div>
            )
    }

    if (!data.data){
        return (<div className="room-checklist-card mx-auto py-3 mt-5">
                    <div className="room-checklist-card-inner">
                        <p className="room-checklist-header mb-0"><img src="/img/room_check.png" alt="" /><span className="px-2">Room Checklist</span></p>
                        <hr className="mt-0 mb-4" />
                        <p className="room-checklist-subheader mb-0">To do</p>
                        <hr className="mt-0" />
                        <p className="text-center">
                            No checklist for you yet!!!
                        </p>
                    </div>
                </div>
                )
        }
    


    const handleChecklist =(id, key)=>{
        setProcessingChecklist(key)
        const req_data = {
            id: id,
            key: key,
        }
        fetch(APPLICATION_API+`/users/checklist`, {
            method: 'PUT',
            headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                  authorization: 'Bearer ' + props.token,
            }, 
            body: JSON.stringify(req_data)
            }).then(response =>{
              return response.json()
            })
            .then(res =>{
              console.log("response data",res);
            //   setIsLoading(false)
              if(res.error){
              //   setsubscriptionSuccess(data.data)
              }else{
                  setChecklist(res.data);
                  console.log(res);
                //   data.data = res.data;
              }
            })
            .catch(error =>{
              console.log(error)
              // setPhoneError("Failed")
            })
    
    }
    
	return (
    <React.Fragment>
        <div className="room-checklist-card mx-auto py-3 mt-5">
            <div className="room-checklist-card-inner">
                <p className="room-checklist-header mb-0"><img src="/img/room_check.png" alt="" /><span className="px-2">Room Checklist</span></p>
                <hr className="mt-0 mb-4" />
                <p className="room-checklist-subheader mb-0">To do</p>
                <hr className="mt-0" />
                <div className="room-checklist">
                    {checklist.checkedin==true || data.data.checkedin?"":<div className="d-flex bd-highlight">
                        <div className="p-2 bd-highlight">
                            {processingChecklist==1?<div className="spinner-grow spinner-grow-sm" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>:
                            <p className="room-checklist-bullet btn mb-0" onClick={e=>handleChecklist(data.data._id, 1)}></p>}
                        </div>
                        <div className="p-2 flex-grow-1 bd-highlight">
                            <p className="room-checklist-text">
                                Checked in to my Room/Flat
                            </p>
                        </div>
                    </div>}
                    {checklist.inspect==true || data.data.inspect?"":
                    <div className="d-flex bd-highlight">
                        <div className="p-2 bd-highlight">
                        {processingChecklist==2?<div className="spinner-grow spinner-grow-sm" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>:
                            <p className="room-checklist-bullet btn mb-0"  onClick={e=>handleChecklist(data.data._id, 2)}></p>}
                        </div>
                        <div className="p-2 flex-grow-1 bd-highlight">
                            <p className="room-checklist-text">
                            Inspect Room Inventory
                            </p>
                        </div>
                    </div>}
                    {checklist.meet_roommates==true || data.data.meet_roommates?"":
                    <div className="d-flex bd-highlight">
                        <div className="p-2 bd-highlight">
                        {processingChecklist==3?<div className="spinner-grow spinner-grow-sm" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>:
                            <p className="room-checklist-bullet btn mb-0" onClick={e=>handleChecklist(data.data._id, 3)}></p>}
                        </div>
                        <div className="p-2 flex-grow-1 bd-highlight">
                            <p className="room-checklist-text">
                            Meet New Roommates
                            </p>
                        </div>
                    </div>}
                    {checklist.settledin==true || data.data.settledin?"":
                    <div className="d-flex bd-highlight">
                        <div className="p-2 bd-highlight">
                        {processingChecklist==4?<div className="spinner-grow spinner-grow-sm" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>:
                            <p className="room-checklist-bullet btn mb-0" onClick={e=>handleChecklist(data.data._id, 4)}></p>}
                        </div>
                        <div className="p-2 flex-grow-1 bd-highlight">
                            <p className="room-checklist-text">
                            Settle In
                            </p>
                        </div>
                    </div>}

                    {checklist.get_room_key==true || data.data.get_room_key?"":
                    <div className="d-flex bd-highlight">
                        <div className="p-2 bd-highlight">
                        {processingChecklist==5?<div className="spinner-grow spinner-grow-sm" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>:
                            <p className="room-checklist-bullet btn mb-0" onClick={e=>handleChecklist(data.data._id, 5)}></p>}
                        </div>
                        <div className="p-2 flex-grow-1 bd-highlight">
                            <p className="room-checklist-text">
                            Get room key
                            </p>
                        </div>
                    </div>}
                </div>

                <p className="room-checklist-subheader mb-0">Done</p>
                <hr className="mt-0" />
                {checklist.checkedin==true || data.data.checkedin?<div className="d-flex bd-highlight">
                    <div className="p-2 bd-highlight">
                        <p className="room-checklist-bullet room-checklist-bullet-deactivate mb-0"><img src="/img/checklist-checked.png" width="70%" alt="" /></p>
                    </div>
                    <div className="p-2 flex-grow-1 bd-highlight">
                        <p className="room-checklist-text">
                            Checked in to my Room/Flat
                        </p>
                    </div>
                </div>:""}
                {checklist.inspect==true || data.data.inspect?
                <div className="d-flex bd-highlight">
                    <div className="p-2 bd-highlight">
                        <p className="room-checklist-bullet room-checklist-bullet-deactivate mb-0"><img src="/img/checklist-checked.png" width="70%" alt="" /></p>
                    </div>
                    <div className="p-2 flex-grow-1 bd-highlight">
                        <p className="room-checklist-text">
                        Inspect Room Inventory
                        </p>
                    </div>
                </div>:""}
                {checklist.meet_roommates==true || data.data.meet_roommates?
                <div className="d-flex bd-highlight">
                    <div className="p-2 bd-highlight">
                        <p className="room-checklist-bullet room-checklist-bullet-deactivate mb-0"><img src="/img/checklist-checked.png" width="70%" alt="" /></p>
                    </div>
                    <div className="p-2 flex-grow-1 bd-highlight">
                        <p className="room-checklist-text">
                        Meet New Roommates
                        </p>
                    </div>
                </div>:""}
                {checklist.settledin==true || data.data.settledin?
                <div className="d-flex bd-highlight">
                    <div className="p-2 bd-highlight">
                        <p className="room-checklist-bullet room-checklist-bullet-deactivate mb-0"><img src="/img/checklist-checked.png" width="70%" alt="" /></p>
                    </div>
                    <div className="p-2 flex-grow-1 bd-highlight">
                        <p className="room-checklist-text">
                        Settle In
                        </p>
                    </div>
                </div>:""}

                {checklist.get_room_key==true || data.data.get_room_key?
                <div className="d-flex bd-highlight">
                    <div className="p-2 bd-highlight">
                        <p className="room-checklist-bullet room-checklist-bullet-deactivate mb-0"><img src="/img/checklist-checked.png" width="70%" alt="" /></p>
                    </div>
                    <div className="p-2 flex-grow-1 bd-highlight">
                        <p className="room-checklist-text">
                        Get room key
                        </p>
                    </div>
                </div>:""}
            </div>
        </div>
  </React.Fragment>
)
}

export default RoomChecklist;
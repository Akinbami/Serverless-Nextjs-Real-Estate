import Head from 'next/head'
import Link from 'next/link'

import Image from 'next/image'
import Layout from '../../components/Layout'
import { useRouter } from 'next/router';
import { useState } from 'react';

import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import AdminsTable from '../../components/AdminsTable';
import Sidebar from '../../components/Sidbar';
import { Collapse, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


TimeAgo.addLocale(en)
const timeAgo = new TimeAgo('en-US')

// const APPLICATION_API = "http://127.0.0.1:5559";
const APPLICATION_API = "https://gtdo2np6f2.execute-api.us-east-1.amazonaws.com/dev";

function Admins(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const [roomModal, setRoomModal] = useState(false);

    const router = useRouter()
    const toggleRoom = () => setRoomModal(!roomModal);

    const token = props.token;

    const handleSubmit = (e) =>{
        e.preventDefault();
        setIsLoading(true);


        const req_data = {
            "firstname": e.target.firstname.value,
            "lastname": e.target.lastname.value,
            // "role": e.target.role.value,
            "email": e.target.email.value,
            "password": e.target.password.value,
        }
        // save to backend
        fetch(APPLICATION_API+ `/admins`, {
            method: 'POST',
            headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    "authorization": 'Bearer ' + token
            }, 
            body: JSON.stringify(req_data)
        })
        .then(response => response.json())
        .then(data =>{
            console.log(data);
            setIsLoading(false);
            if(data.error){
                setIsLoading(false);
                setErrorMessage(data.message)
            }else{
                setIsLoading(false)
                setSuccessMessage(data.message)
                router.reload(window.location.pathname)
            }
        })
        .catch(error =>{
            setIsLoading(false)
            setErrorMessage(error.message)
        }) 
            
    }

    
    
    const admins = props.admins.data;
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
                    <div className="d-flex justify-content-between">
                        <p className="admin-dashboard-content-header">Administration</p>
                        <p>
                            <button type="button" onClick={toggleRoom} className="btn btn-primary btn-add-room"  data-bs-toggle="modal" data-bs-target="#exampleModal"><img src="/img/PlusCircle.png" width="20" /> <span className="px-1">Add Admin</span>   </button>
                            <Modal isOpen={roomModal} toggle={toggleRoom} centered={true}>

                                <div className="modal-dialog m-0">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <p className="modal-title" id="exampleModalLabel">Add Admin</p>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={toggleRoom}></button>
                                        </div>
                                        <div className="modal-body">
                                            {successMessage?<h3 className="w-75 mx-auto">{successMessage}</h3>:
                                            <form onSubmit={handleSubmit}>
                                            <div className="mb-3">
                                                <label for="firstname" className="form-label login-form-label admin-form-title">First Name</label>
                                                <input type="text" className="form-control" id="firstname" aria-describedby="phoneHelp" name="firstname" />
                                            </div>
                                            <div className="mb-3">
                                                <label for="lastname" className="form-label login-form-label admin-form-title">Last Name</label>
                                                <input type="text" className="form-control" id="lastname" aria-describedby="phoneHelp" name="lastname" />
                                            </div>
                                            <div className="mb-3">
                                                <label for="email" className="form-label login-form-label admin-form-title">Email Address</label>
                                                <input type="text" className="form-control" id="email" aria-describedby="phoneHelp" name="email" />
                                            </div>
                                            {/* <div className="mb-3">
                                                <label for="roomtype" className="form-label login-form-label admin-form-title">Role</label>
                                                <select className="form-select" aria-label="Default select example" name="roomtype">
                                                    <option selected>--select--</option>
                                                    <option value="1">Admin</option>
                                                    <option value="2">Super Admin</option>
                                                </select>
                                            </div> */}
                                            <div className="mb-3">
                                                <label for="password" className="form-label login-form-label admin-form-title">Password</label>
                                                <input type="password" className="form-control" id="password" aria-describedby="phoneHelp" name="password" />
                                            </div>


                                            {/* <div className="mb-3">
                                                <label for="specialty" className="form-label login-form-label admin-form-title">Upload Profile Picture</label>
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-shrink-0">
                                                        <div className="admin-img-upload p-4">
                                                            <img className="" src="/img/Plus.png" alt="admin plus" />
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <p className="text-muted">Maximum size allowed: <br />100kb </p>
                                                    </div>
                                                </div>
                                            </div> */}

                                            {errorMessage?<p className="text-danger">{errorMessage}</p>:""}

                                            <div className="mb-3 text-center">
                                                {isLoading?<button type="submit" className="btn btn-primary btn-lg btn-register mt-4" disabled>Loading...</button>:<button type="submit" className="btn btn-primary btn-lg btn-register mt-4">Continue</button>}
                                                
                                            </div>
                                            
                                        </form>}
                                            
                                        </div>
                                    </div>
                                </div>
                            </Modal>
                        </p>
                    </div>
                    {/* <p className="recent-transaction-header">All Admins</p> */}
                    <AdminsTable admins={admins} token={token} />
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
    const api_res = await fetch(APPLICATION_API+`/admins`, {
        method: 'GET',
        headers:
            { authorization: 'Bearer ' + token }
    })
    
    // Call an external API endpoint to get posts
    const data = await api_res.json()
    console.log("admins",data)

    if (data.error) {
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
        admins: data,
        token,
      },
    }
}

export default  Admins;
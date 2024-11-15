import Head from 'next/head'
import Link from 'next/link'

import Image from 'next/image'
import Layout from '../../components/Layout'
import { useRouter } from 'next/router';
import { useState } from 'react';

import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import ApplicationsTable from '../../components/ApplicationsTable';
import Sidebar from '../../components/Sidbar';

TimeAgo.addLocale(en)
const timeAgo = new TimeAgo('en-US')

// const APPLICATION_API = "http://127.0.0.1:5559";
const APPLICATION_API = "https://gtdo2np6f2.execute-api.us-east-1.amazonaws.com/dev";

function Occupants(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);


    const router = useRouter()

    const handleSubmit = (e) =>{
        e.preventDefault();
        setIsLoading(true);

        const token = props.token;

        const req_data = {
            "type": e.target.roomtype.value,
            "number": e.target.number.value,
            "floor": e.target.floor.value,
            "specialty": e.target.specialty.value
            
        }
        // save to backend
        fetch(APPLICATION_API+ `/rooms`, {
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
            }
        })
        .catch(error =>{
            setIsLoading(false)
            setErrorMessage(error.message)
        }) 
            
    }

    
    
    const applications = props.applications.data.docs;
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
                        <p className="admin-dashboard-content-header">Occupants</p>
                        {/* <p>
                            <button type="button" className="btn btn-primary btn-add-room"  data-bs-toggle="modal" data-bs-target="#exampleModal"><img src="/img/PlusCircle.png" width="20" /> <span className="px-1">Add room</span>   </button>
                            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <p className="modal-title" id="exampleModalLabel">Add Room</p>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            {successMessage?<h3 className="w-75 mx-auto">{successMessage}</h3>:
                                            <form onSubmit={handleSubmit}>
                                            <div className="mb-3">
                                                <label for="number" className="form-label login-form-label">Room Number*</label>
                                                <input type="text" className="form-control" id="number" aria-describedby="phoneHelp" name="number" />
                                            </div>
                                            <div className="mb-3">
                                                <label for="roomtype" className="form-label login-form-label">Room Type*</label>
                                                <select className="form-select" aria-label="Default select example" name="roomtype">
                                                    <option selected>--select--</option>
                                                    <option value="1 Man Room">1 Man Room</option>
                                                    <option value="2 Man Room">2 Man Room</option>
                                                    <option value="4 Man Room">4 Man Room</option>
                                                </select>
                                            </div>

                                            <div className="mb-3">
                                                <label for="floor" className="form-label login-form-label">Floor*</label>
                                                <select className="form-select" aria-label="Default select example" name="floor">
                                                    <option selected>--select--</option>
                                                    <option value="1st Floor">1st Floor</option>
                                                    <option value="2nd Floor">2nd Floor</option>
                                                    <option value="3rd Floor">3rd Floor</option>
                                                </select>
                                            </div>


                                            <div className="mb-3">
                                                <label for="specialty" className="form-label login-form-label">Specialty*</label>
                                                <select className="form-select" aria-label="Default select example" name="specialty">
                                                    <option selected>--select--</option>
                                                    <option value={true}>YES</option>
                                                    <option value={false}>NO</option>
                                                </select>
                                            </div>

                                            {errorMessage?<p className="text-danger">{errorMessage}</p>:""}

                                            <div className="mb-3 text-center">
                                                {isLoading?<button type="submit" className="btn btn-primary btn-lg btn-register mt-4" disabled>Loading...</button>:<button type="submit" className="btn btn-primary btn-lg btn-register mt-4">Continue</button>}
                                                
                                            </div>
                                            
                                        </form>}
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </p>
                     */}
                    </div>
                    {/* <p className="recent-transaction-header">All Occupants</p> */}
                    <ApplicationsTable applications={applications} />
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
    const api_res = await fetch(APPLICATION_API+`/applications`, {
        method: 'GET',
        headers:
            { authorization: 'Bearer ' + token }
    })
    
    // Call an external API endpoint to get posts
    const data = await api_res.json()
    console.log("rooms",data)

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
        applications: data,
        token,
      },
    }
}

export default  Occupants;
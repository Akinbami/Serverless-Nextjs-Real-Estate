import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import { connect } from "react-redux";

import Layout from '../components/Layout'
import { setFirstname,
    setLastname,
    setGender,
    setDOB,
    setPhone,
    setAddress,
    setGuarantorName,
    setGuarantorPhone,
    setGuarantorAddress, 
    setUser} from "../redux/actions/main"

// const APPLICATION_API = "http://127.0.0.1:5559";
const APPLICATION_API = "https://gtdo2np6f2.execute-api.us-east-1.amazonaws.com/dev";

function CompleteDetails(props) {
    const [errorMessage,setErrorMessage] = useState(false);
    const [isLoading,setIsLoading] = useState(false);
    const [firstnameState,setFirstnameState] = useState("");
    const [lastnameState,setLastnameState] = useState("");
    const [dobState,setDOBState] = useState("");
    const [genderState,setGenderState] = useState("");
    const [phoneState,setPhoneState] = useState("");
    const [addressState,setAddressState] = useState("");
    const [guarantorNameState,setGuarantorNameState] = useState("");
    const [guarantorPhoneState,setGuarantorPhoneState] = useState("");
    const [guarantorAddressState,setGuarantorAddressState] = useState("");


    const { setFirstname,
        setLastname,
        setGender,
        setDOB,
        setPhone,
        setAddress,
        setGuarantorName,
        setGuarantorPhone,
        setGuarantorAddress,
        setUser} = props;

    const {user} = props.userInfo;
    
    
    useEffect(() => {
        // check if user is logged in
        console.log("user in effect ", user)
        if(!user ){
            Router.push("/")
        }
        // Always do navigations after the first render
        }, [])

    const handleSubmit = (e) =>{
        e.preventDefault();
        setIsLoading(true)
        if((firstnameState && (firstnameState== guarantorNameState)) || (lastnameState && (lastnameState==guarantorNameState)) ) {
            setGuarantorNameState(firstnameState||lastnameState)
        }else if(phoneState && phoneState == guarantorPhoneState){
            setGuarantorPhoneState(phoneState)
        }else{
            console.log("continue")
            setFirstname(firstnameState);
            setLastname(lastnameState);
            setGender(genderState);
            setDOB(dobState);
            setPhone(phoneState);
            setAddress(addressState);
            setGuarantorName(guarantorNameState);
            setGuarantorPhone(guarantorPhoneState);
            setGuarantorAddress(guarantorAddressState);

            const req_data = {
                "firstname": firstnameState||props.userInfo.firstname,
                "lastname": lastnameState||props.userInfo.lastname,
                "gender": genderState||props.userInfo.gender,
                "dob": dobState||props.userInfo.dob,
                "phone": phoneState||props.userInfo.phone,
                "address": addressState||props.userInfo.address,
                "guarantor": {
                    "name": guarantorNameState||props.userInfo.guarantor_name,
                    "phone": guarantorPhoneState||props.userInfo.guarantor_phone,
                    "address": guarantorAddressState||props.userInfo.guarantor_address,
                }
            }
            // save to backend

            console.log("req data :", req_data)
            // let BACKEND_API;
            // if(user.profile){
            //     BACKEND_API = APPLICATION_API+ `/profiles/${user._id}`
            // }else{
            //     BACKEND_API = APPLICATION_API+ `/users/${user._id}/profile`
            // }
            fetch(APPLICATION_API+ `/users/${user._id}/profile`, {
                method: 'POST',
                headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json'
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
                    setUser(data.data)
                    setIsLoading(false)
                    // Router.push("/upload-picture")
                    Router.push("/provide-report")
                }
            })
            .catch(error =>{
                setIsLoading(false)
                setErrorMessage(error.message)
            }) 
            
        }
    }

    console.log("this is the user ",user)

  return (<>{user?<Layout>
    <header className="landing-header mx-auto bg-transparent py-2">
        <ul className="nav justify-content-center">

            <li className="nav-item">
                <Link href="/">
                    <a className="landing-logo">
                        <Image src="/img/logo.png" alt="Picture of the author" width={"102.86px"} height={"50px"} />
                    </a>
                </Link>
            </li>

            
        </ul>
    </header>

    <div className="progress-container">
        <div className="container">
            <div className="d-flex bd-highlight text-center">
                <div className="p-2  bd-highlight progress-start-text">Start</div>
                <div className="p-2 flex-grow-1 bd-highlight">
                    <div className="register-progress">
                        <div className="progress">
                            <div className="zero primary-color"></div>
                            <div className="one primary-color"></div>
                            <div className="two no-color"></div>
                            <div className="three no-color"></div>
                            <div className="four no-color"></div>
                            <div className="five no-color"></div>
                            <div className="progress-bar progress-bar-warning" style={{width: "20%"}}></div>
                        </div>
                    </div>
                </div>
                <div className="p-2 bd-highlight progress-start-text">20%</div>
            </div>
        </div>

    </div>
   
    <div className="registration-banner">
        <div className="registration-banner-content">
            <p className="banner-header mx-auto">Complete your details</p>
            <p className="banner-text mx-auto">Please enter your details below to continue</p>
        </div>
    </div>

    <div className="registration-card mx-auto px-2">
        <div className="registration-card-inner mx-auto">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label for="firstname" className="form-label login-form-label">First Name</label>
                    <input type="text" className="form-control" id="firstname" defaultValue={user.profile?user.profile.firstname:user.firstname} aria-describedby="firstnameHelp" onChange={e=>setFirstnameState(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label for="lastname" className="form-label login-form-label">Last Name</label>
                    <input type="text" className="form-control" id="lastname" defaultValue={user.profile?user.profile.lastname:user.lastname}  aria-describedby="lastnameHelp" onChange={e=>setLastnameState(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label for="gender" className="form-label login-form-label">Gender</label>
                    <select className="form-select" aria-label="Default select example" defaultValue={user.profile?user.profile.gender:user.gender} onChange={e=>setGenderState(e.target.value)}>
                        <option selected>--select--</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="dob" className="form-label login-form-label">Date of Birth</label>
                    <input type="date" className="form-control" id="dob" aria-describedby="dobHelp" defaultValue={user.profile?user.profile.dob:user.dob} onChange={e=>setDOBState(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label for="phone" className="form-label login-form-label">Phone Number</label>
                    <input type="text" className="form-control" id="phone" aria-describedby="phoneHelp" defaultValue={user.profile?user.profile.phone:user.phone} onChange={e=>setPhoneState(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label for="address" className="form-label login-form-label">Residential Address</label>
                    <textarea className="form-control" id="address" rows="4" defaultValue={user.profile?user.profile.address:user.address} onChange={e=>setAddressState(e.target.value)}></textarea>
                </div>

                <p className="guarantor-header pt-5">Parent/Guarantor Details</p>
                <div className="mb-3">
                    <label for="name" className="form-label login-form-label">Name</label>
                    <input type="text" className="form-control" id="name" aria-describedby="nameHelp" defaultValue={user.profile?user.profile.guarantor.name:user.guarantor_name} onChange={e=>setGuarantorNameState(e.target.value)}/>
                    {firstnameState && (firstnameState==guarantorNameState)||lastnameState&&(lastnameState==guarantorNameState)?<small className="text-danger">you cant use the same Name with your guardian</small>:""}
                </div>
                <div className="mb-3">
                    <label for="guarantor_phone" className="form-label login-form-label">Phone Number</label>
                    <input type="tel" className="form-control" id="guarantor_phone" aria-describedby="guarantor_phoneHelp" defaultValue={user.profile?user.profile.guarantor.phone:user.guarantor_phone} onChange={e=>setGuarantorPhoneState(e.target.value)} />
                    {phoneState && (phoneState==guarantorPhoneState)?<small className="text-danger">you cant use the same phone number with your guardian</small>:""}
                </div>

                <div className="mb-3">
                    <label for="address" className="form-label login-form-label">Address</label>
                    <textarea className="form-control" id="address" rows="4" defaultValue={user.profile?user.profile.guarantor.address:user.guarantor_address} onChange={e=>setGuarantorAddressState(e.target.value)}></textarea>
                </div>

                 <p className="text-danger">{errorMessage}</p>

                <div className="mb-3 text-center">
                    {isLoading?<button type="submit" className="btn btn-primary btn-lg btn-register mt-4" disabled>Loading...</button>:<button type="submit" className="btn btn-primary btn-lg btn-register mt-4">Continue</button>}
                    
                </div>
            </form>
        </div>
    </div>

</Layout>:""}
    </>
  )
}


const mapStateToProps = state => ({
    userInfo: state.main
  })
  
const mapDispatchToProps = {
    setFirstname: setFirstname,
    setLastname: setLastname,
    setGender: setGender,
    setDOB: setDOB,
    setPhone: setPhone,
    setAddress: setAddress,
    setGuarantorName: setGuarantorName,
    setGuarantorPhone: setGuarantorPhone,
    setGuarantorAddress: setGuarantorAddress,
    setUser: setUser
}

export default connect(mapStateToProps, mapDispatchToProps)(CompleteDetails)



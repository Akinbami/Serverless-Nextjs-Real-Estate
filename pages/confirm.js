import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { usePaystackPayment } from 'react-paystack';
import { connect } from "react-redux";
import numberFormatter from "number-formatter";

import axios from 'axios';

import Layout from '../components/Layout'
import { setAmountPaid, setPaid, setPaymentReference, setRoom } from '../redux/actions/main';

function Confirm(props) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState(false)
    const [paidState, setPaidState] = useState(false)
    const [reference, setReference] = useState(false)
    const [acceptTerms, setAcceptTerms] = useState(false)
    const [load, setLoad] = useState(false)



    // setErrorMessage(error.message)
    // const APPLICATION_API = "http://127.0.0.1:5559";
    const APPLICATION_API = "https://gtdo2np6f2.execute-api.us-east-1.amazonaws.com/dev";


    const { firstname,gender,
    lastname, email, phone,
    dob, address, password,
    room_type, room_type_year, matric,
    picture, health_condition, report,
    select_roommate, roommate_name, guarantor_name,
    guarantor_phone, guarantor_address,user} = props.userInfo;

    


    const {setPaid,
        setAmountPaid,
        setPaymentReference,setRoom} = props;


    console.log("user info ", props.userInfo)

    
    useEffect(() => {
        // check if user is logged in
        if(!user){
            Router.push("/")
        }else{
            setLoad(true)
        }
        // Always do navigations after the first render
        }, [])
    
    const room_type_price = room_type=="1 Man"?850000:room_type=="2 Man"?750000:140000

    const total = ((parseInt(room_type_price) + 60000) * parseInt(room_type_year)) *100;
    console.log("room_type", room_type, room_type_price, room_type_year)

    const config = {
        reference: (new Date()).getTime(),
        email: email, 
        amount: total,
        publicKey: 'pk_test_b6dbfad5464db9cd4d7b26eea552fc537fa0a83d',
    };

    const initializePayment = usePaystackPayment(config);
    
    
    // you can call this function anything
    const onSuccess = (data) => {
      // Implementation for whatever you want to do with reference and after success call.
      setPaidState(true)
      setReference(data.reference)
      
    };
  
    // you can call this function anything
    const onClose = () => {
      // implementation for  whatever you want to do when the Paystack dialog closed.
      console.log('closed')
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        setIsLoading(true)
        console.log(APPLICATION_API);
        //   create application
        const req_data = {
            room_type, room_type_year,
            health_condition, report,
            select_roommate, roommate_name,
            paid: true, 
            payment_reference: reference, 
            amount: total
        }

        axios.post(APPLICATION_API+ `/users/${props.userInfo.user._id}/application`, req_data, { // receive two parameter endpoint url ,form data 
        })
        .then(res => { // then print response status
            console.log("application response",res)
            setIsLoading(false);
            if(res.data.error){
                setIsLoading(false);
                setErrorMessage(res.data.message)
            }else{
                setIsLoading(false)
                setPaid(true);
                setAmountPaid(total/100);
                setPaymentReference(reference)
                setRoom(res.data.data.room)
                router.push("/payment-confirmed")
            }
        })
        .catch(err=>{
            console.log("error", err)
            setIsLoading(false)
        })
    }
    console.log("terms",acceptTerms)
  return (<>{load?<Layout>
    <header className="landing-header mx-auto bg-transparent py-2">
        <ul className="nav justify-content-center">

            <li className="nav-item">
                <Link href="/">
                    <a className="landing-logo">
                        <Image src="/img/logo.png" alt="Picture of the author" width={"102px"} height={"50px"} />
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
                            <div className="two primary-color"></div>
                            <div className="three primary-color"></div>
                            <div className="four primary-color"></div>
                            <div className="five no-color"></div>
                            <div className="progress-bar progress-bar-warning" style={{width: "87%"}}></div>
                        </div>
                    </div>
                </div>
                <div className="p-2 bd-highlight progress-start-text">80%</div>
            </div>
        </div>

    </div>
    

    <div className="registration-banner">
        <div className="registration-banner-content">
            <p className="banner-header mx-auto">Confirm your information</p>
            <p className="banner-text mx-auto">Verify that the information you entered
                is correct before you proceed to payment</p>
        </div>
    </div>

    <div className="registration-card mx-auto mb-5 px-2">
        <div className="registration-card-inner mx-auto">
            <div className="confirm-section">
                <div className="d-flex justify-content-between">
                    <p className="confirm-header-right">Your details</p>
                    <Link href="/complete-details">
                        <a className="confirm-header-left"><span className="pe-1"><img src="/img/edit-icon.png" alt="edit icon" /></span>Edit</a>
                    </Link>
                </div>
                <hr className="mt-0" />
                <div className="d-flex justify-content-between">
                    <p className="confirm-text-left">Your name</p>
                    <p className="confirm-text-right text-capitalize">{firstname||user.profile.firstname} {lastname||user.profile.lastname}</p>
                </div>
                <div className="d-flex justify-content-between">
                    <p className="confirm-text-left">Matric Number</p>
                    <p className="confirm-text-right">{matric}</p>
                </div>
                <div className="d-flex justify-content-between">
                    <p className="confirm-text-left">Gender</p>
                    <p className="confirm-text-right">{gender||user.profile.gender}</p>
                </div>
                <div className="d-flex justify-content-between">
                    <p className="confirm-text-left">Date of Birth</p>
                    <p className="confirm-text-right">{dob||user.profile.dob}</p>
                </div>
                <div className="d-flex justify-content-between">
                    <p className="confirm-text-left">Phone Number</p>
                    <p className="confirm-text-right">{phone||user.profile.phone}</p>
                </div>
                <div className="d-flex justify-content-between">
                    <p className="confirm-text-left">Email Address</p>
                    <p className="confirm-text-right">{email}</p>
                </div>
                <div className="d-flex justify-content-between">
                    <p className="confirm-text-left">Contact Address</p>
                    <p className="confirm-text-right">{address||user.profile.address}.</p>
                </div>
                

            </div>

            <div className="confirm-section">
                <div className="d-flex justify-content-between">
                    <p className="confirm-header-right">Parent/Guardian</p>
                    <Link href="/complete-details">
                        <a className="confirm-header-left">
                            <span className="pe-1"><img src="/img/edit-icon.png" alt="edit icon" /></span>edit
                        </a>
                    </Link>
                </div>
                <hr className="mt-0" />
                <div className="d-flex justify-content-between">
                    <p className="confirm-text-left">Name</p>
                    <p className="confirm-text-right">{guarantor_name||user.profile.guarantor.name}</p>
                </div>
                <div className="d-flex justify-content-between">
                    <p className="confirm-text-left">Phone Number</p>
                    <p className="confirm-text-right">{guarantor_phone||user.profile.guarantor.phone}</p>
                </div>
                <div className="d-flex justify-content-between">
                    <p className="confirm-text-left">Address</p>
                    <p className="confirm-text-right">{guarantor_address||user.profile.guarantor.address}</p>
                </div>
                

            </div>

            <div className="confirm-section">
                <div className="d-flex justify-content-between">
                    <p className="confirm-header-right">Room Information</p>
                    <Link href="/provide-report">
                        <a className="confirm-header-left">
                            <span className="pe-1"><img src="/img/edit-icon.png" alt="edit icon" /></span>edit
                        </a>
                    </Link>
                </div>
                <hr className="mt-0" />
                <div className="d-flex justify-content-between">
                    <p className="confirm-text-left">Room Type</p>
                    <p className="confirm-text-right">{room_type}</p>
                </div>
                <div className="d-flex justify-content-between">
                    <p className="confirm-text-left">Duration</p>
                    <p className="confirm-text-right">{room_type_year}</p>
                </div>
                <div className="d-flex justify-content-between">
                    <p className="confirm-text-left">Any Health Condition?</p>
                    <p className="confirm-text-right">{health_condition?"YES":"NO"}</p>
                </div>
                {health_condition?
                    <div className="d-flex justify-content-between">
                        <p className="confirm-text-left">Health Condition</p>
                        <p className="confirm-text-right">{report}</p>
                    </div>:""}
                
                <div className="d-flex justify-content-between">
                    <p className="confirm-text-left">Want to Select Your Roommate?</p>
                    <p className="confirm-text-right">{select_roommate?"YES":"NO"}</p>
                </div>
                {select_roommate?
                    <div className="d-flex justify-content-between">
                        <p className="confirm-text-left">Roommate Name</p>
                        <p className="confirm-text-right">{roommate_name}</p>
                    </div>:""}
                

            </div>
            
            <div className="d-flex justify-content-between">
                <p className="confirm-header-right text-dark">License Fee</p>
                <p className="confirm-header-right">₦{numberFormatter( "#,##0.####", parseInt(room_type_price))}/year</p>
            </div>
            <div className="d-flex justify-content-between">
                <p className="confirm-header-right text-dark">Caution Fee</p>
                <p className="confirm-header-right">₦60,000/year</p>
            </div>

            <div className="text-center mt-4">
                <p className="confirm-total-header mb-0">TOTAL COST</p>
                <p className="confirm-total-text">₦{numberFormatter( "#,##0.####", parseInt(room_type_price)  + 60000 )}<span className="confirm-header-left">/year</span></p>
            </div>

            <div className="form-check">
                <input className="form-check-input" type="checkbox" onChange={e=>setAcceptTerms(e.target.checked)} id="terms" />
                <label className="form-check-label confirm-terms-text" htmlFor="flexCheckDefault">
                                        I agree that the information provided is accurate and agree to
                    the terms and conditions of  The Pod Living
                </label>
            </div>
            {errorMessage?<p className="text-danger">{errorMessage}</p>:""}
            {!acceptTerms?
            <div className="mb-3 text-center">
                <button className="btn btn-primary btn-lg btn-register mt-4 px-0" disabled>Proceed to Payment</button>
            </div>:
            <div className="mb-3 text-center">
                {paidState? <button className="btn btn-primary btn-lg btn-register mt-4 px-0" onClick={handleSubmit}>Payment Made, Continue</button>:isLoading?<button className="btn btn-primary btn-lg btn-register mt-4 px-0" disabled>Processing...</button>:<button className="btn btn-primary btn-lg btn-register mt-4 px-0" onClick={() => {
                        initializePayment(onSuccess, onClose)
                    }}>Proceed to Payment</button>}
                
            </div>
            }
            
            
            
        </div>
    </div>

</Layout>:""
}</>
    )
}

const mapStateToProps = state => ({
    userInfo: state.main
  })
  
const mapDispatchToProps = {
    setPaid: setPaid,
    setAmountPaid: setAmountPaid,
    setPaymentReference: setPaymentReference,
    setRoom: setRoom,
}

export default connect(mapStateToProps, mapDispatchToProps)(Confirm)
  
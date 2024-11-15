import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import { connect } from "react-redux";
import numberFormatter from "number-formatter";


import Layout from '../components/Layout'
import { setRoom } from '../redux/actions/main';

function PaymentConfirmation(props) {
    const [roomState, setRoomState] = useState({});
    const {paid, amount_paid, payment_reference, room} = props.userInfo;
    // const APPLICATION_API = "http://127.0.0.1:5559";
    const APPLICATION_API = "https://gtdo2np6f2.execute-api.us-east-1.amazonaws.com/dev";


    useEffect(() => {
        // check if user is logged in
        if(!payment_reference||!paid||!amount_paid||!room){

            Router.push("/")
        }
        fetch(APPLICATION_API+ `/rooms/${room}`)
        .then(response => response.json())
        .then(data =>{
            console.log(data);
            if(data.error){
                Router.push("/")
            }else{
                setRoomState(data.data)
            }
        })
        .catch(error =>{
            setIsLoading(false)
            setErrorMessage(error.message)
        })   
        // Always do navigations after the first render
        }, [])

    
    return (
        <Layout>
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
                                    <div className="five primary-color"></div>
                                    <div className="progress-bar progress-bar-warning" style={{width: "100%"}}></div>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 bd-highlight progress-start-text">100%</div>
                    </div>
                </div>
    
            </div>
            
    
            <div className="registration-banner">
                <div className="registration-banner-content">
                    <p className="banner-header mx-auto">Payment Confirmation</p>
                    <p className="banner-text mx-auto">See the status of your recent payment transaction</p>
                </div>
            </div>
    
            <div className="registration-card mx-auto mb-5 px-2">
                <div className="registration-card-inner mx-auto text-center">
                    <p className="payment-card-header">Payment Successful!!!</p>
                    <img src="/img/payment-successful-icon.png" width="70" alt="payment successful" />
                    <p className="payment-successful-text py-2">Your payment of <span style={{color:"#EB6B00"}}>₦{numberFormatter( "#,##0.####", parseInt(amount_paid))}</span>   has been received.</p>
                    <p className="payment-successful-text">Your room number is:<br />
                    <span style={{color:"#EB6B00",fontWeight: "bold"}}>{roomState.number}</span></p>
                    <h6 style={{color:"#EB6B00"}}>Please save this somewhere for reference purpose</h6>
                    {/* <button className="btn btn-light btn-download my-3"><span className="px-1"><img src="/img/download-icon.png" alt="download icon" /></span>Download receipt</button> */}
                    <p className="banner-text text-dark mx-auto py-2">You are only a few steps away from
                        <br />The Student POD experience</p>
    
                    <Link href="/agreement">
                        <a className="btn btn-primary btn-lg btn-register w-75 mt-4">View Tenancy agreement</a>
                    </Link>
                </div>
            </div>
    
        </Layout>
        )
}


const mapStateToProps = state => ({
    userInfo: state.main
  })
  
const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(PaymentConfirmation)
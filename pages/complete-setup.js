import Router from 'next/router';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { useEffect } from 'react';
import { connect } from "react-redux";

import Layout from '../components/Layout'

function CompleteSetup(props) {

    useEffect(() => {
        // check if user is logged in
        // if(!props.userInfo.signed){
        //     Router.push("/agreement")
        // }
        // Always do navigations after the first render
        console.log(props.userInfo)
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
                <p className="banner-header mx-auto">Your account at The POD Living has been successfully set up</p>
            </div>
        </div>

        <div className="registration-card mx-auto mb-5 px-2">
            <div className="registration-card-inner mx-auto text-center">
                <p className="payment-card-header">Setup Complete!</p>
                <img src="/img/drum.png" width="250" alt="setup complete" />
                <p className="payment-successful-text w-50 mx-auto py-2">We’re looking forward to meeting you
                    at The Student POD</p>

                <Link href="https://www.thepodliving.com/">
                    <a className="btn btn-primary btn-lg btn-register mt-4">Go Home<span className="px-2"><img src="/img/arrow-right-light.png" width="10" alt="arrow right" /></span></a>
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

export default connect(mapStateToProps, mapDispatchToProps)(CompleteSetup)

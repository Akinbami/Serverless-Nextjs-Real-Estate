
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout'
import RegistrationHeader from '../components/RegistrationHeader';
import ReCAPTCHA from "react-google-recaptcha";
import { createRef, useEffect, useState } from 'react';
import { connect } from "react-redux";
import { setEmail, setPassword, setMatric, setUser } from "../redux/actions/main"


import Footer from '../components/Footer';
import Router from 'next/router';

// const APPLICATION_API = "http://127.0.0.1:5559";
const APPLICATION_API = "https://gtdo2np6f2.execute-api.us-east-1.amazonaws.com/dev";



function ValidateRegistration(props) {
    const [activateButton, setActivateButton] = useState(null)
    const [email, setEmailState] = useState(null);
    const [password, setPasswordState] = useState(null);
    const [matric, setMatricState] = useState(null);
    const [isLoading, setIsLoading] = useState(false)

    const [errorMessage,setErrorMessage ] = useState(null);
    const [invalidPassword, setInvalidPassword] = useState (false);

    const { setEmail, setPassword, setMatric, setUser } = props;

    const { room_type,room_type_year} = props.userInfo;

    
    useEffect(() => {
        // check if user is logged in
        if(!room_type || !room_type_year ){
            Router.push("/")
        }
        // Always do navigations after the first render
        }, [])

    // const router = useRouter;
    const handleSubmit = (e) =>{
        e.preventDefault();
        setIsLoading(true)
        console.log(email, password, matric, APPLICATION_API)
        if(!email || !password || !matric) {
            setErrorMessage("Please complete form and try again.")
            setIsLoading(false)
        }else{
            setEmail(email);
            setPassword(password);
            setMatric(matric);
            
            const req_data = {
                "email": email,
                "password": password, 
                "matric": matric
            }
            // save to backend
            fetch(APPLICATION_API+ "/users", {
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
                    console.log(data)
                    if(data.message=="user already exist"){
                        setIsLoading(false);
                        setErrorMessage(data.message)
                    }else{
                        setUser(data.data)
                        Router.push("/complete-details")
                        setIsLoading(false)
                    }
                }
            })
            .catch(error =>{
                setIsLoading(false)
                setErrorMessage(error.message)
            })   
        }
    }
    const recaptchaRef = createRef();
    const onReCAPTCHAChange = (captchaCode) => {
        // If the reCAPTCHA code is null or undefined indicating that
        // the reCAPTCHA was expired then return early
        if(!captchaCode) {
          return;
        }
        setActivateButton(true);
        // Reset the reCAPTCHA so that it can be executed again if user 
        // submits another email.
        recaptchaRef.current.reset();
      }

    const validatePassword =(e)=>{
        e.preventDefault();
        if(e.target.value != password){
            setInvalidPassword(true)
        }else{
            setInvalidPassword(false)
        }
    }
  return (
    <Layout>
        <RegistrationHeader />

        <div className="login-section">
            <div className="row">
                <div className="col-md-8">
                    <div className="login-form-card text-center">
                        <div className="login-form-card-inner mx-auto">
                            <p className="register-header">Start The POD lifestyle</p>
                            <p className="login-instruction py-3 mx-auto">Please set up your portal account below</p>

                            <form onSubmit={handleSubmit}>
                                <div className="text-left">
                                    <div className="mb-3">
                                        <label for="email" className="form-label registration-form-label">Email Address</label>
                                        <input type="email" className="form-control form-control-lg" id="email" aria-describedby="usernameHelp" placeholder="peter.ade@gmail.com"  onChange={e=>setEmailState(e.target.value)} required/>
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleInputPassword1" className="form-label registration-form-label">Create Password</label>
                                        <input type="password" className="form-control form-control-lg" id="exampleInputPassword1" placeholder="**************"  onChange={e=>setPasswordState(e.target.value)} required/>
                                    </div>

                                    <div className="mb-3">
                                        <label for="exampleInputPassword2" className="form-label registration-form-label">Confirm Password</label>
                                        <input type="password" className="form-control form-control-lg" id="exampleInputPassword2" placeholder="**************" onChange={validatePassword} required/>
                                        {invalidPassword?<p className="invalid-password-message text-danger">invalid password</p>:""}
                                    </div>

                                    <div className="mb-3">
                                        <label for="matric" className="form-label registration-form-label">School Matric Number</label>
                                        <input type="text" className="form-control form-control-lg" id="matric" aria-describedby="usernameHelp" placeholder=""   onChange={e=>setMatricState(e.target.value)} required/>
                                    </div>

                                    <ReCAPTCHA
                                            ref={recaptchaRef}
                                            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                                        onChange={onReCAPTCHAChange}
                                        />

                                    <div className="d-flex justify-content-between">
                                        <div className="mb-3 form-check">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                            <label className="form-check-label login-instruction" for="exampleCheck1">I have read and accept the <a href="" className="navbar-text-action-link">Terms of Use </a>&<a href="https://www.thepodliving.com/privacy-policy" target="_blank" className="navbar-text-action-link">Privacy Policy</a> </label>
                                        </div>
                                    </div>
                                </div>
                                {errorMessage?<p className="text-danger">{errorMessage}</p>:""}

                                {!activateButton?<button className="btn btn-light btn-lg btn-deactivate w-100 mt-4" disabled>Continue</button>:isLoading?<button type="submit" className="btn btn-primary btn-lg btn-register w-100 mt-4" disabled>Loading...</button>:<button type="submit" className="btn btn-primary btn-lg btn-register w-100 mt-4">Create an account</button>}

                                <p className="login-instruction-4 text-left">To confirm your room, you will need your credit/debit card or be able to make
                                    a direct bank account transfer for your allocation advance payment. </p>

                            </form>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="apply-room-card ps-2">
                        <div className="d-flex justify-content-start">
                            <p className="mb-0"><img src="/img/Bed.png" width="50" alt="bedroom icon" /></p>
                            <p className="apply-room-text">Manage accomodation</p>
                        </div>
                        
                    </div>
                    <div className="text-center pt-4">
                        <p className="login-instruction-2">Rooms available</p>
                        <div className="row">
                            <div className="col-4">
                                <img src="/img/cutlery.png" width="70" alt="" />
                                <p className="login-instruction-3">One-man</p>
                            </div>
                            <div className="col-4">
                                <img src="/img/parking.png" width="70" alt="" />
                                <p className="login-instruction-3">Two-man</p>
                            </div>
                            <div className="col-4">
                                <img className="room-deactivated" src="/img/parking-2.png" width="70" alt="" />
                                <p className="login-instruction-3">Four-man</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className="register-requirements-header pt-3">Required Registration Documents</p>
                        <p className="register-requirements-text"><span className="pe-1"><img src="/img/req-icon.png" width="15" alt="requirement icon" /></span>School Matric Number</p>
                        <p className="register-requirements-text"><span className="pe-1"><img src="/img/req-icon.png" width="15" alt="requirement icon" /></span>Passport Photograph</p>

                        <p className="register-requirements-text"><span className="pe-1"><img src="/img/req-icon.png" width="15" alt="requirement icon" /></span>Signed Agreement</p>

                    </div>
                    
                </div>
            </div>
        </div>
      <Footer />

    </Layout>
  )
}

const mapStateToProps = state => ({
    userInfo: state.main
  })
  
  const mapDispatchToProps = {
    setEmail: setEmail,
    setPassword: setPassword,
    setMatric: setMatric,
    setUser: setUser
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(ValidateRegistration)
import Head from 'next/head'
import Link from 'next/link'

import Image from 'next/image'
import Layout from '../../components/Layout'
import Router from 'next/router';
import { useState } from 'react';
import { Cookie, useCookie } from 'next-cookie';
import cookie from "js-cookie";


// const nodeFetch = require('node-fetch')
// const fetch = require('fetch-cookie')(nodeFetch)

export default function Login(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    // const router = useRouter()

    console.log("pod token",cookie.get("pod-token"))

	const handleSubmit = (e) =>{
      	e.preventDefault();
	    setIsLoading(true);
        console.log("loging in ...", e.target.email.value,e.target.password.value,)

        // setTimeout(function(){ 
        //      router.push("/admin/dashboard") 
        // }, 3000);

	    fetch("/api/login", {
	          method: 'POST',
	          headers: {
	                'Accept': 'application/json',
	                'Content-Type': 'application/json'
	          }, 
	          body: JSON.stringify({
	               "email": e.target.email.value,
                   "password": e.target.password.value
	             })
	          }).then(response =>{
                return response.json()
              })
	          .then(data =>{
                localStorage.setItem("pod-user",JSON.stringify(data.data))
                console.log("response data",data.success, data.data)
                if(data.data.role==1){
                    Router.push("/admin/dashboard")
                }else{
                    Router.push("/dashboard")
                }
	            // if(data.error){
	            // //   setsubscriptionSuccess(data.data)
                // setErrorMessage(data.message)
                // setIsLoading(false)
	            // }else{
	            //     console.log(data);
                //     localStorage.setItem('user', data.user);
                //     // Set a cookie
                //     cookie.set('pod-token', data.token)
                //     Router.push("/admin/dashboard")
                //     // window.location.href = "/admin/dashboard";
                //     setIsLoading(false)
                //     console.log("after saving")
	            // //   setsubscriptionSuccess("Thanks for subscribing!!! you will get an email soon.")
	            // }
	          })
	          .catch(error =>{
	            setIsLoading(false)
	            console.log(error)
	            // setPhoneError("Failed")
	          })    
      
    }
  return (
    <Layout>
        <div className="row">
            <div className="col-md-6">
                <div className="login-banner">
                </div>
            </div>
            <div className="col-md-6">
                <div className="admin-login-section mx-auto px-2">
                    <header className="landing-header mx-auto bg-transparent py-2">
                        <ul className="nav justify-content-start">

                            <li className="nav-item">
                                <Link href="/">
                                    <a className="landing-logo">
                                        <Image src="/img/logo.png" alt="Picture of the author" width={"102px"} height={"50px"} />
                                    </a>
                                </Link>
                            </li>

                            
                        </ul>
                    </header>

                    <p className="admin-login-header">Log In to your account</p>
                    <p className="admin-login-instruction">Enter your account login details to get access to
                            your admin dashboard</p>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label for="email" className="form-label login-form-label">Email*</label>
                            <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" required/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label login-form-label">Password*</label>
                            <input type="password" className="form-control" password="password" name="password" id="exampleInputPassword1" required />
                        </div>

                        <div className="d-flex justify-content-between">
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label login-instruction" for="exampleCheck1">Remember me</label>
                            </div>
                            <p className="login-instruction">Forgotten password?</p>
                        </div>
                        {errorMessage?<p className="text-danger">{errorMessage}</p>:""}
                        <div className="d-grid">
                            {isLoading?<button type="button" className="btn btn-primary btn-lg btn-login" disabled>Loading...</button>:<button type="submit" className="btn btn-primary btn-lg btn-login">Login</button>}
                            
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </Layout>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'

export default function Register() {
  return (
    <Layout>
        <div className="login-section">
            <div className="row">
                <div className="col-md-8">
                    <div className="login-form-card px-5">
                        <div className="login-form-card-inner me-auto">
                            <p className="login-header">Start the POD lifestyle</p>
                            <p className="login-instruction">Welcome to the POD Living, please enter your details below to get started.</p>

                            <form>
                                <div className="mb-3">
                                    <label for="username" className="form-label login-form-label">First Name</label>
                                    <input type="text" className="form-control" id="username" aria-describedby="usernameHelp" />
                                </div>

                                <div className="mb-3">
                                    <label for="username" className="form-label login-form-label">Last Name</label>
                                    <input type="text" className="form-control" id="username" aria-describedby="usernameHelp" />
                                </div>

                                <div className="mb-3">
                                    <label for="username" className="form-label login-form-label">Gender</label>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Select</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Others">Others</option>
                                    </select>
                                </div>

                                <div className="mb-3">
                                    <label for="dob" className="form-label login-form-label">Date of Birth</label>
                                    <input type="date" className="form-control" id="dob" aria-describedby="usernameHelp" />
                                </div>

                                <div className="mb-3">
                                    <label for="phone" className="form-label login-form-label">Phone Number</label>
                                    <input type="tel" className="form-control" id="phone" aria-describedby="usernameHelp" />
                                </div>

                                <div className="mb-3">
                                    <label for="email" className="form-label login-form-label">Email Address</label>
                                    <input type="email" className="form-control" id="email" aria-describedby="usernameHelp" />
                                </div>

                                <div className="mb-3">
                                    <label for="username" className="form-label login-form-label">Room Type</label>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Select</option>
                                        <option value="Type 1">Type 1</option>
                                        <option value="Type 2">Type 2</option>
                                        <option value="Type 3">Type 3</option>
                                    </select>
                                </div>

                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label login-form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>

                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label login-form-label">Confirm Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>

                                <div className="d-flex justify-content-between">
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label login-instruction" for="exampleCheck1">I have read and accept the <a href="terms" target="_blank" style={{color: "#EB6B00"}}>Terms of Use & Privacy Policy</a></label>
                                    </div>
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary btn-lg btn-login">Create an account</button>
                                </div>
                                <p className="login-instruction">To confirm your room, you will need your credit/debit card or be able to make
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
                        <p className="login-instruction">Rooms available</p>
                        <div className="row">
                            <div className="col-md-4">
                                <img src="/img/cutlery.png" width="70" alt="" />
                                <p className="login-instruction">One-man</p>
                            </div>
                            <div className="col-md-4">
                                <img src="/img/parking.png" width="70" alt="" />
                                <p className="login-instruction">Two-man</p>
                            </div>
                            <div className="col-md-4">
                                <img src="/img/parking-2.png" width="70" alt="" />
                                <p className="login-instruction">Four-man</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </Layout>
  )
}

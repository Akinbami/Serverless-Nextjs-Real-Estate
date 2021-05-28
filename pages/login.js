import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'

export default function Login() {
  return (
    <Layout>
        <div className="login-section">
            <div className="row">
                <div className="col-md-8">
                    <div className="login-form-card px-5">
                        <div className="login-form-card-inner me-auto">
                            <p className="login-header">Log in to your POD portal</p>
                            <p className="login-instruction">If you are a current resident, please enter your login details below.</p>

                            <form>
                                <div className="mb-3">
                                    <label for="username" className="form-label login-form-label">Username</label>
                                    <input type="text" className="form-control" id="username" aria-describedby="usernameHelp" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label login-form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>

                                <div className="d-flex justify-content-between">
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label login-instruction" for="exampleCheck1">Remember me</label>
                                    </div>
                                    <p className="login-instruction">Forgotten password?</p>
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary btn-lg btn-login">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="apply-room-card ps-2">
                        <div className="d-flex justify-content-start">
                            <p className="mb-0"><img src="/img/Bed.png" width="50" alt="bedroom icon" /></p>
                            <p className="apply-room-text">Apply for a room</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}

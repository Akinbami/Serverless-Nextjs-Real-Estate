import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import Router from "next/router";
import { useState } from 'react';
import { connect } from "react-redux";

import Layout from '../components/Layout';
import { setHealthCondition, setReport, setSelectRoommate, setRoommateName } from "../redux/actions/main";

function ProvideReport(props) {
    const [healthConditionState, setHealthConditionState] = useState(false);
    const [reportState, setReportState] = useState("");
    const [selectRoommateState, setSelectRoommateState] = useState(false);
    const [roommateNameState, setRoommateNameState] = useState("");

    const [errorMessage,setErrorMessage ] = useState(null);

    const { setHealthCondition, setReport, setSelectRoommate, setRoommateName } = props;
    console.log("user info ", props.userInfo)

    const handleSubmit = (e) =>{
        e.preventDefault();
        
        setHealthCondition(healthConditionState);
        setReport(reportState);
        setSelectRoommate(selectRoommateState);
        setRoommateName(roommateNameState);

        Router.push("/confirm")
    }
    console.log("healthConditionState, ",healthConditionState)
    
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
                                <div className="four no-color"></div>
                                <div className="five no-color"></div>
                                <div className="progress-bar progress-bar-warning" style={{width: "62.5%"}}></div>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 bd-highlight progress-start-text">60%</div>
                </div>
            </div>

        </div>
                        

        <div className="registration-banner">
            <div className="registration-banner-content">
                <p className="banner-header mx-auto">Other Information</p>
                <p className="banner-text mx-auto">Enter the requested information below for a better experience</p>
            </div>
        </div>

        <div className="registration-card mx-auto mb-5 px-2">
            <div className="registration-card-inner mx-auto">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label for="healthcondition" className="form-label login-form-label"><b>Are you living with any health condition
                            that needs special attention?</b></label>
                        <input type="radio" className="btn-check" name="report-outlined" id="success-report-outlined"  autocomplete="off" onChange={e=>setHealthConditionState(!healthConditionState)} />
                        <label className={`btn btn-danger btn-health ${healthConditionState ? "" : "btn-health-false"}`} for="success-report-outlined">
                            <div className="d-flex justify-content-around">
                                <p className="mb-0 text-dark pe-4">Yes</p>
                                {healthConditionState?
                                <p className="eclipse-box mb-0"><img src="/img/eclipse.png" width="15" alt="eclipse" /></p>:
                                <p className="eclipse-box mb-0"><img src="/img/eclipse-light.png" width="15" alt="eclipse" /></p>}
                            </div>
                        </label>

                        <input type="radio" className="btn-check" name="report-outlined" id="danger-report-outlined" autocomplete="off" onChange={e=>setHealthConditionState(!healthConditionState)}/>
                        <label className={`btn btn-danger btn-health ${healthConditionState ? "btn-health-false" : ""}`}  for="danger-report-outlined">
                            <div className="d-flex justify-content-around">
                                <p className="mb-0 text-dark pe-4">No</p>
                                {!healthConditionState?
                                <p className="eclipse-box mb-0"><img src="/img/eclipse.png" width="15" alt="eclipse" /></p>:
                                <p className="eclipse-box mb-0"><img src="/img/eclipse-light.png" width="15" alt="eclipse" /></p>}
                            </div>
                        </label>
                    </div>

                    <div className="mb-3">
                        <label for="report" className="form-label login-form-label"><b>Provide report</b></label>
                        <textarea className="form-control" id="report" rows="4" onChange={e=>setReportState(e.target.value)}></textarea>
                    </div>

                    {props.userInfo.room_type=="2 Man"?
                    <>
                    <div className="mb-3">
                        <label for="healthcondition" className="form-label login-form-label"><b>Want to select your own roommate?</b><br />
                                        (only available for 2 and 3 man room)</label><br />
                        <input type="radio" className="btn-check" name="select-roommate-outlined" id="success-select-roommate-outlined" autocomplete="off" onChange={e=>setSelectRoommateState(!selectRoommateState)} />
                        <label className={`btn btn-danger btn-health ${selectRoommateState ? "" : "btn-health-false"}`} for="success-select-roommate-outlined">
                            <div className="d-flex justify-content-around">
                                <p className="mb-0 text-dark pe-4">Yes</p>
                                {selectRoommateState?
                                <p className="eclipse-box mb-0"><img src="/img/eclipse.png" width="15" alt="eclipse" /></p>:
                                <p className="eclipse-box mb-0"><img src="/img/eclipse-light.png" width="15" alt="eclipse" /></p>}
                            </div>
                        </label>

                        <input type="radio" className="btn-check" name="select-roommate-outlined" id="danger-select-roommate-outlined" autocomplete="off" onChange={e=>setSelectRoommateState(!selectRoommateState)} />
                        <label className={`btn btn-danger btn-health ${selectRoommateState ? "btn-health-false" : ""}`} for="danger-select-roommate-outlined">
                            <div className="d-flex justify-content-around">
                                <p className="mb-0 text-dark pe-4">No</p>
                                {!selectRoommateState?
                                <p className="eclipse-box mb-0"><img src="/img/eclipse.png" width="15" alt="eclipse" /></p>:
                                <p className="eclipse-box mb-0"><img src="/img/eclipse-light.png" width="15" alt="eclipse" /></p>}
                            </div>
                        </label>
                    </div>
                    <div className="mb-3">
                        <label for="addname" className="form-label login-form-label"><b>Add Name</b></label>
                        <input type="text" className="form-control form-control-lg" id="addname" aria-describedby="addnameHelp" onChange={e=>setRoommateNameState(e.target.value)} />
                    </div>
                    </>
                    :""}

                    
                    
                    {errorMessage?<p className="text-danger">{errorMessage}</p>:""}
                    
                    <div className="mb-3 text-center">
                        <button type="submit" className="btn btn-primary btn-lg btn-register mt-4">Continue</button>
                    </div>
                </form>
            </div>
        </div>

    </Layout>
  )
}

const mapStateToProps = state => ({
    userInfo: state.main
  })
  
const mapDispatchToProps = {
setHealthCondition,
setReport, 
setSelectRoommate, 
setRoommateName
}

export default connect(mapStateToProps, mapDispatchToProps)(ProvideReport)
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/Footer';
import Layout from '../components/Layout'
import RegistrationHeader from '../components/RegistrationHeader';

import { connect } from "react-redux";
import { setRoomType, setRoomTypeYear } from "../redux/actions/main"
import { useState } from 'react';
import Router from 'next/router';

function Home(props) {
    const [room, setRoom] = useState(null);
    const [year, setYear] = useState(null);
    const [errorMessage,setErrorMessage ] = useState(null);

    // const router = useRouter;
    const { setRoomType, setRoomTypeYear } = props;

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!room || !year) {
            setErrorMessage("Please select Room Type and year.")
        }else{
            console.log(room, year)
            setRoomType(room);
            setRoomTypeYear(year);
            Router.push("/validate-registration")
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
                            <p className="login-instruction py-1 mx-auto">Please select your preferred room type and duration of stay.</p>

                            <form onSubmit={handleSubmit}>
                                <div className="">
                                    <input type="radio" className="btn-check " name="options" id="option1" value="1 Man" autoComplete="off" onChange={e=>setRoom(e.target.value)}/>
                                    <label className="btn btn-light btn-room-type mx-auto py-3" for="option1">
                                        <div className="container">
                                            <div className="d-flex justify-content-between">
                                                <div className="d-flex justify-content-start">
                                                    <p className="mb-0 pt-1"><img src="/img/bed-icon-light.png" width="28" height="28" alt="bed icon" /></p>
                                                    <p className="room-type-text p-2">1-man room</p>
                                                </div>
                                                <div className="d-flex justify-content-end">
                                                    <p className="room-type-price pe-2 pt-2">₦850,000</p>
                                                    <select className="form-select room-select-year" aria-label="Default select example"  onChange={e=>setYear(e.target.value)}>
                                                        <option  defaultValue={null}>/yr</option>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        {/* <option value="3">3</option> */}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                                
                                <div className="">
                                    <input type="radio" className="btn-check " name="options" id="option2" value="2 Man" autoComplete="off" onChange={e=>setRoom(e.target.value)} />
                                    <label className="btn btn-light btn-room-type mx-auto py-3" for="option2">
                                        <div className="container">
                                            <div className="d-flex justify-content-between">
                                                <div className="d-flex justify-content-start">
                                                    <p className="mb-0 pt-1"><img src="/img/bed-icon-light.png" width="28" height="28" alt="bed icon" /></p>
                                                    <p className="room-type-text p-2">2-man room</p>
                                                </div>
                                                <div className="d-flex justify-content-end">
                                                    <p className="room-type-price pe-2 pt-2">₦750,000</p>
                                                    <select className="form-select room-select-year" aria-label="Default select example"  onChange={e=>setYear(e.target.value)}>
                                                        <option defaultValue={null}>/yr</option>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        {/* <option value="3">3</option> */}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                                
                                {/* <div className="">
                                    <input type="radio" className="btn-check " name="options" id="option3"  value="4-man" autocomplete="off" onChange={e=>setRoom(e.target.value)} />
                                    <label className="btn btn-light btn-room-type mx-auto py-3" for="option3">
                                        <div className="container">
                                            <div className="d-flex justify-content-between">
                                                <div className="d-flex justify-content-start">
                                                    <p className="mb-0 pt-1"><img src="/img/bed-icon-light.png" width="28" height="28" alt="bed icon" /></p>
                                                    <p className="room-type-text p-2">4-man room</p>
                                                </div>
                                                <div className="d-flex justify-content-end">
                                                    <p className="room-type-price pe-2 pt-2">₦140,000</p>
                                                    <select className="form-select room-select-year" aria-label="Default select example"  onChange={e=>setYear(e.target.value)}>
                                                        <option selected>/yr</option>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </label>
                                </div> */}
                                {errorMessage?<p className="text-danger">{errorMessage}</p>:""}
                                
                                <button type="submit" className="btn btn-primary btn-lg btn-register mt-4">Continue</button>
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
    setRoomType: setRoomType,
    setRoomTypeYear: setRoomTypeYear
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home)
import Head from 'next/head'
import Link from 'next/link'

import Image from 'next/image'
import Layout from '../components/Layout'

export default function PAU() {
  return (
    <Layout>
      <div className="landing-jumboton">
        <p className="about-jumbotron-text mx-auto">We are developers of functional, value-driven spaces for students and youth in Africa.</p>
      </div>
      

      <div className="our-space-section">
          <div className="our-space-section-inner mx-auto">
              <p className="our-space-section-header">Our space</p>
                <div className="row">
                    <div className="col-md-6">
                        <p className="our-space-header">Value-Engineered Student Accommodation in Africa</p>
                        <p className="our-space-text">The Student POD at Pan-Atlantic University has been designed in collaboration with students to understand their aspirations and needs. Our spaces spark friendships, inspire action thinking, promote studying and host events.<br /><br />

                        All our rooms are designed for the most comfortable student living experience, with ensuite bathrooms, large desks, adequate storage space and sufficient lighting for each student.<br /><br />

                        Available accommodation types include:<br />
                        <b>1-man room</b><br />
                        <b>2-man room</b><br />
                        <b>4-man room</b><br /><br />

                        <b style={{color: "#EB6B00"}}>Communal facilities include:</b></p>
                        <div className="row">
                            <div className="col">
                                <div className="text-center">
                                    <img src="/img/cutlery-2.png" width="60" alt="cutlery" />
                                    <p className="facilities-title">Canteen</p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="text-center">
                                    <img src="/img/parking-3.png" width="60" alt="cutlery" />
                                    <p className="facilities-title">Bicycle</p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="text-center">
                                    <img src="/img/parking-4.png" width="60" alt="cutlery" />
                                    <p className="facilities-title">Common Room</p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="text-center">
                                    <img src="/img/parking-5.png" width="60" alt="cutlery" />
                                    <p className="facilities-title">Kitchen</p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="text-center">
                                    <img src="/img/parking-6.png" width="60" alt="cutlery" />
                                    <p className="facilities-title">Convenience Shop</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="text-center">
                                    <img src="/img/shower.png" width="60" alt="cutlery" />
                                    <p className="facilities-title">Shower</p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="text-center">
                                    <img src="/img/wifi.png" width="60" alt="cutlery" />
                                    <p className="facilities-title">Free WIFI</p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="text-center">
                                    <img src="/img/study.png" width="60" alt="cutlery" />
                                    <p className="facilities-title">Study Room</p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="text-center">
                                    <img src="/img/barber.png" width="60" alt="cutlery" />
                                    <p className="facilities-title">Barber Shop</p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="text-center">
                                    <img src="/img/wash.png" width="60" alt="cutlery" />
                                    <p className="facilities-title">Laundromat</p>
                                </div>
                            </div>
                        </div>
                        <p className="pau-footer">For more information on PAU, please visit <span style={{color: "#EB6B00"}}>www.pau.edu.ng</span></p>
                    </div>
                    <div className="col-md-6">
                        <div className="frame-img ms-auto">
                            <img src="/img/frame-1.png" width="100%" alt="frame" />
                        </div>
                        <div className="frame-img ms-auto">
                            <img src="/img/frame-2.png" width="100%" alt="frame" />
                        </div>
                    </div>
                </div>
          </div>
      </div>

      </Layout>
  )
}

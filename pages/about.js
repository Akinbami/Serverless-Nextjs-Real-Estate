import Head from 'next/head'
import Link from 'next/link'

import Image from 'next/image'
import Layout from '../components/Layout'

export default function About() {
  return (
    <Layout>
      <div className="landing-jumboton">
        <p className="about-jumbotron-text mx-auto">We operate functional, value-driven spaces for students and youth</p>
      </div>
      

      <div className="about-section">
          <div className="about-section-inner mx-auto">
            <div className="row">
                <div className="col-md-6">
                    <p className="about-pod-text">The POD Living is purposefully built with African youth in mind; to empower them, foster their communities, and give them the space to explore their potential as they prepare for the next phase of their lives. <br /><br />

                        We believe that student accommodation is more than just a room, it’s a social hub. We tailor things in a way that lets you work, play and live your best life. <br /><br />

                        We’re constantly working hard to ensure The POD Living is not just the best student experience but also the safest place to live. Find out more by speaking to a member of our team. But don’t spend too long making your decision on us, rooms are being booked everyday and prices will only go up. So don’t miss out!  </p>
                </div>
                <div className="col-md-6">
                    <div className="text-center">
                        <Image src="/img/about-image.png" height={"497px"} width={"500px"} alt="landing sidebar" />
                    </div>
                </div>
            </div>
          </div>
        
      </div>

      <div className="we-stand-section">
          <div className="we-stand-section-inner mx-auto">
              <p className="we-stand-header">We stand for</p>
              <div className="we-stand-item">
                <div className="row">
                    <div className="col-md-6">
                        <p className="we-stand-item-header">Community</p>
                    </div>
                    <div className="col-md-6">
                        <p className="we-stand-item-text pt-3">We believe in the power of community
                            and we build to encourage connections
                            amongst our residents.</p>
                    </div>
                </div>
              </div>

              <div className="we-stand-item">
                <div className="row">
                    <div className="col-md-6">
                        <p className="we-stand-item-header">Growth</p>
                    </div>
                    <div className="col-md-6">
                        <p className="we-stand-item-text pt-3">We believe in the potential of African
                            youth to change the continent and create
                            environments to fosters their growth.</p>
                    </div>
                </div>
              </div>

              <div className="we-stand-item">
                <div className="row">
                    <div className="col-md-6">
                        <p className="we-stand-item-header">Value</p>
                    </div>
                    <div className="col-md-6">
                        <p className="we-stand-item-text pt-3">We strive to deliver value at every level of
                            The POD Living experience. Our promise
                            is quality, value-engineered space.</p>
                    </div>
                </div>
              </div>

              <div className="we-stand-item">
                <div className="row">
                    <div className="col-md-6">
                        <p className="we-stand-item-header">Be Bold</p>
                    </div>
                    <div className="col-md-6">
                        <p className="we-stand-item-text pt-3">We are pioneers in African real estate;
                            and that bold, pioneering spirit is part of our brand DNA.</p>
                    </div>
                </div>
              </div>
              
          </div>
      </div>
      <div className="student-living-section">
          <div className="student-living-section-inner mx-auto">
              <p className="student-living-header-1">Easy. Flexible. Safe.</p>
              <p className="student-living-header-2">Redefining Student Living</p>
            <div className="row">
                <div className="col-md-4">
                    <div className="text-center">
                        <img src="/img/living-icon-1.png" width="100" alt="living icon" />
                        <p className="student-living-text">Youthful community</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="text-center">
                        <img src="/img/living-icon-2.png"  width="100" alt="living icon" />
                        <p className="student-living-text">Youthful community</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="text-center">
                        <img src="/img/living-icon-3.png"  width="100" alt="living icon" />
                        <p className="student-living-text">Youthful community</p>
                    </div>
                </div>
            </div>
          </div>
      </div>

      <div className="feature-section">
          <div className="feature-section-inner mx-auto">
                <div className="row">
                    <div className="col-md-6">
                        <div className="feature-section-content text-center">
                            <p className="feature-section-header">The POD Space</p>
                            <p className="feature-section-text">With prices starting from ₦400,000 for the student POD at PAU, you’re wondering what the hype is about..?</p>
                            <p className="feature-section-footer">View all features<span className="px-2"><img src="/img/arrow-right.png" alt="arror" /></span></p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="features">
                            <div className="row mb-4">
                                <div className="col-6">
                                    <div className="d-flex justify-content-start">
                                        <img src="/img/lock-key.png" width="50" alt="pad lock" />
                                        <p className="feature-text">24 Hours Security</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="d-flex justify-content-start">
                                        <img src="/img/user.png" width="50" alt="pad lock" />
                                        <p className="feature-text">Resident Manager</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-4">
                                <div className="col-6">
                                    <div className="d-flex justify-content-start">
                                        <img src="/img/house.png" width="50" alt="pad lock" />
                                        <p className="feature-text">House Keeping</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="d-flex justify-content-start">
                                        <img src="/img/receipt.png" width="50" alt="pad lock" />
                                        <p className="feature-text">All-Inclusive Bills</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-4">
                                <div className="col-6">
                                    <div className="d-flex justify-content-start">
                                        <img src="/img/graduation-cap.png" width="50" alt="pad lock" />
                                        <p className="feature-text">Student Tailored Activities</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="d-flex justify-content-start">
                                        <img src="/img/package.png" width="50" alt="pad lock" />
                                        <p className="feature-text">Parcel Collections</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
      </div>
    </Layout>
  )
}

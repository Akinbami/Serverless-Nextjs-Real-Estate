import Head from 'next/head'
import Link from 'next/link'

import Image from 'next/image'
import Layout from '../components/Layout'

export default function Contact() {
  return (
    <Layout>
      <div className="landing-jumboton">
        <p className="about-jumbotron-text mx-auto">Talk to us, <br />we are listening</p>
      </div>
      

      <div className="contact-section">
          <div className="contact-section-inner mx-auto pb-3">
              <div className="row">
                  <div className="col-md-5">
                        <p className="contact-info px-2">For general enquiries or if you cannot find the property
                            you want below, send us a message or email us and
                            we’ll get back to you as soon as we can. </p>

                        <form className="px-2 pb-3">
                            <div className="mb-3">
                                <label for="name" className="form-label login-form-label">Your name</label>
                                <input type="text" className="form-control" id="name" aria-describedby="nameHelp" />
                            </div>

                            <div className="mb-3">
                                <label for="phone" className="form-label login-form-label">Your phone number</label>
                                <input type="tel" className="form-control" id="phone" aria-describedby="usernameHelp" />
                            </div>


                            <div className="mb-3">
                                <label for="email" className="form-label login-form-label">Your email address</label>
                                <input type="email" className="form-control" id="email" aria-describedby="usernameHelp" />
                            </div>

                            <div className="mb-3">
                                <label for="name" className="form-label login-form-label">Your message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>


                            
                            <div className="d-grid">
                                <button type="submit" className="btn btn-primary btn-lg btn-login">Send message</button>
                            </div>
                        </form>
                  </div>

                  <div className="col-md-7 px-2">
                      <img src="/img/contact-banner.png" alt="" width="100%" />
                  </div>
              </div>
    
            <div className="social-contact">
                <div className="row">
                  <div className="col-md-4">
                      <div className="text-center">
                          <p className="social-header">We are social</p>
                          <p>
                              <span className="px-1"><img src="/img/ig-logo.png" width="20" alt="social logo" /></span>
                              <span className="px-1"><img src="/img/tweet-logo.png" width="20" alt="social logo" /></span>
                              <span className="px-1"><img src="/img/fb-logo.png" width="20" alt="social logo" /></span>
                          </p>
                      </div>
                  </div>

                  <div className="col-md-4">
                      <div className="text-center">
                          <p className="social-header">Call us</p>
                              
                          <p className=""><span><img src="/img/tel-logo.png" width="20" alt="tel logo" /></span>
                          +234 809 101 0101
                          </p>
                          
                      </div>
                  </div>

                  <div className="col-md-4">
                      <div className="text-center">
                          <p className="social-header">Message us</p>
                          <p className=""><span><img src="/img/env-logo.png" width="20" alt="tel logo" /></span>
                          hello@thepodliving.com
                          </p>
                      </div>
                  </div>
              </div>
            </div>
              
          </div>
      </div>

      </Layout>
  )
}

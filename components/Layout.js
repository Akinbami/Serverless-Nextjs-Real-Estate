import React,  {useState, useEffect, useContext} from 'react';
import Head from 'next/head';
import Header from './Header';
import Image from "next/image";
// import Header from './Header';


const Layout = props => {


     
	return (
  <React.Fragment>
  		<Head>
	        <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="" />
            <meta name="author" content="Akinbami Dayo" />
            <meta name="generator" content="" />

            <title>The Pod Living </title>

            <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png" />
            <link rel="manifest" href="/favicon_io/site.webmanifest" />
                
            <meta name="theme-color" content="#EB6B00"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Encode+Sans:wght@700&family=Raleway:wght@700&family=Roboto:wght@300;700&display=swap" rel="stylesheet"></link>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossOrigin="anonymous" />
            <link href="/css/cover.css" rel="stylesheet" />
            <link href="/css/custom.css" rel="stylesheet" />
	    </Head>
        
        <Header />

        <main className="">
            {props.children}

        </main>

        <footer className="mt-auto">
            <div className="footer-inner mx-auto">
                <div className="row">
                    <div className="col-md-4 mb-2">
                        <div className="footer-inner-2 mx-auto">
                            <div className="d-flex justify-content-start">
                                <div className="footer-logo">
                                    <Image src="/img/footer-logo.png" width={"180"} height={"100"} alt="footer logo" />
                                </div>
                                <p className="landing-footer-text px-3">The Ultimate Student Living Experience</p>
                            </div>
                            <img src="/img/footer-advert.png" width="60%" alt="footer-advert" />
                        </div>
                        
                    </div>
                    <div className="col-md-4 mb-2">
                        <p className="contact-text">Contact us</p>
                        <p className="contact-email"><span className="px-2"><img src="/img/email-logo.png" width="15" alt="" /></span>hello@thepodliving.com</p>
                        <p className="contact-covid"><span className="px-2"><img src="/img/covid-sign.png" width="15" alt="" /></span>COVID-19 Advisory</p>
                    </div>
                    <div className="col-md-4 mb-2">
                        <p className="contact-text">Follow us: 
                            <span className="px-2"><img src="/img/instagram-logo.png" width="20" alt="instagram logo" /></span>
                            <span className="px-2"><img src="/img/twitter-logo.png" width="20" alt="instagram logo" /></span>
                            <span className="px-2"><img src="/img/whatsapp-logo.png" width="20" alt="instagram logo" /></span>

                        </p>
                        <p className="contact-email">Privacy Policy   |   Legal Notice</p>
                    </div>
                </div>
            </div>
        </footer>
	    
        {/* <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossOrigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossOrigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossOrigin="anonymous"></script>
         */}
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js" integrity="sha384-SR1sx49pcuLnqZUnnPwx6FCym0wLsk5JZuNx2bPPENzswTNFaQU1RDvt3wT4gWFG" crossorigin="anonymous"></script>
		<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js" integrity="sha384-j0CNLUeiqtyaRmlzUHCPZ+Gy5fQu0dQ6eZ/xAww941Ai1SxSY+0EQqNXNE6DZiVc" crossorigin="anonymous"></script>
		
		<style jsx global>{`
            html{
				height: 100% !important;
			}
            
            .bd-placeholder-img {
                font-size: 1.125rem;
                text-anchor: middle;
                -webkit-user-select: none;
                -moz-user-select: none;
                user-select: none;
            }

            @media (min-width: 768px) {
                .bd-placeholder-img-lg {
                font-size: 3.5rem;
                }
            }


      `}</style>

  </React.Fragment>
)
}

export default Layout;
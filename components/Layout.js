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
            <meta name="description" content="Redefining Student Living, We believe that student accommodation is more than just a room, it’s a social hub. We tailor things in a way that lets you work, play and live your best life.
            We’re constantly working hard to ensure The POD Living is not just the best student experience but also the safest place to live. Find out more by speaking to a member of our team." />
            <meta name="author" content="Akinbami Dayo" />
            <meta name="keywords" content="Pod Living , Student Hostel PAU, PAU, Pan Atlantic University , Male Hostel, Nigeria Hostel, Lagos Hostel , Nigeria PBSA, PBSA, Purpose Built Student Accommodation , Faith Hostel, Amethyst Hostel , Emerald Hostel , Amethyst Hall"></meta>
            <meta name="generator" content="" />

            <title>The Pod Living </title>

            <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="//favicon_iofavicon-16x16.png" />
            <link rel="manifest" href="/favicon_io/site.webmanifest" />
                
            <meta name="theme-color" content="#EB6B00"/>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Calistoga&display=swap" rel="stylesheet"></link><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossOrigin="anonymous" />
            <link href="/dropzone/dist/dropzone.css" rel="stylesheet" />

            <link href="/css/cover.css" rel="stylesheet" />
            <link href="/css/custom.css" rel="stylesheet" />

            <script src="https://www.google.com/recaptcha/api.js"></script>
            <script src="https://raw.githack.com/eKoopmans/html2pdf/master/dist/html2pdf.bundle.js"></script>
            <script src="/js/html-pdf.js"></script>
            
	    </Head>
        

        <main className="">
            {props.children}
        </main>

        
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossOrigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossOrigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossOrigin="anonymous"></script>
        
        {/* <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossOrigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js" integrity="sha384-SR1sx49pcuLnqZUnnPwx6FCym0wLsk5JZuNx2bPPENzswTNFaQU1RDvt3wT4gWFG" crossorigin="anonymous"></script>
		<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js" integrity="sha384-j0CNLUeiqtyaRmlzUHCPZ+Gy5fQu0dQ6eZ/xAww941Ai1SxSY+0EQqNXNE6DZiVc" crossorigin="anonymous"></script> */}
        <script src="/dropzone/dist/dropzone.js"></script>
		
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
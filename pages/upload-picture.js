import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import Router from 'next/router';

import axios from 'axios';

import React, {useCallback, useState, useEffect} from 'react'
import {useDropzone} from 'react-dropzone'
import { connect } from "react-redux";


import Layout from '../components/Layout'
import { setPicture } from "../redux/actions/main"

//   const img = {
//     display: 'block',
//     width: 'auto',
//     height: '100%'
//   };

function UploadPicture(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
    
    const [files, setFiles] = useState([]);
    const [pictureState, setPictureState] = useState(null);
    const [progress, setProgress] = useState(0);

    const { setPicture } = props;

    const {user} = props.userInfo;
    // const APPLICATION_API = "http://127.0.0.1:3000/dev";
    const APPLICATION_API = "https://gtdo2np6f2.execute-api.us-east-1.amazonaws.com/dev";

    
    useEffect(() => {
        // check if user is logged in

        if(!user ){
            Router.push("/")
        }
        // Always do navigations after the first render
    }, [])

    const thumbsContainer = {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 16
      };
      
      const thumb = {
        display: 'inline-flex',
        borderRadius: 2,
        border: '1px solid #eaeaea',
        marginBottom: 8,
        marginRight: 8,
        width: 100,
        height: 100,
        padding: 4,
        boxSizing: 'border-box'
      };
      
      const thumbInner = {
        display: 'flex',
        minWidth: 0,
        // overflow: 'hidden'
      };

    const req_data = {
        "picture": pictureState,
    }

    // console.log("user info ", props.userInfo)


    const handleSubmit = (e) =>{
        // save to backend
        setIsLoading(true)
        console.log("user id:",user.profile._id)
        fetch(APPLICATION_API+ `/profiles/${user.profile._id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(req_data)
        })
        .then(response => response.json())
        .then(data =>{
            console.log(data);
            setIsLoading(false);
            if(data.error){
                setIsLoading(false);
                setErrorMessage(data.message)
            }else{
                Router.push("/provide-report")
                setIsLoading(false)
            }
        })
        .catch(error =>{
            setIsLoading(false)
            setErrorMessage(error.message)
        }) 
    }

    const upload = (formData, onUploadProgress)=> {
        
        console.log("form data", formData)

        // axios.post(APPLICATION_API+"/upload", formData, { headers: {'Content-Type': 'multipart/form-data'}, onUploadProgress})
        // .then(res => { // then print response status
        //     console.log("upload response",res)
        //     setPictureState(res.data.url)
        //     setPicture(res.data.url)
        // })
        // .catch(err=>console.log("error", err))
    
        return axios.post(APPLICATION_API+"/upload", formData, { headers: {'Content-Type': 'multipart/form-data'}, onUploadProgress})
      }

    

    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
        console.log("this is the accepted file, ", acceptedFiles[0])

        const formData = new FormData()
        formData.append('file', acceptedFiles[0])


        // send picture to server
        let request = new XMLHttpRequest();
        request.open('POST', APPLICATION_API+"/upload"); 

        // upload progress event
        request.upload.addEventListener('progress', function(e) {
            // upload progress as percentage
            let percent_completed = Math.round((e.loaded / e.total)*100);
            setProgress(percent_completed)
        });

        // request finished event
        request.addEventListener('load', function(e) {
            // HTTP status message (200, 404 etc)
            console.log(request.status);
            const res = JSON.parse(request.response);

            if(request.status==200){
                // request.response holds response from the server
                setPictureState(res.url)
                setPicture(res.url)

                console.log("image url: ",res.url,typeof(res),res)
            }else{
                setErrorMessage(res.message);
            }

            
        });

        // send POST request to server
        request.send(formData);
        // upload(formData,(event) => {
        //     setProgress(Math.round((100 * event.loaded) / event.total));
        // }).then((res) => {
        //         console.log("upload response: ",res)
        //         setPictureState(res.data.url)
        //         setPicture(res.data.url)
        //         setErrorMessage(res.data.message);
        // }).catch((e) => {
        //       setProgress(0)
        //       setErrorMessage(`Could not upload the file!! ${e}`)
        // });

        setFiles(acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
          })));
        }, [])

    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        accept: 'image/*',
        onDrop})

    const thumbs = files.map(file => (
        <div style={thumb} key={file.name}>
            <div style={thumbInner}>
                <img
                    src={file.preview}
                    // style={img}

                    className="rounded-circle w-100"
                />
                
            </div>
        </div>
    ));


    useEffect(() => () => {
        // Make sure to revoke the data uris to avoid memory leaks
        files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);
    

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
                                <div className="three no-color"></div>
                                <div className="four no-color"></div>
                                <div className="five no-color"></div>
                                <div className="progress-bar progress-bar-warning" style={{width: "40%"}}></div>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 bd-highlight progress-start-text">40%</div>
                </div>
            </div>
        </div>
        

        <div className="registration-banner">
            <div className="registration-banner-content">
                <p className="banner-header mx-auto">Upload your passport photograph</p>
                <p className="banner-text mx-auto">You are required to upload a clear and recent
                    picture of yourself for proper identification</p>
            </div>
        </div>

        <div className="registration-card mx-auto mb-5">
            <div className="registration-card-inner main-section mx-auto">
                <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    {
                        isDragActive ?
                        <p>Drop the files here ...</p> :
                        <div className="registration-thumbnail text-center py-5">
                            {thumbs.length>0? <>{thumbs}</>: <img src="/img/registration-placeholder.png" width="100" alt="image placeholder" /> }
                            
                            <p className="registration-thumbnail-text pt-3">Click to select from device</p>
                            <div className="w-50 mx-auto">
                                <div className="progress">
                                    <div
                                    className="progress-bar progress-bar-info progress-bar-striped"
                                    role="progressbar"
                                    aria-valuenow={progress}
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                    style={{ width: progress + "%" }}
                                    >
                                    
                                    </div>
                                </div>
                                <p>{progress}%</p>
                                <p className="text-danger">{errorMessage}</p>
                            </div>
                        </div>

                    }
                </div>
                <div className="mb-3 text-center">
                {isLoading?<button className="btn btn-primary btn-lg btn-register mt-4" disabled>Loading...</button>:pictureState?
                        <button type="button" className="btn btn-primary btn-lg btn-register mt-4" onClick={handleSubmit}>Continue</button>
                    :
                    <button className="btn btn-light btn-lg btn-register mt-4" disabled>Continue</button>}
                </div>
                
            </div>
        </div>

        

        <style jsx>
            {`
                .main-section{
                    margin:0 auto;
                    padding: 20px;
                    margin-top: 100px;
                    background-color: #fff;
                    box-shadow: 0px 0px 20px #c1c1c1;
                }
                .fileinput-remove,
                .fileinput-upload{
                    display: none;
                }

                .dz-image{
                    margin-right: auto;
                    margin-left: auto;
                }

                .dropzone .dz-preview .dz-image-preview{
                    width: 100%;
                }
            `}
        </style>

    </Layout>
  )
}



const mapStateToProps = state => ({
    userInfo: state.main
  })
  
const mapDispatchToProps = {
    setPicture: setPicture
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadPicture)

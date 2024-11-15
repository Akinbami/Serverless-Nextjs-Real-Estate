import React,  {useState, useEffect, useContext} from 'react';
import Link from 'next/link';
import Image from "next/image";
import { Modal} from 'reactstrap';
import { useRouter } from 'next/router';

// const APPLICATION_API = "http://127.0.0.1:5559";
const APPLICATION_API = "https://gtdo2np6f2.execute-api.us-east-1.amazonaws.com/dev";

const DeleteAdminModal = props => {
    const [collapsed, setCollapsed] = useState(true);
    const [deleteModal, setDeleteModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage]  = useState(null);
    const [errorMessage, setErrorMessage]  = useState(null);
    const router = useRouter()

    const {admin, token} = props

    const toggleDelete =() => setDeleteModal(!deleteModal);


    const handleDelete =(admin)=>{
        setIsLoading(true)
        console.log("this is the admin :", admin)
        fetch(APPLICATION_API+ `/admins/${admin._id}`, {
            method: 'DELETE',
            headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    "authorization": 'Bearer ' + token
            }, 
            body: JSON.stringify({})
        })
        .then(response => response.json())
        .then(data =>{
            console.log(data);
            setIsLoading(false);
            if(data.error){
                setIsLoading(false);
                setErrorMessage(data.message)
            }else{
                setSuccessMessage(data.message)
                router.reload(window.location.pathname)

                // router.push("/admin/dashboard")
                // setIsLoading(false)
            }
        })
        .catch(error =>{
            setIsLoading(false)
            setErrorMessage(error.message)
        }) 

    }

     
	return (
    <React.Fragment>
        <>
            <button type="button" onClick={toggleDelete}  className="btn btn-primary btn-room-edit">Delete</button>
            <div className="delete-modal">
                <Modal isOpen={deleteModal} toggle={toggleDelete} centered={true}>
                    <div className="modal-dialog m-0">
                        <div className="modal-content">
                            <div className="modal-header">
                                <p className="modal-title" id="exampleModalLabel">Confirm Action</p>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={toggleDelete}></button>
                            </div>
                            <div className="modal-body pb-0">
                                <p className="admin-delete-text w-75 mx-auto mt-5 mb-0 text-center">Are you sure you want to
                                    remove <b>"{admin.profile?`${admin.profile.lastname} ${admin.profile.firstname}`:"None"}"</b> as an admin?</p>
                            </div>
                            {errorMessage?<p className="text-danger text-center">{errorMessage}</p>:""}
                            <div className="w-50 mx-auto my-5 text-center">
                                {isLoading?<div class="text-center">
                                    <div className="spinner-border" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                    </div>:<><button type="button" className="btn btn-primary btn-cancel-modal px-4  mx-1" data-bs-dismiss="modal" aria-label="Close" onClick={toggleDelete}>Cancel</button>
                                <button type="button" className="btn btn-outline-dark px-4 mx-1" onClick={() => handleDelete(admin)}>Delete</button></>}
                                
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        </>

  </React.Fragment>
)
}

export default DeleteAdminModal;

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Input } from 'reactstrap';
import Axios from 'axios';
// import {useHistory} from 'react-router-dom'
import uploadinggif from '../util/uploadinggif.gif'
import { toast } from 'react-toastify';

const UploadModal = (props) => {

    // const history=useHistory()
    const {
        buttonLabel,
        className,
        imagefile,
        setImageFile
    } = props;

    const [modal, setModal] = useState(false);
    // const [imagefile, setImageFile] = useState(null)
    const [previewImage, setPreviewImage] = useState(null)





    const handleImage = (e) => {
        setImageFile(e.target.files[0])
        setPreviewImage(URL.createObjectURL(e.target.files[0]))


    }



    const handleSubmit = (e) => {
        e.preventDefault()

        const newForm = new FormData()

        newForm.append("image", imagefile)
        setPreviewImage(uploadinggif)

        Axios({
            url: "http://localhost:5000/api/images/",
            method: "POST",
            headers: {
                Authorization: "Bearer " + localStorage.getItem("jwt")
            },
            data: newForm

        })
            .then(result => {
                setPreviewImage(null)
                setImageFile(null)
                toggle()
                toast.success("Successfully added another image!")
                
            })


            
    }


    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button  outline color="secondary" onClick={toggle}>{buttonLabel}</Button>
            <Modal size="lg" isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Upload Image</ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
                        {previewImage ? <img alt="previewImage" height="100%" width="auto" src={previewImage}></img> : null}
                        <Input type="file" onChange={handleImage} />



                        <ModalFooter>
                            {imagefile ? <Button color="primary" >Upload</Button>
                                : null}{' '}
                            <Button color="secondary" onClick={toggle}>Cancel</Button>
                        </ModalFooter>


                    </Form>





                </ModalBody>

            </Modal>
        </div>
    );
}

export default UploadModal;
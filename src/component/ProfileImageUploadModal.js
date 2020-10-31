import Axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter , Form, Input } from 'reactstrap';
import uploadinggif from '../util/uploadinggif.gif'

const ProfileImageUploadModal = (props) => {
    const {
        buttonLabel,
        className,
        setUserDetail,

    } = props;

    // console.log(toggledropdown)
    const [modal, setModal] = useState(false);
    const [previewImage,setPreviewImage]=useState(null)
    const [profileImage,setProfileImage]=useState(null)

    // const toggle = () => setModal(!modal);
    const toggle=() => {
        // toggledropdown()
        setModal(!modal)
    }

    const handleSubmit=(e) => {
        console.log("submitted")
        e.preventDefault()
        setPreviewImage(uploadinggif)
        const newForm=new FormData()
        newForm.append("profileImage",profileImage)

        Axios({
            url:"https://flasktagram.herokuapp.com/api/users/profileImage",
            method:"POST",
            headers:{
                Authorization:"Bearer "+localStorage.getItem("jwt")
            },
            data: newForm
            
        })
        .then((res) => {
            // the reason to reset the localStorage is that prevent refreshing the page...to use back the old profile picture 
            toast.success("You have successfully change your profile picture!")
            localStorage.setItem("userdetail",JSON.stringify(res.data))
            setUserDetail(JSON.stringify(res.data))
            setPreviewImage(null)
            setPreviewImage(null)
            toggle()
            


          
        })
      
    }

    const handleImage=(e) => {
        setProfileImage(e.target.files[0])
        setPreviewImage(URL.createObjectURL(e.target.files[0]))
        

      
    }


    return (
        <div>
            <Button onClick={toggle}>{buttonLabel}</Button>
            <Modal size="lg" isOpen={modal} toggle={toggle} className={className} backdrop={"static"}>
                <ModalHeader toggle={toggle}>Update Profile Image</ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
                        {previewImage ? <img alt="previewImage" height="100%" width="auto" src={previewImage}></img> : null}
                        <Input type="file" onChange={handleImage} />



                        <ModalFooter>
                            {profileImage ? <Button color="primary" >Upload</Button>
                                : null}{' '}
                            <Button color="secondary" onClick={toggle}>Cancel</Button>
                        </ModalFooter>


                    </Form>
                </ModalBody>

            </Modal>
        </div>
    );
}

export default ProfileImageUploadModal;
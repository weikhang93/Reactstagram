import React, { useState } from 'react'
// import Image from 'react-graceful-image'
import UserImages from '../container/UserImages'
import UploadModal from '../component/UploadModal'
import ProfileImageUploadModal from '../component/ProfileImageUploadModal'
import { Container, Row, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
// import {Link} from 'react-router-dom'









const MyProfilePage = (props) => {
    const { userdetail, setUserDetail } = props
    let parseuserdetail = JSON.parse(userdetail)

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggledropdown = () => setDropdownOpen(prevState => !prevState);



    const [imagefile, setImageFile] = useState(null)

    return <div>{userdetail ? <div style={{ textAlign: "center" }}>


        <ProfileImageUploadModal  userdetail={userdetail} setUserDetail={setUserDetail} buttonLabel={"Update Profile Picture"}></ProfileImageUploadModal>
        <Dropdown direction="right" isOpen={dropdownOpen} toggle={toggledropdown}>
            <DropdownToggle caret>
                <img style={{height:"200px",width:"200px"}} alt="profilepicture" className="rounded-circle img-thumbnail" src={parseuserdetail.profile_picture} ></img>
            </DropdownToggle>
            <DropdownMenu>

                <DropdownItem>
                    View Profile Picture
                </DropdownItem>




            </DropdownMenu>




        </Dropdown>

        <h2>{parseuserdetail.username}</h2>
        <UploadModal imagefile={imagefile} setImageFile={setImageFile} buttonLabel="Upload Image"></UploadModal>

        <Container className="mt-3" fluid>

            <Row height="100%">

                <UserImages cardheight="auto" className="col-12 col-md-3 col-lg-3" userdetail={userdetail} imagefile={imagefile} user_id={parseuserdetail.id} ></UserImages>

            </Row>
        </Container>

    </div>
        : <h3>Login to view your own profile =)</h3>}
    </div>




}


export default MyProfilePage
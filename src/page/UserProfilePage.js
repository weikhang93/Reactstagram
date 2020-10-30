import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import UserImages from '../container/UserImages'
import {Container, Row} from 'reactstrap'



const UserProfilePage = () => {
    const params = useParams()
    const [user, setUser] = useState({})


    useEffect(() => {

        Axios({
            url: `http://localhost:5000/api/users/${params.id}`,
            method: "GET"
        })
            .then((response) => {
                console.log(response.data)
                setUser(response.data)

            })
            .catch((err) => {
                console.log("ERROR: ", err)
            })




    }, [params.id])





    return <>

        <div style={{ textAlign: "center" }}>


            <img style={{width:"300px", height:"300px" }} className="rounded-circle img-thumbnail" alt="profileimage"  src={user.profileImage} ></img>
            <h1>{`${user.username}`}</h1>
        </div>

        <Container>
            <Row>

                <UserImages cardheight="40vh" className="col-12 col-md-6 col-lg-4 rounded" user_id={params.id}></UserImages>

            </Row>


        </Container>
    </>
}

export default UserProfilePage
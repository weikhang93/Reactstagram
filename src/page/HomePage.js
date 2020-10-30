import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Loading from '../component/Loading'
import UserImages from '../container/UserImages'
import Image from 'react-graceful-image'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'




const HomePage = () => {






    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {

        axios({
            url: "http://localhost:5000/api/users",
            method: "GET"
        })
            .then((result) => {
                console.log(result.data)
                setUsers(result.data)
                setLoading(false)
            })





    }, [])

    if (loading) {
        return <Loading width={100} ></Loading>
    }

    return (
        <>
          
            {localStorage.getItem("jwt") ?

                
                    users.map(user => (

                        <Container className="mb-3 bg-light border border-dark" fluid key={user.id}>

                            <Row>
                                <Col style={{ display: "flex", alignItems: "center", justifyContent: "center", flexWrap: "wrap", alignContent: "center" }} sm="6" md="6" lg="3">



                                    <Link style={{ textAlign: "center" }} to={`/user/${user.id}`} >

                                        <Image className="rounded-circle img-thumbnail mt-4 mb-4" style={{ width: "200px", height: "200px" }} alt="profileimage" src={user.profileImage}></Image>
                                    </Link>

                                    <h4 >
                                        {user.username}
                                    </h4>


                                </Col>
                                <Col sm="6" md="6" lg="9">
                                    <Row>

                                        <UserImages cardheight="30vh" className={"col-12 col-md-12 col-lg-3"} user_id={user.id}></UserImages>

                                    </Row>


                                </Col>
                            </Row>



                        </Container>
                    ))
                


                : <h3>Login to view all the users from Nextagram =)</h3>}




        </>
    );


}


export default HomePage
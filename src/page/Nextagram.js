import React from 'react'
import { ListGroup, ListGroupItem, Container, Row, Col, Button } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faLocationArrow, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import axios from '../util/axios.png'
import reactstrap from '../util/reactstrap.png'
import flask from '../util/flask.svg'
import loadinggif from '../util/loading.gif'
import { toast } from 'react-toastify'
import TesterModal from '../component/TesterModal'
const Nextagram = () => {

    const demotoastify = () => {

        toast.success("Hello World! This is a toastify notification to improve better UI interactivity")
    }












    return <>
        <div className="d-flex justify-content-center mb-3">

            <h1 className="text-center">Features</h1> <TesterModal buttonLabel="Click ME!"></TesterModal>
        </div>
        <Container>
            <Row>
                <Col lg="6" md="6" sm="12">
                    <ListGroup>
                        <ListGroupItem style={{ backgroundColor: "#d7d9d7" }}>Technical</ListGroupItem>
                        <ListGroupItem style={{ backgroundColor: "#f8f9fa" }}><li className="ml-2">All API end-point is fed by my own backend that is created using Flask. <img alt="flasklogo" className="ml-2 mr-2" width="50" src={flask}></img> <FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon> <a href="https://documenter.getpostman.com/view/12373133/TVYKZwKB" target="_blank" rel="noopener noreferrer">Visit the postman api documentation page.</a> </li></ListGroupItem>
                        <ListGroupItem style={{ backgroundColor: "#f8f9fa" }}><li className="ml-2">Axios package is used for all http requests. <img alt="axioslogo" className="ml-1" width="50" src={axios}></img> </li></ListGroupItem>
                        <ListGroupItem style={{ backgroundColor: "#f8f9fa" }}><li className="ml-2">Loading Indicator while waiting for response from Axios. <img src={loadinggif} alt="loadinggif" width="50"></img></li></ListGroupItem>
                        <ListGroupItem style={{ backgroundColor: "#f8f9fa" }}><li className="ml-2">CSS-framework used = ReactStrap <img alt="reactstraplogo" src={reactstrap} width="50"></img></li></ListGroupItem>
                        <ListGroupItem style={{ backgroundColor: "#f8f9fa" }}><li className="ml-2">Toastify package is used to make App more UI-interactive. <Button className="ml-2" onClick={demotoastify} color="success">Demo</Button> </li></ListGroupItem>
                        <ListGroupItem style={{ backgroundColor: "#f8f9fa" }}><li className="ml-2">JWT token is stored in LocalStorage</li></ListGroupItem>
                        <ListGroupItem style={{ backgroundColor: "#f8f9fa" }}><li className="ml-2">SignUp Form Validation, check for username availability after User stop typing for 0.5 second.</li></ListGroupItem>
                    </ListGroup>



                </Col>

                <Col lg="6" md="6" sm="12">
                    <ListGroup>
                        <ListGroupItem style={{ backgroundColor: "#d7d9d7" }}>App</ListGroupItem>
                        <ListGroupItem style={{ backgroundColor: '#f8f9fa' }}><li className="ml-2">Sign Up / Login for new account <FontAwesomeIcon icon={faLocationArrow} color="green"></FontAwesomeIcon> </li></ListGroupItem>
                        <ListGroupItem style={{ backgroundColor: '#f8f9fa' }}><li className="ml-2">UploadImage , preview Image before uploading </li></ListGroupItem>
                        <ListGroupItem style={{ backgroundColor: '#f8f9fa' }}><li className="ml-2">Like and Unlike Picture <FontAwesomeIcon className="ml-2" icon={faThumbsUp} ></FontAwesomeIcon></li></ListGroupItem>
                        <ListGroupItem style={{ backgroundColor: '#f8f9fa' }}><li className="ml-2">Liked Icon will turn blue if user Liked a picture <FontAwesomeIcon className="ml-2" style={{ color: "blue" }} icon={faThumbsUp}></FontAwesomeIcon> </li></ListGroupItem>
                        <ListGroupItem style={{ backgroundColor: '#f8f9fa' }}><li className="ml-2">Comment on Picture</li></ListGroupItem>
                        <ListGroupItem style={{ backgroundColor: '#f8f9fa' }}><li className="ml-2">Comments are fully "React"-tive. Comments will auto re-render after the POST request is successful. </li></ListGroupItem>
                        <ListGroupItem style={{ backgroundColor: '#f8f9fa' }}><li className="ml-2">A List within a Modal to show who Liked an particular Image </li></ListGroupItem>
                        <ListGroupItem style={{ backgroundColor: '#f8f9fa' }}><li className="ml-2">Logged in user can view all other User's Image </li></ListGroupItem>
                    </ListGroup>


                </Col>


            </Row>

        </Container>




    </>




}



export default Nextagram
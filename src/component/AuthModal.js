import React, { useState } from 'react';
import { Button, Modal, ModalFooter } from 'reactstrap';
import SignUpForm from './SIgnUpForm';
import LoginForm from './LoginForm'

const AuthModal = (props) => {
    const {token , setToken , userdetail,setUserDetail} = props;

    const [modal, setModal] = useState(false);
    const [showLogin, setShowLogin] = useState(true)

    const toggle = () => setModal(!modal);
    const toggleForm = () => setShowLogin(!showLogin)

    return (
        <div>
            <Button outline color="success" onClick={toggle} style={{ cursor: "pointer" }}>Login / Sign Up</Button>
            <Modal isOpen={modal} toggle={toggle}>
            {showLogin ? <LoginForm  userdetail={userdetail}  setUserDetail={setUserDetail} token={token} setToken={setToken} toggle={toggle} /> : <SignUpForm toggleForm={toggleForm} toggle={toggle}></SignUpForm>}

                <ModalFooter>
                    {showLogin
                        ? <><small style={{color:"blue"}}>New user? sign up now!</small><Button color="primary" onClick={toggleForm}>Sign Up </Button> </>
                        :
                        <><small style={{color:"blue"}}>Already a user? Login NOW!</small><Button color="primary" onClick={toggleForm}>Login </Button></>}

          <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default AuthModal
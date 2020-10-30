import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Button
} from 'reactstrap';
import AuthModal from './AuthModal'
import Image from 'react-graceful-image'
import { toast } from 'react-toastify';
import {useHistory} from 'react-router-dom'

const Example = (props) => {
  const {token,setToken, userdetail,setUserDetail}=props
  const [isOpen, setIsOpen] = useState(false);
  const history=useHistory()

  let parseuserdetail=JSON.parse(userdetail)



  

  const handleLogout=() => {
    localStorage.removeItem("jwt")
    setToken(null)
    localStorage.removeItem("userdetail")
    setUserDetail(null)
    toast.success("You are now logged out from Nextagram")
    history.push('/')
  }

  





  
  
 

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>

      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Nextagram</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/home">HomePage</NavLink>
            </NavItem>
            <NavItem>
              {token?<NavLink href="/myprofile"><Image className="mr-2" style={{height:"1.2em",width:"auto", borderRadius:"30%"  }} src={parseuserdetail.profile_picture}></Image>MyProfile
              </NavLink> : <NavLink href="/myprofile">MyProfile
              </NavLink> }

            </NavItem>
            
          </Nav>
          <NavbarText>
            {token?<Button outline color="danger" onClick={handleLogout} >Log Out</Button> : <AuthModal  userdetail={userdetail}  setUserDetail={setUserDetail}token={token} setToken={setToken}></AuthModal> }
              
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;
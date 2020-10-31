import Axios from 'axios'
import React, { useState } from 'react'
import { ModalHeader, ModalBody, Form, FormGroup, Label, Input, Button, FormFeedback } from 'reactstrap'
import {toast} from 'react-toastify'



const SignUpForm = (props) => {
    const { toggle , toggleForm } = props
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [usernamevalid, setUsernamevalid] = useState(false)
    const [usernameinvalid,setUsernameinvalid]=useState(false)




    const [delay,setDelay]=useState(false)    
    const handleInput = (e) => {
        if (e.target.name === "username") {
            const newUsername=e.target.value
            setUsername(e.target.value)
            clearTimeout(delay)
            const newDelay=setTimeout(() => {
              checkUsername(newUsername)
            },500)
            setDelay(newDelay)


            // or can shortcut 1 line
            // setDelay(setTimeout(checkUsername,1000))
        
        
        }
        if (e.target.name === "email") {
            setEmail(e.target.value)
        }
        if (e.target.name === "password") {
            setPassword(e.target.value)
        }

        

    }


    const handleSubmit = (e) => {
        toggle()
        e.preventDefault()
        Axios({
            url:'https://flasktagram.herokuapp.com/api/users/',
            method:"POST",
            data:{
                username:username,
                email:email,
                password:password
            }
        })
            .then((res) => {
              console.log(res.data)
              toggleForm()
              toast.success("You have succesfully sign up. Login Now!")
            })
            .catch((err) => {
              console.log(err.response.data.message)
              toast.error(`${err.response.data.message[0]}`)
            })

            
    }

    const checkUsername=(username) => {
        // console.log(username)
      if (username.length<6){
        setUsernameinvalid(true)
        setUsernamevalid(false)

      }
      if (username.length>=6){
          Axios({
              url:`https://flasktagram.herokuapp.com/api/users/check_name?username=${username}`,
              method:"GET"
            


          })
            .then((result) => { 
              console.log(result)
              if (result.data.valid===true){
                  setUsernamevalid(true)
                  setUsernameinvalid(false)
                  

              }else{
                  setUsernameinvalid(true)
                  setUsernamevalid(false)
              }
            })
      } else{
          setUsernameinvalid(true)
      }

    }
    

    const getFormFeedback=() => {
      if (usernamevalid){
          return <FormFeedback valid>Sweet! This username is available</FormFeedback>
      }
      else if (usernameinvalid && username.length>=6){
          return <FormFeedback invalid>This username is taken! Kindly choose another username</FormFeedback>
      }
      else if (usernameinvalid && username.length <6){
          return <FormFeedback invalid>Please enter a username with at least 6 character</FormFeedback>
      }
          
      
    }




    return <>
        <ModalHeader>Signing Up</ModalHeader>
        <ModalBody>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="username">Username</Label>  
                    <Input valid={usernamevalid} invalid={usernameinvalid} onChange={handleInput} value={username} type="text" name="username" id="username" placeholder="username" />
                    {getFormFeedback()}
                    

                    
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input onChange={handleInput} value={email} type="email" name="email" id="email" placeholder="with a placeholder" />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input onChange={handleInput} value={password} type="password" name="password" id="password" placeholder="password placeholder" />
                </FormGroup>


                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button color="primary" disabled={username.length < 6 || password.length === 0 || email.length === 0}  >Sign Up</Button>

                </div>

            </Form>


        </ModalBody>





    </>

}

export default SignUpForm
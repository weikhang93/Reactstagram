import Axios from 'axios'
import React ,{useState} from 'react'
import { toast } from 'react-toastify'
import { ModalHeader, ModalBody, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import {useHistory} from 'react-router-dom'



const LoginForm = (props) => {
    const {toggle , setToken, setUserDetail}=props


    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const history=useHistory()


    const handleSubmit=(e) => {
        toggle()
        e.preventDefault()
        Axios({
            url:"https://flasktagram.herokuapp.com/api/login/",
            method:"POST",
            data:{
                username:username,
                password:password
            }
        })
            .then((res) => {
                console.log(res)
              if (res.data.status==="success"){

                  toast.success(`Welcome to Nextagram. ${res.data.user.username}`)
                  localStorage.setItem("jwt",res.data.auth_token)
                  localStorage.setItem("userdetail",JSON.stringify(res.data.user))
                  
                  setUserDetail(JSON.stringify(res.data.user))
                  setToken(res.data.auth_token)
                  history.push('/home')
              }
            })
            .catch((err)=>{
                console.log(err)
                toast.error(err.response.data.message)

                console.log("Error : ", err.response.data.message)
                
            })
  
      }

      const handleInput=(e) => {
        if (e.target.name==="username"){
            setUsername(e.target.value)
        }
        if (e.target.name==="password"){
            setPassword(e.target.value)
        }

      }



    return <>
        <ModalHeader>Login Form</ModalHeader>
        <ModalBody>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="username">Username</Label>
                    <Input onChange={handleInput} value={username} type="username" name="username" id="username" placeholder="with a placeholder" />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input onChange={handleInput} value={password} type="password" name="password" id="password" placeholder="password placeholder" />
                </FormGroup>
                <div style={{display:"flex", justifyContent:"flex-end"}}>
                    <Button color="primary" disabled={username.length===0 || password.length===0 } >Login</Button>

                </div>

            </Form>


        </ModalBody>


    </>

}

export default LoginForm
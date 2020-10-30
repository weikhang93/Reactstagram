import React, {useState}  from 'react';
import './App.css';
import HomePage from './page/HomePage'
import UserProfilePage from "./page/UserProfilePage"
import MyProfilePage from "./page/MyProfilePage"
import {Route} from 'react-router-dom'
import NavBar from './component/NavBar'
import {ToastContainer} from 'react-toastify'
import ImagePage from './page/ImagePage'
import Nextagram from './page/Nextagram'

function App() {
  const [token,setToken]=useState(localStorage.getItem("jwt"))
  
  const [userdetail,setUserDetail]=useState(localStorage.getItem("userdetail"))











  return (
    <>
    <ToastContainer></ToastContainer>
    <NavBar  userdetail={userdetail}  setUserDetail={setUserDetail} token={token} setToken={setToken}></NavBar>
    <Route exact path="/" component={Nextagram}></Route>
    <Route exact path="/home" component={HomePage}></Route>
    <Route exact path="/myprofile"> <MyProfilePage userdetail={userdetail} setUserDetail={setUserDetail}/> </Route>
    <Route path="/user/:id" component={UserProfilePage}></Route>
    <Route path="/images/:id/"> <ImagePage userdetail={userdetail} />  </Route>
    </>

  )
}

export default App;

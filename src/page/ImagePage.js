import Axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// import Image from 'react-graceful-image'
import {ListGroup } from 'reactstrap'
import Likes from '../container/Likes'
import Comments from '../container/Comments'
import LikersModal from '../component/LikersModal'


const ImagePage = (props) => {
    const [image, setImage] = useState("")
    const [likers, setLikers] = useState([])
    const {userdetail} = props

    console.log(likers)

    

    const params = useParams()


    useEffect(() => {
        Axios({
            url: `http://localhost:5000/api/images/${params.id}/likes`,
            method: "GET"
        })
            .then((response) => {
                console.log(response)
                setImage(response.data.url)
                setLikers(response.data.likes)
            })


    }, [params.id])

    return <>
        <div className="text-center">

            <img src={image} alt="selectedparticularimage" ></img>
        </div>
        <LikersModal likers={likers} buttonLabel={"Show who liked?"}></LikersModal>

        
         <Likes userdetail={userdetail}  image_id={params.id} ></Likes>
         <ListGroup> 
             <Comments image_id={params.id} ></Comments>



         </ListGroup>



        





    </>




}



export default ImagePage
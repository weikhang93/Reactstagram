import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { ListGroupItem } from 'reactstrap'
import {Link} from 'react-router-dom'

const Likes = (props) => {
    const [liked, setLiked] = useState("black")
    const [numberoflikes, setNumberOfLikes] = useState(null)
    const [imageowner,setImageOwner]=useState({})

    const { image_id, userdetail } = props
    const parseuserdetail = JSON.parse(userdetail)


    useEffect(() => {
        Axios({
            url: `http://localhost:5000/api/images/${image_id}/likes`,
            method: "GET",


        })

            .then((res) => {
                setImageOwner(res.data.owner)
                setNumberOfLikes(res.data.likes.length)
                res.data.likes.forEach(element => {
                    if (element.id === parseuserdetail.id) {
                        setLiked("blue")
                    }

                });
            })
            .catch((err) => {
                console.log(err.response)

            })
    }, [image_id, parseuserdetail.id])

    const handleHover = (e) => {
        //   e.target.style.color="blue"
    }

    const handleLeave = (e) => {
        //   e.target.style.color="black"
    }


    const handleLike = (e) => {
        Axios({
            url: `http://localhost:5000/api/images/${image_id}/toggle_like`,
            method: "POST",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("jwt")}`
            }

        })
            .then((res) => {
                console.log(res.data)
                if (res.data.liked) {

                    setLiked("blue")
                    setNumberOfLikes(numberoflikes + 1)
                } else {
                    setLiked("black")
                    setNumberOfLikes(numberoflikes - 1)
                }
            })

    }






    return <>
        
        <ListGroupItem style={{ width: "100%", display: "flex" }} >
            <div style={{marginLeft:"auto"}}>
                Picture is owned by 
                <Link to={`/user/${imageowner.userid}`}>
                <img className="rounded-circle ml-2" height="30" width="30" src={imageowner.profileImage} alt="pictureowner"></img> 
                {imageowner.username}
                </Link>
            </div>
            <div style={{marginLeft:"auto"}}>

            <span className="mr-2">
                {numberoflikes}
            </span>
            <FontAwesomeIcon style={{ cursor: "pointer", color: liked }} onClick={handleLike} onMouseLeave={handleLeave} onMouseOver={handleHover} size="lg" icon={faThumbsUp}>
            </FontAwesomeIcon>
            </div>
        </ListGroupItem>
    </>

}




export default Likes
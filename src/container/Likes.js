import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { ListGroupItem } from 'reactstrap'
import {Link} from 'react-router-dom'
import LikersModal from '../component/LikersModal'

const Likes = (props) => {
    const [liked, setLiked] = useState("black")
    const [numberoflikes, setNumberOfLikes] = useState(null)
    const [imageowner,setImageOwner]=useState({})
    const [likers,setLikers]=useState([])

    const { image_id, userdetail } = props
    const parseuserdetail = JSON.parse(userdetail)


    useEffect(() => {
        Axios({
            url: `https://flasktagram.herokuapp.com/api/images/${image_id}/likes`,
            method: "GET",


        })

            .then((res) => {
                setImageOwner(res.data.owner)
                setNumberOfLikes(res.data.likes.length)
                setLikers(res.data.likes)


                res.data.likes.forEach(element => {
                    if (element.id === parseuserdetail.id) {
                        setLiked("blue")
                    }

                });
            })
            .catch((err) => {
                console.log(err.response)

            })
    }, [image_id, parseuserdetail.id,liked])

    const handleHover = (e) => {
        //   e.target.style.color="blue"
    }

    const handleLeave = (e) => {
        //   e.target.style.color="black"
    }


    const handleLike = (e) => {
        Axios({
            url: `https://flasktagram.herokuapp.com/api/images/${image_id}/toggle_like`,
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
        
        <ListGroupItem className="mt-3" style={{ width: "100%", display: "flex" }} >
            <div style={{marginLeft:"auto"}}>
                Picture is owned by 
                <Link to={`/user/${imageowner.userid}`}>
                <img className="rounded-circle ml-2" height="30" width="30" src={imageowner.profileImage} alt="pictureowner"></img> 
                {imageowner.username}
                </Link>
            </div>
            
            <LikersModal likers={likers} buttonLabel={"Show who liked?"}></LikersModal>
            
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
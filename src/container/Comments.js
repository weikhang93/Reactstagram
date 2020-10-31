import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ListGroupItem ,Form , Input ,Button} from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'



const Comment = (props) => {

    const { image_id } = props
    const [comments, setComments] = useState([])
    const [inputcomment,setInputComment]=useState("")
    const [submitted,setSubmitted]=useState(false)


    useEffect(() => {
        // console.log("run again")
        Axios({
            url: `https://flasktagram.herokuapp.com/api/images/${image_id}/comments`,
            method: "GET",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("jwt")}`
            }

        })

            .then((res) => {
                console.log(res.data)
                setComments(res.data)


            })




    }, [image_id,submitted])


    const handleInput=(e) => {
      setInputComment(e.target.value)
    }


    const handleSubmit=(e) => {
        e.preventDefault()
        setInputComment("")
        Axios({
            url:`https://flasktagram.herokuapp.com/api/images/${image_id}/comments`,
            method:"POST",
            headers:{
                Authorization:`Bearer ${localStorage.getItem("jwt")}`
            },
            data:{
                content:inputcomment
            }
            
        })

            .then((res) => {
              console.log(res)
              
              setSubmitted(!submitted)
            })


      
    }




    return <>
        {comments.map((comment,idx) => {
            return <ListGroupItem style={{ display: "flex", justifyContent: "space-between" }} key={idx}>
                <Link to={`/user/${comment.posted_by.id}`}>
                <div>
                <img className="rounded-circle mr-2" height="30" width="30" alt="commentator" src={comment.posted_by.profileImage}></img>
                {comment.posted_by.username}

                </div>
                </Link>
                {comment.content}
                <FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon>
            </ListGroupItem>
        })}
        <ListGroupItem>
            <Form onSubmit={handleSubmit}>

                <Input value={inputcomment} onChange={handleInput}></Input>
                
                <div className="d-flex justify-content-end mt-2">

                <Button onClick={handleSubmit}style={{cursor:"pointer"}} className="mr-5">Comment</Button>
                </div>
                

            </Form>
        </ListGroupItem>

    </>


}




export default Comment
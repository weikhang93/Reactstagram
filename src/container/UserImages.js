import Axios from 'axios'
import React, { useState, useEffect } from 'react'
import Loading from '../component/Loading'
import Image from 'react-graceful-image'
// import Comments from '../container/Comments'
// import Likes from '../container/Likes'
import { Card, CardBody } from 'reactstrap'
import { Link } from 'react-router-dom'





const UserImages = (props) => {
    const { user_id, imagefile, className, cardheight } = props

    const [images, setImages] = useState([])
    const [loading, setLoading] = useState(true)



    useEffect(() => {
        // console.count("hehehe")

        Axios({
            url: `http://localhost:5000/api/images?userId=${user_id}`,
            method: "GET"

        })
            .then((result) => {
                setImages(result.data)
                setLoading(false)
            })

    }, [user_id, imagefile])







    if (loading) {
        return <Loading width={25}></Loading>
    }

    return <>
        {images.map(image => {

            return <div className={className} style={{ marginTop: "5px", marginBottom: "5px" }} key={image.id}>

                <Card style={{ height: cardheight }}>



                    <CardBody>
                        <Link to={`/images/${image.id}`} >

                            <Image width="100%" height="200px" src={image.url} ></Image>
                        </Link>

                    </CardBody>
                </Card>


            </div>
        })}</>

}

export default UserImages
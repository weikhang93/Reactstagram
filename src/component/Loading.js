import React from 'react'
import loading from '../util/loading.gif'





const Loading=(props) => {
    const {width}=props
  

    return <img style={{width:`${width}%`,height:"auto"}} src={loading} alt="Loading"></img>
}

export default Loading
import React from 'react'

function Image(props){
    console.log(props)
    // i figure it out by digging into the props!!
    return (
        <div className={`${props.someClass} image-container`}>
            <img src={props.photo.url} className="image-grid" alt=""/>
        </div>
    )
}

export default Image
import React,{useState} from 'react'

function Image(props){
    // console.log(props)
    // i figure it out by digging into the props!!

    //next, track hover state
    //create state boolean for hovered
    const [hovered, setHovered] = useState(false)
    console.log({hovered})

    function handleHover(){
        // console.log('on mouse over')
        setHovered(true)
    }

    return (
        <div className={`${props.someClass} image-container`}>
            <img 
                src={props.photo.url}
                className="image-grid"                
                onMouseEnter={handleHover}
                onMouseLeave={() => setHovered(false)}
                alt=""/>
        </div>
    )
}

export default Image
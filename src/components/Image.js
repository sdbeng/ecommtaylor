import React,{useState} from 'react'

function Image(props){
    // console.log(props)
    // i figure it out by digging into the props!!

    //next, track hover state
    //create state boolean for hovered
    const [hovered, setHovered] = useState(false)
    // console.log({hovered})

    function handleHover(){
        // console.log('on mouse over')
        setHovered(true)

    }

    // conditionally render the heart and plus icon when an Image component is being hovered on - create 2 variables
    const heartIcon = hovered && <a href="/"><i className="ri-heart-line favorite"></i></a>
    const cartIcon = hovered && <a href="/"><i className="ri-add-circle-line cart"></i></a>

    return (
        <div className={`${props.someClass} image-container`}>
            <img 
                src={props.photo.url}                
                className="image-grid"                
                onMouseEnter={handleHover}
                onMouseLeave={() => setHovered(false)}
                alt=""/>
                {heartIcon}
                {cartIcon}
        </div>
    )
}

export default Image
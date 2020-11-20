import React,{useEffect, useState} from 'react'
export const myContext = React.createContext()

function CustomComponentProvider(props){
    const [allPhotos, setAllPhotos] = useState([])

    // get the json data with the photos info from API, then save it to context state
    useEffect(() => {
        fetchPhotos()
    }, [])

    function fetchPhotos(){
        fetch(`https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json`)
        .then(res => res.json())
        .then(data => setAllPhotos(data))
    }

    // console.log({allPhotos})

    //Dont forget to pass double curly braces to the value of provider!!
    return (
        <myContext.Provider value={{allPhotos}}>
            {props.children}
        </myContext.Provider>
    )
}

export {CustomComponentProvider}